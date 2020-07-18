const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const tournamentSchema = new Schema({
  game: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  name: { type: String, required: true },
  teams: [{ type: Schema.Types.ObjectId, ref: 'Team' }],
  startTime: Number,
  endTime: Number,
  scoring: String,
});

tournamentSchema.post('findOneAndDelete', tournament => {
  const Team = require('./Team');
  return Team.deleteMany({ _id: { $in: tournament.teams } });
});

const Tournament = mongoose.model('Tournament', tournamentSchema);

module.exports = Tournament;
