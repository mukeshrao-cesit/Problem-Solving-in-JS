function solve(num) {
  var star = "";
  for (let i = 0; i < num.length; i++) {
    for (let j = 0; j < num.length; j++) {
      if (i + j <= num - 1) {
        star += "* ";
      } else {
        star += "  ";
      }
    }
    star += "\n";
  }
  return star;
}

console.log(solve(5));

//00 01 02 03
//10 11 12 13
//20 21 22 23
//30 31 32 33
