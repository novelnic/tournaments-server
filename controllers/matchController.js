const Match = require('../models/Match');

const findAllMatches = (req, res) => {
  Match.find(req.query)
    .then(matches => res.json(matches))
    .catch(err => res.status(422).json(err));
};

const findMatchById = (req, res) => {
  Match.findById(req.params.id)
    .then(match => res.json(match))
    .catch(err => res.status(422).json(err));
};

const createMatch = (req, res) => {
  Match.create(req.body)
    .then(newMatch => res.json(newMatch))
    .catch(err => res.status(422).json(err));
};

const updateMatch = (req, res) => {
  Match.findOneAndUpdate(req.body)
    .then(newMatch => res.json(newMatch))
    .catch(err => res.status(422).json(err));
};

const deleteMatch = (req, res) => {
  Match.findOneAndDelete({ _id: req.params.id })
    .then(deleteMatch => res.json(deleteMatch))
    .catch(err => res.status(422).json(err));
};

module.exports = {
  findAllMatches,
  findMatchById,
  createMatch,
  updateMatch,
  deleteMatch,
};
