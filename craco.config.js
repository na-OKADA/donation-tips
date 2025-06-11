const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');

module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      // babel-loaderのexcludeを調整（casper-js-sdkをトランスパイル対象に含める）
      const oneOfRule = webpackConfig.module.rules.find(rule => Array.isArray(rule.oneOf))?.oneOf;

      if (oneOfRule) {
        const babelLoader = oneOfRule.find(
          rule =>
            rule.loader &&
            rule.loader.includes('babel-loader') &&
            rule.options &&
            rule.options.presets
        );

        if (babelLoader) {
          babelLoader.exclude = /node_modules\/(?!casper-js-sdk)/;
        }
      }

      // Node.jsモジュールのポリフィル
      webpackConfig.resolve.fallback = {
        ...webpackConfig.resolve.fallback,
        crypto: require.resolve('crypto-browserify'),
        stream: require.resolve('stream-browserify'),
        buffer: require.resolve('buffer'),
        process: require.resolve('process/browser'),
      };

      webpackConfig.plugins = [
        ...(webpackConfig.plugins || []),
        new NodePolyfillPlugin(),
      ];

      return webpackConfig;
    }
  }
};
