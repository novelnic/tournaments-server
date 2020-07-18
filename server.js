// server.js
const express = require('express');
const app = express();
const routes = require('./routes');
require('dotenv').config();
const Update = require('./update');
const cron = require('node-cron');

const PORT = process.env.PORT || 5000;

require('./models');

// configure body parser for AJAX requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('client/build'));

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');

  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  res.header('Content-Type', 'application/json');

  next();
});

// routes
app.use(routes);

cron.schedule('*/5 * * * *', async () => {
  await Update.update();
});

// Bootstrap server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}.`);
});
