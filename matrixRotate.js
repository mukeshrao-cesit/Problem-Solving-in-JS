const input = [
  [5, 1, 9, 11],
  [2, 4, 8, 10],
  [13, 3, 6, 7],
  [15, 14, 12, 16],
];

function solve(input) {
  let mainArray = [];
  for (let i = 0; i < input.length; i++) {
    let innerArray = [];
    for (let j = input.length - 1; j >= 0; j--) {
      innerArray.push(input[j][i]);
    }
    mainArray.push(innerArray);
  }
  return mainArray;
}

console.log(solve(input));

//00 01 02
//10 11 12
//20 21 22

//20 10 00
//21 11 01
//22 12 02

//1 2 3
//4 5 6
//7 8 9

//7 4 1
//8 5 2
//9 6 3
