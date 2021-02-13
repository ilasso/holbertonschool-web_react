const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: {
      all: ["./modules/header/header.js", "./modules/body/body.js", "./modules/footer/footer.js"],
      /*header: './modules/header/header.js',
      body: './modules/body/body.js',
      footer: './modules/footer/footer.js'*/
    },
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: '[name].bundle.js'
    },
    devtool: 'inline-source-map',
    devServer: {
      contentBase: path.join(__dirname, './public'),
      compress: true,
      port:8564,  
     },
     plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader','css-loader']
            },
            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                use: [
                  'file-loader',
                  {
                    loader: 'image-webpack-loader',
                    options: {
                      bypassOnDebug: true, // webpack@1.x
                      disable: true, // webpack@2.x and newer
                    },
                  },
                ],
              }
        ]
    }

}