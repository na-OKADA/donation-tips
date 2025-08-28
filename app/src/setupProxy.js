const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/testnet',
    createProxyMiddleware({
      target: 'https://node.testnet.casper.network',
      changeOrigin: true,
      pathRewrite: {
        '^/testnet': '/rpc',
      },
    })
  );

  app.use(
    '/nctl',
    createProxyMiddleware({
      target: 'http://localhost:11101',
      changeOrigin: true,
      pathRewrite: {
        '^/nctl': '/rpc',
      },
    })
  );
};
