// 2635. Apply Transform Over Each Element in Array

/**
 * Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element.
 * The returned array should be created such that returnedArray[i] = fn(arr[i], i).
 */

/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
   
    const newArray = []; 
 
    for( i = 0; i < arr.length; i++ ) {
      newArray.push(fn(arr[i], i));
    }
  
  return newArray; 
     
 };

// Usage example:
const arr = [1, 2, 3, 4, 5];
const new_arr = map(arr, (x) => x * 2);
console.log(new_arr); // Output: [2, 4, 6, 8, 10]