/**
 * 意见反馈配置（与 mkdocs.yml nav 手册名称保持一致）
 * 部署时由 CI 将 __FEEDBACK_API_URL__ 替换为 Cloudflare Worker 地址
 */
window.FEEDBACK_CONFIG = {
  endpoint: "__FEEDBACK_API_URL__",
  products: [
    "EM4",
    "EMX",
    "E1R",
    "E1",
    "Airy",
    "Fairy (48T1)",
    "Fairy (48TX)",
  ],
};
