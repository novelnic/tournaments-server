const router = require('express').Router();
const tournamentsController = require('../controllers/tournamentsController');

router
  .route('/')
  .get(tournamentsController.findAllTournaments)
  .post(tournamentsController.createTournament);

router
  .route('/:id')
  .get(tournamentsController.findTournamentById)
  .put(tournamentsController.updateTournament)
  .delete(tournamentsController.deleteTournament);

module.exports = router;
