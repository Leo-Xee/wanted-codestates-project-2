const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/kart/v1.0/users", {
      target: "https://api.nexon.co.kr/",
      changeOrigin: true,
    }),
  );
};
