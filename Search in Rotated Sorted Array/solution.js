/*  ......... Brute force Solution .......
This solution has a time complexity of O(n) i.e linear; meaning the execution time 
and number of operations grows proportionally to the size of inputted data. It's a one to one situation.*/

const rotatedSortedBrute = (arr, target) => {
  for (const [index, num] of arr.entries()) {
    if (num === target) {
      return index;
    }
  }
  return -1;
};

/* Binary search solution 
 This one has a time complexity of O(log n), meaning that as the input size grows, the number of operations grows very slowly.
 O(log N) basically means time goes up linearly while the n goes up exponentially. 
 So if it takes 1 second to compute 10 elements, it will take 2 seconds to compute 100 elements,
3 seconds to compute 1000 elements, and so on.*/

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

console.log(
  rotatedSortedBrute([4, 5, 6, 7, 0, 1, 2, 3, 5, 7, 8, 9, 9, 9, 9, 90, 99, 99], 0)
);

console.log(rotatedSorted([4, 5, 6, 7, 0, 1, 2], 0));
console.log(rotatedSorted([5, 1, 3], 3));
