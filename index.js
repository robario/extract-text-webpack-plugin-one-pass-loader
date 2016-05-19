'use strict';
// core
const path = require('path');

function canSkip(loaderContext) {
    return loaderContext[canSkip.extractTextWebpackPluginDir ||
                         (canSkip.extractTextWebpackPluginDir = path.dirname(require.resolve('extract-text-webpack-plugin')))] &&
        loaderContext.options.output.filename !== 'extract-text-webpack-plugin-output-filename';
}

module.exports = function (source) {
    if (this.cacheable) {
        this.cacheable();
    }
    if (canSkip(this)) {
        return '';
    }
    return source;
};
