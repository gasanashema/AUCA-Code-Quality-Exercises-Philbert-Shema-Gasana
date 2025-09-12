function romanEncoder(num) {
  const values = [
    1000, 900, 500, 400,
    100, 90, 50, 40,
    10, 9, 5, 4,
    1
  ];

  const symbols = [
    "M", "CM", "D", "CD",
    "C", "XC", "L", "XL",
    "X", "IX", "V", "IV",
    "I"
  ];

  let result = "";

  for (let i = 0; i < values.length; i++) {
    while (num >= values[i]) {
      num -= values[i];
      result += symbols[i];
    }
  }

  return result;
}

// Examples
console.log(intToRoman(1));     // "I"
console.log(intToRoman(1000));  // "M"
console.log(intToRoman(1666));  // "MDCLXVI"
console.log(intToRoman(1990));  // "MCMXC"
console.log(intToRoman(2008));  // "MMVIII"
