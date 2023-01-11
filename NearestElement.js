function nearestElem(arr, x) {
  let temp = arr.sort(function (a, b) {
    return a - b;
  });
  for (let i = 0; i < temp[temp.length - 1]; i++) {
    let count = 0;
    if (x === arr[i]) {
      console.log(arr[i]);
      return arr[i];
    } else if (x === arr[i] - count) {
      console.log(arr[i]);
      return arr[i];
    } else if (x === arr[i] + count) {
      console.log(arr[i]);
      return arr[i];
    }
    count++;
  }
}

console.log(nearestElem([1, 10, 7, 2, 4, 9], 5));
