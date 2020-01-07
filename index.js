const express = require('express');
const app = express();
const routes = require('./routes/router');

app.use('/', routes);

app.listen(3000, () => {
  console.log('server is listening');
});
