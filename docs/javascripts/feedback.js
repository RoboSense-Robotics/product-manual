(function () {
  "use strict";

  var CONFIG = window.FEEDBACK_CONFIG || {};
  var PLACEHOLDER = "__FEEDBACK_API_URL__";
  var PAGE_PRODUCT_MAP = {
    EM4_CN: "EM4",
    EMX_CN: "EMX",
    E1R_CN: "E1R",
    E1_CN: "E1",
    Airy: "Airy",
    Fairy_CN_48T1: "Fairy (48T1)",
    Fairy_CN_48TX: "Fairy (48TX)",
  };

  function getEndpoint() {
    var endpoint = (CONFIG.endpoint || "").trim();
    if (!endpoint || endpoint === PLACEHOLDER) {
      return "";
    }
    return endpoint;
  }

  function detectProduct() {
    var parts = window.location.pathname.split("/").filter(Boolean);
    var slug = parts[parts.length - 1] || "";
    if (slug === "index.html") {
      slug = parts[parts.length - 2] || "";
    }
    return PAGE_PRODUCT_MAP[slug] || "";
  }

  function createElement(tag, className, text) {
    var el = document.createElement(tag);
    if (className) {
      el.className = className;
    }
    if (text !== undefined) {
      el.textContent = text;
    }
    return el;
  }

  function buildProductOptions(select, products, selected) {
    var placeholder = createElement("option", "", "请选择产品");
    placeholder.value = "";
    placeholder.disabled = true;
    if (!selected) {
      placeholder.selected = true;
    }
    select.appendChild(placeholder);

    (products || []).forEach(function (name) {
      var option = createElement("option", "", name);
      option.value = name;
      if (name === selected) {
        option.selected = true;
      }
      select.appendChild(option);
    });
  }

  function setFormMessage(form, type, text) {
    var message = form.querySelector(".feedback-form__message");
    message.textContent = text || "";
    message.hidden = !text;
    message.classList.toggle("feedback-form__message--error", type === "error");
    message.classList.toggle("feedback-form__message--success", type === "success");
  }

  function setOpen(isOpen) {
    var dialog = document.getElementById("feedback-dialog");
    var backdrop = document.getElementById("feedback-backdrop");
    var launcher = document.getElementById("feedback-launcher");
    if (!dialog || !backdrop || !launcher) {
      return;
    }

    dialog.hidden = !isOpen;
    backdrop.hidden = !isOpen;
    launcher.setAttribute("aria-expanded", isOpen ? "true" : "false");
    document.body.classList.toggle("feedback-open", isOpen);

    if (isOpen) {
      var productSelect = dialog.querySelector("#feedback-product");
      if (productSelect && !productSelect.value) {
        var detected = detectProduct();
        if (detected) {
          productSelect.value = detected;
        }
      }
      var textarea = dialog.querySelector("#feedback-message");
      if (textarea) {
        textarea.focus();
      }
    }
  }

  function validateEmail(value) {
    if (!value) {
      return true;
    }
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    var form = event.currentTarget;
    var endpoint = getEndpoint();
    var product = form.product.value.trim();
    var message = form.message.value.trim();
    var email = form.email.value.trim();
    var submitButton = form.querySelector('button[type="submit"]');

    setFormMessage(form, "", "");

    if (!endpoint) {
      setFormMessage(
        form,
        "error",
        "反馈接口尚未配置，请联系管理员部署 Cloudflare Worker 并设置 FEEDBACK_API_URL。"
      );
      return;
    }

    if (!product) {
      setFormMessage(form, "error", "请选择相关产品。");
      return;
    }

    if (!message) {
      setFormMessage(form, "error", "请填写问题或建议。");
      return;
    }

    if (!validateEmail(email)) {
      setFormMessage(form, "error", "邮箱格式不正确。");
      return;
    }

    submitButton.disabled = true;
    submitButton.textContent = "提交中…";

    fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        product: product,
        message: message,
        email: email,
        pageUrl: window.location.href,
      }),
    })
      .then(function (response) {
        if (!response.ok) {
          return response.text().then(function (text) {
            throw new Error(text || "提交失败，请稍后重试。");
          });
        }
        return response.json().catch(function () {
          return {};
        });
      })
      .then(function () {
        form.reset();
        buildProductOptions(
          form.product,
          CONFIG.products,
          detectProduct()
        );
        setFormMessage(form, "success", "感谢反馈，我们已收到。");
        window.setTimeout(function () {
          setOpen(false);
          setFormMessage(form, "", "");
        }, 1200);
      })
      .catch(function (error) {
        setFormMessage(
          form,
          "error",
          error && error.message ? error.message : "提交失败，请稍后重试。"
        );
      })
      .finally(function () {
        submitButton.disabled = false;
        submitButton.textContent = "提交反馈";
      });
  }

  function mountFeedbackWidget() {
    if (document.getElementById("feedback-launcher")) {
      return;
    }

    var launcher = createElement("button", "feedback-launcher");
    launcher.id = "feedback-launcher";
    launcher.type = "button";
    launcher.setAttribute("aria-label", "意见反馈");
    launcher.setAttribute("aria-expanded", "false");
    launcher.setAttribute("title", "意见反馈");
    launcher.innerHTML =
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H5.2L4 17.2V4h16v12z"/></svg>';

    var backdrop = createElement("div", "feedback-backdrop");
    backdrop.id = "feedback-backdrop";
    backdrop.hidden = true;

    var dialog = createElement("section", "feedback-dialog");
    dialog.id = "feedback-dialog";
    dialog.setAttribute("role", "dialog");
    dialog.setAttribute("aria-modal", "true");
    dialog.setAttribute("aria-labelledby", "feedback-title");
    dialog.hidden = true;

    var card = createElement("div", "feedback-card");
    var title = createElement("h2", "feedback-card__title", "反馈表单");
    title.id = "feedback-title";

    var form = createElement("form", "feedback-form");
    form.addEventListener("submit", handleSubmit);

    var productField = createElement("div", "feedback-field");
    var productLabel = createElement("label", "", "相关产品");
    productLabel.htmlFor = "feedback-product";
    productField.appendChild(productLabel);
    var productSelect = createElement("select", "feedback-input");
    productSelect.id = "feedback-product";
    productSelect.name = "product";
    productSelect.required = true;
    buildProductOptions(productSelect, CONFIG.products, detectProduct());
    productField.appendChild(productSelect);

    var messageField = createElement("div", "feedback-field");
    var messageLabel = createElement("label", "", "描述问题或建议");
    messageLabel.htmlFor = "feedback-message";
    messageField.appendChild(messageLabel);
    var messageInput = createElement("textarea", "feedback-input feedback-input--textarea");
    messageInput.id = "feedback-message";
    messageInput.name = "message";
    messageInput.rows = 5;
    messageInput.required = true;
    messageField.appendChild(messageInput);

    var emailField = createElement("div", "feedback-field");
    var emailLabel = createElement("label", "", "联系邮箱");
    emailLabel.htmlFor = "feedback-email";
    emailField.appendChild(emailLabel);
    var emailInput = createElement("input", "feedback-input");
    emailInput.id = "feedback-email";
    emailInput.name = "email";
    emailInput.type = "email";
    emailInput.placeholder = "选填，便于我们回复您";
    emailField.appendChild(emailInput);

    var message = createElement("p", "feedback-form__message");
    message.hidden = true;

    var actions = createElement("div", "feedback-form__actions");
    var submitButton = createElement("button", "feedback-submit", "提交反馈");
    submitButton.type = "submit";
    actions.appendChild(submitButton);

    form.appendChild(productField);
    form.appendChild(messageField);
    form.appendChild(emailField);
    form.appendChild(message);
    form.appendChild(actions);

    var closeButton = createElement("button", "feedback-close");
    closeButton.type = "button";
    closeButton.setAttribute("aria-label", "关闭");
    closeButton.innerHTML = "&times;";

    card.appendChild(closeButton);
    card.appendChild(title);
    card.appendChild(form);
    dialog.appendChild(card);

    document.body.appendChild(launcher);
    document.body.appendChild(backdrop);
    document.body.appendChild(dialog);

    launcher.addEventListener("click", function () {
      setOpen(true);
    });

    closeButton.addEventListener("click", function () {
      setOpen(false);
    });

    backdrop.addEventListener("click", function () {
      setOpen(false);
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && !dialog.hidden) {
        setOpen(false);
      }
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", mountFeedbackWidget);
  } else {
    mountFeedbackWidget();
  }
})();
