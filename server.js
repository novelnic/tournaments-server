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

<<<<<<< HEAD
cron.schedule('*/5 * * * *', async () => {
=======
cron.schedule('*/1 * * * *', async () => {
>>>>>>> 61eda18d7c1695b559e8c8d45edae9293b768d99
  await Update.update();
});

// Bootstrap server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}.`);
});
