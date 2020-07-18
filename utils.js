const Match = require('./models/Match');

const computeScore = matches => {
  let score = 0;
  let scores = [];
  matches.forEach(match => {
    let score = 0;
    let kills = match.players.reduce((acc, player) => (acc += player.kills), 0);
    let placementPts = 0;
    let place = match.placement;
    switch (true) {
      case place === 1:
        placementPts = 25;
        break;
      case place === 2:
        placementPts = 20;
        break;
      case place === 3:
        placementPts = 15;
        break;
      case place === 4:
        placementPts = 10;
        break;
      case place <= 7:
        placementPts = 7;
        break;
      case place <= 10:
        placementPts = 4;
        break;
      case place <= 15:
        placementPts = 2;
        break;
      case place <= 20:
        placementPts = 1;
        break;
    }
    score = placementPts + kills;
    scores.push(score);
  });

  score = scores
    .sort((a, b) => b - a)
    .slice(0, 3)
    .reduce((acc, score) => (acc += score), 0);

  return score;
};

module.exports = {
  computeScore,
};
