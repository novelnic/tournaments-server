const router = require('express').Router();
const matchController = require('../controllers/matchController');

router
  .route('/')
  .get(matchController.findAllMatches)
  .post(matchController.createMatch);

router
  .route('/:id')
  .get(matchController.findMatchById)
  .put(matchController.updateMatch)
  .delete(matchController.deleteMatch);

module.exports = router;
