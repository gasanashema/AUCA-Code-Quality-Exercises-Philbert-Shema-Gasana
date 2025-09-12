// function recursiveArraySum(arr) {
function sumArray(arr) {
//   if (arr.length === 0) return ; // what case can we need to return nothing?
  if (arr.length === 0) return 0;
  return arr[0] + sumArray(arr.slice(1));
}

console.log(sumArray([1, 2, 3, 4, 5]));
console.log(sumArray([]));
