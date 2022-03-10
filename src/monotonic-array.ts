//https://www.algoexpert.io/questions/Monotonic%20Array

function isMonotonic(array: number[]) {
  if (array.length < 2) return true;
  let isAscending: boolean | null = null;
  let i = 1;
  while (i < array.length) {
    if (array[i] < array[i - 1]) {
      if (isAscending === null) isAscending = true;
      else if (isAscending === false) {
        console.log({ i });
        return false;
      }
    } else if (array[i] > array[i-1]) {
      if (isAscending === null) isAscending = false;
      else if (isAscending) {
        console.log({ i });
        return false;
      }
    }
    i++;
  }
  return true;
}

console.log(
  isMonotonic([-1, -5, -10, -1100, -1100, -1101, -1102, -9001]),
  "should be",
  true
);
console.log(
  isMonotonic([-1, 5, -10, -1100, -1102, -1102, -9001]),
  "should be",
  false
);
console.log(isMonotonic([-1]), "should be", true);
console.log(isMonotonic([]), "should be", true);
console.log(isMonotonic([1, 2, 3, 4, 5, 6, 7]), "should be", true);
console.log(isMonotonic([1, 1, 3, 4, 5, 6, 7]), "should be", true);
console.log(isMonotonic([1, 1, 3, 2, 5, 6, 7]), "should be", false);
