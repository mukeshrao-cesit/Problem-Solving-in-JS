function findKthSmallestOrLargest(array, value) {
  let sortedArray = array.sort();
  return sortedArray[value - 1] + " " + sortedArray[value.length - 1 - value];
}

function findKthSmallestOrLargestV2(array, value) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[j] > array[i]) {
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
    }
  }
  return array[value - 1] + " " + array[value.length - 1 - value];
}

console.log(findKthSmallestOrLargest([2, 1, 4, 3, 6, 5, 7], 3));
console.log(findKthSmallestOrLargestV2([2, 1, 4, 3, 6, 5, 7], 3));
