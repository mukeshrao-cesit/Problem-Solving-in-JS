function detectCapital(word) {
  const temp = word;
  if (word === temp.toUpperCase()) {
    return true;
  } else if (word === temp.toLowerCase()) {
    return true;
  } else if (word === temp[0].toUpperCase() + temp.slice(1).toLowerCase()) {
    return true;
  } else {
    return false;
  }
}

console.log(detectCapital("LeetCode"));
