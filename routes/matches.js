const router = require('express').Router();
const auth = require('../middleware/auth');
const matchController = require('../controllers/matchController');

router
  .route('/')
  .get(matchController.findAllMatches)
  .post(auth, matchController.createMatch);

router
  .route('/:id')
  .get(matchController.findMatchById)
  .put(auth, matchController.updateMatch)
  .delete(auth, matchController.deleteMatch);

module.exports = router;
