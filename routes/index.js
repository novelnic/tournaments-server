const router = require('express').Router();
const tournamentRoutes = require('./tournaments');
const path = require('path');

router.use('/api/tournaments', tournamentRoutes);

router.use(function (req, res) {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

module.exports = router;
