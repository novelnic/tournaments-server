const router = require('express').Router();
const teamController = require('../controllers/teamController');

router
  .route('/')
  .get(teamController.findAllTeams)
  .post(teamController.createTeam);

router
  .route('/:id')
  .get(teamController.findTeamById)
  .put(teamController.updateTeam)
  .delete(teamController.deleteTeam);

router.route('/:id/score').get(teamController.getScore);

module.exports = router;
