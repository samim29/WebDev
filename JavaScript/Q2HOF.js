// 2: Implement a customForEach function that iterates over an array and applies a callback to each
// element.

// Implementing customForEach function
function customForEach(arr, callback) {
for (let i = 0; i < arr.length; i++) {
callback(arr[i]);
}
}
// Example usage
const numbers = [1, 2, 3, 4];
customForEach(numbers, (num) => console.log(num));