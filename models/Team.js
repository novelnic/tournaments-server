const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const teamSchema = new Schema({
  tournamentId: {
    type: Schema.Types.ObjectId,
    ref: 'Tournament',
    required: true,
  },
  name: { type: String, required: true },
  playerIds: [{ type: String, required: true }],
  matches: [{ type: Schema.Types.ObjectId, ref: 'Match' }],
});

teamSchema.post('save', team => {
  const Tournament = require('./Tournaments');
  return Tournament.findByIdAndUpdate(
    team.tournamentId,
    {
      $push: { teams: team._id },
    },
    { new: true }
  );
});

teamSchema.post('findOneAndDelete', team => {
  const Tournament = require('./Tournaments');
  const Match = require('./Match');
  return Tournament.findByIdAndUpdate(
    team.tournamentId,
    {
      $pull: { teams: team._id },
    },
    { new: true }
  ).then(tournamnet => Match.deleteMany({ _id: { $in: team.matches } }));
});

const Team = mongoose.model('Team', teamSchema);

module.exports = Team;
