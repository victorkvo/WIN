module.exports = {
	entry: {
		app: "./javascript/index",
	},
	output: {
		filename: 'bundle.js',
		path: __dirname + '/dist/'
	}
    ,
    module: {
        rules: [
          {
            test: /\.css$/,
            use: [
              { loader: 'style-loader' },
              { loader: 'css-loader'}
            ]
          }
        ]
      }
};


