const Score = function () {
  this.score = 0;
};

Score.prototype.getScore = function () {
  return this.score;
};

Score.prototype.updateScore = function () {
  return this.score += 10;
};
