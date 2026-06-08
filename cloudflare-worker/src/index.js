/**
 * 将产品手册反馈转发至飞书群机器人 Webhook。
 *
 * 环境变量（wrangler secret）：
 * - FEISHU_WEBHOOK_URL：飞书自定义机器人 Webhook 地址
 * - ALLOWED_ORIGINS：允许的站点来源，逗号分隔，例如
 *   https://robosense-robotics.github.io,http://127.0.0.1:8000
 */

const MAX_MESSAGE_LENGTH = 2000;
const MAX_EMAIL_LENGTH = 120;
const MAX_PRODUCT_LENGTH = 80;

function parseAllowedOrigins(value) {
  return (value || "")
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
}

function corsHeaders(origin, allowedOrigins) {
  const headers = {
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  };

  if (origin && allowedOrigins.includes(origin)) {
    headers["Access-Control-Allow-Origin"] = origin;
    headers["Vary"] = "Origin";
  }

  return headers;
}

function jsonResponse(body, status, origin, allowedOrigins) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      ...corsHeaders(origin, allowedOrigins),
    },
  });
}

function sanitizeText(value, maxLength) {
  return String(value || "")
    .trim()
    .slice(0, maxLength);
}

function buildFeishuText(payload) {
  const lines = [
    "📋 产品手册反馈",
    "────────────────",
    `产品：${payload.product}`,
    `页面：${payload.pageUrl}`,
    `邮箱：${payload.email || "未填写"}`,
    "",
    "反馈内容：",
    payload.message,
  ];
  return lines.join("\n");
}

export default {
  async fetch(request, env) {
    const allowedOrigins = parseAllowedOrigins(env.ALLOWED_ORIGINS);
    const origin = request.headers.get("Origin") || "";

    if (request.method === "OPTIONS") {
      return new Response(null, {
        status: 204,
        headers: corsHeaders(origin, allowedOrigins),
      });
    }

    if (request.method !== "POST") {
      return jsonResponse({ error: "Method not allowed" }, 405, origin, allowedOrigins);
    }

    if (!env.FEISHU_WEBHOOK_URL) {
      return jsonResponse({ error: "Server misconfigured" }, 500, origin, allowedOrigins);
    }

    if (!origin || !allowedOrigins.includes(origin)) {
      return jsonResponse({ error: "Origin not allowed" }, 403, origin, allowedOrigins);
    }

    let body;
    try {
      body = await request.json();
    } catch {
      return jsonResponse({ error: "Invalid JSON" }, 400, origin, allowedOrigins);
    }

    const product = sanitizeText(body.product, MAX_PRODUCT_LENGTH);
    const message = sanitizeText(body.message, MAX_MESSAGE_LENGTH);
    const email = sanitizeText(body.email, MAX_EMAIL_LENGTH);
    const pageUrl = sanitizeText(body.pageUrl, 500);

    if (!product || !message) {
      return jsonResponse({ error: "Missing required fields" }, 400, origin, allowedOrigins);
    }

    const feishuResponse = await fetch(env.FEISHU_WEBHOOK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify({
        msg_type: "text",
        content: {
          text: buildFeishuText({ product, message, email, pageUrl }),
        },
      }),
    });

    if (!feishuResponse.ok) {
      const detail = await feishuResponse.text();
      return jsonResponse(
        { error: "Failed to send to Feishu", detail },
        502,
        origin,
        allowedOrigins
      );
    }

    let feishuResult = {};
    try {
      feishuResult = await feishuResponse.json();
    } catch {
      feishuResult = {};
    }

    if (feishuResult.code && feishuResult.code !== 0) {
      return jsonResponse(
        { error: "Feishu rejected the message", detail: feishuResult },
        502,
        origin,
        allowedOrigins
      );
    }

    return jsonResponse({ ok: true }, 200, origin, allowedOrigins);
  },
};
