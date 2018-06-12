const path = require('path');

module.exports = {
    entry: {
        app: './src/myuw-help-and-feedback.js'
    },
    output: {
        filename: 'myuw-help-and-feedback.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [],
    },
}