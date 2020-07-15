const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let TeamSchema = new Schema({name: String})

const tournamentSchema = new Schema({
    game: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    teams: [TeamSchema],
    startTime: Number,
    endTime: Number,
    scoring: String

});

const Tournament = mongoose.model('Tournament', tournamentSchema);

module.exports = Tournament;