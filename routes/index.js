const router = require('express').Router();
const tournamentRoutes = require('./tournaments');
const teamRoutes = require('./teams');
const matchRoutes = require('./matches');
const userRoutes = require('./users');
const authRoutes = require('./auth');
const path = require('path');

router.use('/api/tournaments', tournamentRoutes);
router.use('/api/teams', teamRoutes);
router.use('/api/matches', matchRoutes);
//router.use('/api/users', userRoutes);

router.use('/api/auth', authRoutes);

router.use('*', function (req, res) {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

module.exports = router;
