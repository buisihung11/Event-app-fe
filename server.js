const express = require('express');
const path = require('path');
const compression = require('compression');
const morgan = require('morgan');

const app = express();
const port = process.env.PORT || 8080;

const dev = app.get('env') !== 'production';

console.log(app.get('env'));

if (!dev) {
  app.disable('x-powered-by');
  app.use(compression());
  app.use(morgan('common'));
}
if (dev) {
  app.use(morgan('dev'));
}

// the __dirname is the current directory from where the script is running
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'dist')));

app.get('/ping', (req, res) => {
  return res.send('pong');
});
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(port);
