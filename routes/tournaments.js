const router = require('express').Router();
const tournamentsController = require('../controllers/tournamentsController');

router
  .route('/')
  .get(tournamentsController.findAll)
  .post(tournamentsController.create);

router
  .route('/:id')
  .get(tournamentsController.findById)
  .put(tournamentsController.update)
  .delete(tournamentsController.remove);

module.exports = router;
