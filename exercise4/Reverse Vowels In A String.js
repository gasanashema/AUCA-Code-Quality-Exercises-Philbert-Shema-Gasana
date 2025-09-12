function reverseVowels(str) {
  const vowels = "aeiouAEIOU";
  const arr = str.split("");
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    if (!vowels.includes(arr[left])) {
      left++;
      continue;
    }
    if (!vowels.includes(arr[right])) {
      right--;
      continue;
    }
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }

  return arr.join("");
}

console.log(reverseVowels("Hello!"));
console.log(reverseVowels("Tomatoes"));
console.log(reverseVowels("Reverse Vowels In A String"));
