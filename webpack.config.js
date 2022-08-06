const path = require('path');
const { mainModule } = require('process');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports={
    entry: "./src/index.js",
    output: {
        path:path.resolve(__dirname, 'dist'),
        publicPath:'',
        filename: "main.js"
    },
    module:{
        rules:[
            {
                test:/\.(png|svg|jpg|jpeg|gif)$/i,
                type:"asset/resource",
            },
            {
                test:/\.(woff\woff2\eot\ttf\otf)$/i,
                type:"asset/resource"
            },
            {
                test:/\.css$/i,
                use:['style-loader', 'css-loader']
            },
        ]

    },
    devtool:"inline-source-map",
    devServer:{
      static: "./dist",
    },
    plugins: [
        new HtmlWebpackPlugin({
          hash:true,  
          title: 'test',
          template:"./src/index.html",
          filename:"../dist/index.html"
        })
        
      ],

}