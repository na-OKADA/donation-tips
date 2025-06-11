const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function(app) {
<<<<<<< HEAD
    app.use(
        '/testnet',
        createProxyMiddleware({
            target: 'https://node.testnet.casper.network/rpc',
            changeOrigin: true,
        })
    );
    app.use(
        '/nctl',
        createProxyMiddleware({
            target: 'http://localhost:11101/rpc',
            changeOrigin: true,
        })
    );
=======
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
>>>>>>> 4c052e5 (Update: 20250610)
};
