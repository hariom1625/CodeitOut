const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');

module.exports = function override(config, env) {
    config.plugins.push(new MonacoWebpackPlugin({
        languages: ['cpp'],
        features:[ 'wordHighlighter', 'wordOperations', 'wordPartOperations']

    }));
    return config;
}
