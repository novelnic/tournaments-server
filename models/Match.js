const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const matchSchema = new Schema({
  teamId: {
    type: Schema.Types.ObjectId,
    ref: 'Team',
    required: true,
  },
  placement: Number,
  matchId: {
    type: String,
    validate: {
      validator: async v => {
        let match = await Match.findOne({ matchId: v });
        return match === null;
      },
      message: 'Match already exists',
    },
  },
  startTime: Number,
  players: [
    {
      username: { type: String, required: true },
      kills: { type: Number, required: true },
    },
  ],
});

matchSchema.post('save', match => {
  const Team = require('./Team');
  return Team.findByIdAndUpdate(
    match.teamId,
    {
      $push: { matches: match._id },
    },
    { new: true }
  );
});

matchSchema.post('findOneAndDelete', match => {
  const Team = require('./Team');
  return Team.findByIdAndUpdate(
    match.teamId,
    {
      $pull: { matches: match._id },
    },
    { new: true }
  );
});

const Match = mongoose.model('Match', matchSchema);

module.exports = Match;
