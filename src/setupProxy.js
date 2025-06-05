const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function(app) {
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
};
