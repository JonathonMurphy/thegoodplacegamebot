const fs = require("fs");
const leaderboardScores = require("./json/leaderboardScores.json");
const commentIntro = "The current leaderboard rankings are as follows: \n\n";

let k = 1;
let placeAbbr;

let comment = commentIntro;

for (i = 0; i < leaderboardScores.length; i++) {
  switch(k){
    case 1:
      placeAbbr = "st";
    break;
    case 2:
      placeAbbr = "nd";
    break;
    case 3:
      placeAbbr = "rd";
    break;
    default:
      placeAbbr = "th";
  }
  let line = "In " + k + placeAbbr + " place is u/" + leaderboardScores[i].username + " with a score of " + leaderboardScores[i].score + "\n\n";
  k++;
  comment += line;
}

comment += "\n\n If you would like your score on this leaderboard, post your high score in the comment section of: https://www.reddit.com/r/thegoodplacegame/comments/anrpak/leaderboard/"

fs.writeFile("./comment.txt", comment);
console.log(comment);
