function broker(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length - 1; i += 1) {
    if (arr[i] < arr[i + 1]) sum += arr[i + 1] - arr[i];
  }
  return sum;
}
console.log(broker([7, 1, 5, 3, 6, 4])); // 7
console.log(broker([7, 2, 1, 5, 3, 8])); // 9
console.log(broker([1, 2, 1, 5, 3, 8])); // 10
console.log(broker([1, 2, 3, 4, 5])); // 4
console.log(broker([7, 6, 4, 3, 1])); // 0
