const Team = require('../models/Team');
const Utils = require('../utils');
const Match = require('../models/Match');

const findAllTeams = (req, res) => {
  Team.find(req.query)
    .then(teams => res.json(teams))
    .catch(err => res.status(422).json(err));
};

const findTeamById = (req, res) => {
  Team.findById(req.params.id)
    .then(team => res.json(team))
    .catch(err => res.status(422).json(err));
};

const createTeam = (req, res) => {
  Team.create(req.body)
    .then(newTeam => res.json(newTeam))
    .catch(err => {
      return res.status(422).json(err);
    });
};

const updateTeam = (req, res) => {
  Team.findOneAndUpdate(req.body)
    .then(newTeam => res.json(newTeam))
    .catch(err => res.status(422).json(err));
};

const deleteTeam = (req, res) => {
  Team.findOneAndDelete({ _id: req.params.id })
    .then(deletedTeam => res.json(deletedTeam))
    .catch(err => res.status(422).json(err));
};

const getScore = (req, res) => {
  Match.find({ teamId: req.params.id })
    .then(matches => {
      let score = Utils.computeScore(matches);
      return res.json(score);
    })
    .catch(err => res.status(422).json(err));
};

module.exports = {
  findAllTeams,
  findTeamById,
  createTeam,
  updateTeam,
  deleteTeam,
  getScore,
};
