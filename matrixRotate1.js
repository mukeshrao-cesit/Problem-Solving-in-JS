const input = [
  [5, 1, 9, 11],
  [2, 4, 8, 10],
  [13, 3, 6, 7],
  [15, 14, 12, 16],
];

function solve() {
  let temp = [];
  for (let i = 0; i < input.length; i++) {
    let temp2 = [];
    for (let j = input.length - 1; j >= 0; j--) {
      temp2.push(input[j][i]);
    }
    temp.push(temp2);
  }
  console.log(temp);
}

solve();

//00 01 02
//10 11 12
//20 21 22

//20 10 00
//21 11 01
//22 12 02
