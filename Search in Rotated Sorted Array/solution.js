const rotatedSorted = (arr, target) => {
  console.log(arr);
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let middle = Math.floor((left + right) / 2);
    if (arr[middle] === target) {
      return middle;
    }
    if (arr[left] <= arr[middle]) {
      if (target >= arr[left] && target < arr[middle]) {
        right = middle - 1;
      } else {
        left = middle + 1;
      }
    } else {
      if (target > arr[middle] && target <= arr[right]) {
        left = middle + 1;
      } else {
        right = middle - 1;
      }
    }
  }
  return -1;
};

console.log(rotatedSorted([4, 5, 6, 7, 0, 1, 2], 0));
console.log(rotatedSorted([5, 1, 3], 3));
