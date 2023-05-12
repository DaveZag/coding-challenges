/*
  Binary Search:
  ==============
  In computer science, binary search, also known as half-interval search, logarithmic search, or binary chop, is a search algorithm that finds the position of a target value within a sorted array.

  Problem statement: Given a sorted array of 'n' elements and target 't', find the index of 't' in the array.
  ------------------ Return -1 if not found.

  PSEUDOCODE:
  -----------
  - If array is not sorted, sort it in ascending order.
  - If array is empty return -1, as the element cannot be found.
  - If the array has elements, find the middle element and compare it to the target. If they're equal,
  return the middle element's index.
  - If the target > middle element, binary search right half of the array.
  - If the target < middle element, binary search left half of the array.

 */

const binary = (arr, target) => {
  arr.sort((a, b) => a - b);
  console.log(arr);
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let middle = Math.floor((left + right) / 2);
    if (arr[middle] === target) {
      return middle;
    }
    if (target < arr[middle]) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
  }
  return -1;
};

console.log(binary([1, 3, 2, 4, 3, 5, 1], 5));
console.log(binary([1, 392, 8, 9, 1], 5));
console.log(binary([9, 2, 8, 9, 1, 6], 6));
