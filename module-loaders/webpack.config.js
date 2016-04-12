var webpack=require('webpack'),
debug = process.env.NODE_ENV !== 'production';

module.exports = {
	context: __dirname,
	devtool: debug?"inline-sourcemap":null,
	entry:"./js/script.js",
	output:{
		path:__dirname+"/js",
		filename:"scripts.min.js"
	},
	plugins: debug ? []:[
	new webpack.optimize.DedupePlugin(),
	new webpack.optimize.OccurencePlugin(),
	new webpack.optimize.UglifyJsPlugin({mangle:false, sourcemap: false}),
	],
};
