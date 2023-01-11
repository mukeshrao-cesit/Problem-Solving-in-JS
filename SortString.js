// Algorithm
// create an function
// split the string to character using split
// run two for loops for comparing the ascii value
// whether the first char is smaller than second char swap their position
// after loop iteration join the char in the array into string
// return the string

function sortString(value) {
  let charArray = value.split("");
  for (let i = 0; i < charArray.length; i++) {
    for (let j = 0; j < charArray.length; j++) {
      if (charArray[i].charCodeAt() < charArray[j].charCodeAt()) {
        let temp = charArray[i];
        charArray[i] = charArray[j];
        charArray[j] = temp;
      }
    }
  }
  return charArray.join("");
}

console.log(sortString("ankit"));
