const path = require('path')

module.exports = {
    entry: {
        index: path.resolve(__dirname,'js/dashboard_main.js'),
    },
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js'
    },


}