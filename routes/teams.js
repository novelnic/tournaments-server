const router = require('express').Router();
const auth = require('../middleware/auth');
const teamController = require('../controllers/teamController');

router
  .route('/')
  .get(teamController.findAllTeams)
  .post(auth, teamController.createTeam);

router
  .route('/:id')
  .get(teamController.findTeamById)
  .put(auth, teamController.updateTeam)
  .delete(auth, teamController.deleteTeam);

router.route('/:id/score').get(teamController.getScore);

module.exports = router;
