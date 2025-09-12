/**
 * 
 function calculateAverage(numbers) {
  var sum = 0;
  var count = 0;
  for (var i = 0; i < numbers.length; i++) {
    sum += numbers[i];
    count++;
  }
  var average = sum / count;
  return average;
}
 */

function calculateAverage(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum / numbers.length;
}