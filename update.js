const Tournament = require('./models/Tournaments');
const Team = require('./models/Team');
const Match = require('./models/Match');
const COD = require('call-of-duty-api')();

const update = async () => {
  console.log('updating...');
  let tournaments = await Tournament.find();
  let activeTournaments = tournaments.filter(tourn => {
    let start = new Date(0);
    start.setUTCSeconds(tourn.startTime);
    let end = new Date(0);
    end.setUTCSeconds(tourn.endTime + 36000 * 2.5);
    return Date.now() > start && Date.now() < end;
  });
  await COD.login(process.env.ACTIVISION_USER, process.env.ACTIVISION_PASSWORD);
  activeTournaments.forEach(async tournament => {
    let teams = await Team.find({ tournamentId: tournament._id });
    teams.forEach(async team => {
      console.log('recording team', team.name);
      let matchesMap = new Map();
      let teamMatches = await Promise.all(
        team.playerIds.map(async player => {
          let data = await COD.MWcombatwz(player, 'uno');
          return data.matches === null ? [] : data.matches;
        })
      );
      teamMatches.forEach(playerMatches => {
        console.log('# of matches: ', playerMatches.length);
        playerMatches.forEach(match => {
          if (matchesMap.has(match.matchID)) {
            console.log('match alread exists');
            let savedMatch = matchesMap.get(match.matchID);
            if (savedMatch.team === match.player.team) {
              savedMatch.players.push({
                name: match.player.username,
                kills: match.playerStats.kills,
              });
            } else {
              console.log('Possible cheater', team, player, match);
            }
          } else if (
            match.utcStartSeconds >= tournament.startTime - 60 &&
            match.utcStartSeconds <= tournament.endTime + 60 &&
            tournament.type === match.mode
          ) {
            console.log('new valid match');
            let currPlayer = {
              username: match.player.username,
              kills: match.playerStats.kills,
            };

            matchesMap.set(match.matchID, {
              team: match.player.team,
              startTime: match.utcStartSeconds,
              players: [currPlayer],
              placement: match.playerStats.teamPlacement,
            });
          }
        });
      });
      console.log('Map completed', matchesMap);
      // after matchesMap is filled out
      matchesMap.forEach((match, id) => {
        console.log('looking at match: ', id);
        // check that all team members played in the match
        if (match.players.length === team.playerIds.length) {
          let matchData = {
            teamId: team._id,
            matchId: id,
            placement: match.placement,
            startTime: match.startTime,
            players: match.players,
          };
          Match.create(matchData).catch(err => console.log(err.message));
          console.log(matchData);
        }
      });
    });
  });
};

module.exports = { update };
