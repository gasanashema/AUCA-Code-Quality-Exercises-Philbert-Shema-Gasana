function romanDecoder(roman) {
  const symbols = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  };

  let total = 0;

  for (let i = 0; i < roman.length; i++) {
    let current = symbols[roman[i]];
    let next = symbols[roman[i + 1]];

    if (next && current < next) {
      total -= current;
    } else {
      total += current;
    }
  }

  return total;
}

console.log(romanDecoder("MM"));
console.log(romanDecoder("MDCLXVI"));
console.log(romanDecoder("M"));
console.log(romanDecoder("CD"));
console.log(romanDecoder("XC"));
console.log(romanDecoder("XL"));
console.log(romanDecoder("I"));
