// Solution 1 :
// Code : https://jsfiddle.net/SaketPrag/d1fu9cks/20/

// Solution 2 : Return

const arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, [9, 10, 11], 12],
  [13, 14, 15],
];

function flatten(arr, out = []) {
  arr.reduce((map, item) => {
    if (Array.isArray(item)) {
      let local = flatten(item, out);
      return out.concat(local);
    } else {
      out.push(item);
    }
    return map;
  }, []);
  return out;
}

console.log(flatten(arr));

// Solution 3 :

function flattenArray(arr, depth = 1) {
  if (depth === 0) {
    return arr.slice();
  }

  return arr.reduce((result, item) => {
    if (Array.isArray(item)) {
      result.push(...flattenArray(item, depth - 1));
    } else {
      result.push(item);
    }
    return result;
  }, []);
}

// Example usage:
const nestedArray = [1, [2, [3, [4, 5], 6], 7], 8];
const flattenedArray = flattenArray(nestedArray, 2);
console.log(flattenedArray);
