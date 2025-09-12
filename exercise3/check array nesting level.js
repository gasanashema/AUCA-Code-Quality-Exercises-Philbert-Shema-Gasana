function getNestingLevel(arr) {
  let level = 0;

  const checkDepth = (a, depth)=> {
    if (Array.isArray(a)) {
      level = Math.max(level, depth);
      for (let item of a) {
        checkDepth(item, depth + 1);
      }
    }
  }

  checkDepth(arr, 1);
  return level;
}

function flattenArray(arr) {
  let flat = [];

  const flatten = a =>{
    for (let item of a) {
      if (Array.isArray(item)) {
        flatten(item);
      } else {
        flat.push(item);
      }
    }
  }

  flatten(arr);
  return flat;
}


let myArray = [1, [2, [3, [4]], 5], 6];

console.log("Nesting Level:", getNestingLevel(myArray)); 
console.log("Flattened Array:", flattenArray(myArray));
