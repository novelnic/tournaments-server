const Tournament = require('../models/Tournaments');

module.exports = {
  findAllTournaments: (req, res) => {
    Tournament.find(req.query)
      .then(tournaments => res.json(tournaments))
      .catch(err => res.status(422).json(err));
  },
  findTournamentById: (req, res) => {
    Tournament.findById(req.params.id)
      .then(tournament => res.json(tournament))
      .catch(err => res.status(422).json(err));
  },
  createTournament: (req, res) => {
    Tournament.create(req.body)
      .then(newTournament => res.json(newTournament))
      .catch(err => res.status(422).json(err));
  },
  updateTournament: (req, res) => {
    Tournament.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
      .then(tournament => res.json(tournament))
      .catch(err => res.status(422).json(err));
  },
  deleteTournament: (req, res) => {
    Tournament.findOneAndDelete({ _id: req.params.id })
      .then(deletedTournament => res.json(deletedTournament))
      .catch(err => res.status(422).json(err));
  },
};
