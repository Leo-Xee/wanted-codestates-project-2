const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/kart", {
      target: "https://api.nexon.co.kr/",
      changeOrigin: true,
    }),
  );
};
