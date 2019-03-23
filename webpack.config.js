
const path=require("path");
const webpack = require('webpack');
const UnminifiedWebpackPlugin = require('unminified-webpack-plugin');
const fs=require("fs");

module.exports={
	entry:"./src/main.js",
	output:{
		path:path.resolve(__dirname,"dist"),
		filename:"acss.min.js"
	},
	devServer:{
		contentBase:'./',
		before: function(app, server) {
      		app.post('/acss-live-update/', function(req, res) {
      			req.pipe(fs.createWriteStream('./public/css/ajax.css'));
      		});
		},
	},
	devtool:"inline-source-map",
	plugins: [
        new UnminifiedWebpackPlugin()
    ]
}