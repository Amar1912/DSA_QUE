//Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element.
//The returned array should be created such that returnedArray[i] = fn(arr[i], i).
//Please solve it without the built-in Array.map method.

/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    const result = [];  // new array to store transformed elements

    for (let i = 0; i < arr.length; i++) {
        result.push(fn(arr[i], i));  // apply fn to each element and index
    }

    return result;
};

/**
 * Example Usage:
 */
const arr = [1, 2, 3];
const plusIndex = function(n, i) { return n + i; };
console.log(map(arr, plusIndex)); // [1, 3, 5]
