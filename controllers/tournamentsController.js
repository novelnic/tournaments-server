const Tournament = require('../models/Tournaments');

module.exports = {
  findAll: (req, res) => {
    Tournament.find(req.query)
      .then(tournaments => res.json(tournaments))
      .catch(err => res.status(422).json(err));
  },
  findById: (req, res) => {
    Tournament.findById(req.params.id)
      .then(tournament => res.json(tournament))
      .catch(err => res.status(422).json(err));
  },
  create: (req, res) => {
    Tournament.create(req.body)
      .then(newTournament => res.json(newTournament))
      .catch(err => res.status(422).json(err));
  },
  update: (req, res) => {
    Tournament.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(tournament => res.json(tournament))
      .catch(err => res.status(422).json(err));
  },
  remove: (req, res) => {
    Tournament.findById({ _id: req.params.id })
      .then(tournament => tournament.remove())
      .then(allTournaments => res.json(allTournaments))
      .catch(err => res.status(422).json(err));
  },
};
