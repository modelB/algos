// https://www.algoexpert.io/questions/First%20Duplicate%20Value

export function firstDuplicateValue(array: number[]) {
    // Write your code here.
    const foundNums = new Map();
      for (let i = 0; i<array.length; i++) {
          if (foundNums.get(array[i])) {
              return array[i];
          }
          foundNums.set(array[i], true);
      }
      return -1;
  }
  