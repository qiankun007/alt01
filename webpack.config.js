var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');
var glob = require('glob');
var src_dir = path.join(__dirname,'src');
var env = process.env.NODE_ENV;

var config = {
    context:src_dir,
    entry:{},
    output:{
        path: path.join(__dirname,'build'),
        publicPath:'/',
        filename:'js/[name].js',
        chunkFilename:'js/[id].js',
        pathinfo:false
    },
    resolve:{
        root:path.join(__dirname,'.'),
        modulesDirectories:['node_modules','src'],
        extensions:['','.react.js','.js','.jsx','.es6']
    },
    module:{
        loaders:[{
            test:/\.jsx?$/,
            loader:'babel-loader',
            exclude: /node_modules/,
            query:{
                presets:['es2015','react','stage-0'],

            }
        },{
            test:/\.coffee$/,
            loader:'coffee-jsx'
        },{
            test:/\.less/,
            loader:'style!css!less'
        },{
            test:/\.s(c|a)ss$/,
            loader:'style!css!sass'
        },{
            test:/\.css$/,
            loader:ExtractTextPlugin.extract(
                'style-loader',
                'css-loader'
            )
        },{
            test:/\.(png|jpg|jpeg|gif)$/,
            loader:'url-loader?limit=10000'
        },{
            test:/\.(woff|woff2|eot|ttf|svg)(\?.*)?$/,
            loader:'url-loader?limit=10000&name=fonts/[hash].[ext]'
        }],
    },

    plugins:[
        new ExtractTextPlugin('css/[name].css'),
        new webpack.optimize.CommonsChunkPlugin('js/common.js'),
        new webpack.ProvidePlugin({
            'fetch':'imports?this=>global!exports?global.fetch!whatwg-fetch'
        })
    ]
}

glob.sync(path.join(src_dir,'js/*.js')).forEach(function(entry){
    entry = path.parse(entry);
    config.entry[entry.name] = './js/' +entry.base;
});
console.log(config.entry);
if(env !== 'development'){
    config.plugins.push(new webpack.optimize.UglifyJsPlugin());
}

module.exports = exports = config;









