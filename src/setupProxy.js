const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function(app) {
    app.use(
        '/testnet',
        createProxyMiddleware({
            target: 'http://159.65.118.250:7777/rpc',
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
