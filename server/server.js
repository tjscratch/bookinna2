let express = require('express');
let path = require('path');

let webpack = require ('webpack');
let webpackMiddleware = require ('webpack-dev-middleware');
let webpackHotMiddleware = require ('webpack-hot-middleware');
let webpackConfig = require ('../webpack.config');

let app = express();

let compiler = webpack(webpackConfig);


app.use(webpackMiddleware(compiler));
app.use(webpackHotMiddleware(compiler, {
   hot: true,
   publicPath: webpackConfig.output.publicPath,
   noInfo: true
}));

app.get('/*', (req, res) => {
   res.sendFile(path.join(__dirname, '../client/index.html'));
});

app.listen(3000, () => console.log('Running on http://localhost:3000/'));
