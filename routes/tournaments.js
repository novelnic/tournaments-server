const router = require('express').Router();
const auth = require('../middleware/auth');
const tournamentsController = require('../controllers/tournamentsController');

router
  .route('/')
  .get(tournamentsController.findAllTournaments)
  .post(auth, tournamentsController.createTournament);

router
  .route('/:id')
  .get(tournamentsController.findTournamentById)
  .put(auth, tournamentsController.updateTournament)
  .delete(auth, tournamentsController.deleteTournament);

module.exports = router;
