// const dolphinsScore = 96 + 108 + 89;
// const avgDolphin = dolphinsScore / 3;
// console.log(avgDolphin);

// const koalasScore = 88 + 91 + 110;
// const avgKoala = koalasScore / 3;
// console.log(avgKoala);

// if (avgDolphin > avgKoala) {
//   console.log(`dolphins team got ${avgDolphin} so they won`);
// } else if (avgDolphin === avgKoala) {
//   console.log("it's a tie");
// } else {
//   console.log(`Koala's team got ${avgKoala} so they won `);
// }


// if (avgDolphin > avgKoala && avgDolphin >= 100) {
//   console.log("Dolphin team wins");
// } else if (avgDolphin === avgKoala) {
//   console.log("it's a tie");
// } else {
//   console.log("No body wins");
// }


const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;


const scoreDolphin = calcAverage(44, 23, 71);
const scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphin, scoreKoalas);

function checkWinner(avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins team wins ${avgDolphins} vs ${avgKoalas}`)
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`${avgKoalas} Koalas team wins `)
  } else {
    console.log("No team wins")
  }
}
checkWinner(scoreDolphin, scoreKoalas);
checkWinner(423423, 45543);