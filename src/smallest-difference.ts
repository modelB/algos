// https://www.algoexpert.io/questions/Smallest%20Difference

function smallestDifference(arrayOne: number[], arrayTwo: number[]) {
  let i1 = 0;
  let i2 = 0;
  let closestPair = [arrayOne[0], arrayTwo[0]];
  const sortedOne = arrayOne.sort((a, b) => a - b);
  const sortedTwo = arrayTwo.sort((a, b) => a - b);
  console.log({ sortedOne, sortedTwo });
  const diff = (ind1: number, ind2: number) => {
    if (
      typeof sortedOne[ind1] !== "number" ||
      typeof sortedTwo[ind2] !== "number"
    )
      return Infinity;
    return sortedOne[ind1] >= sortedTwo[ind2]
      ? sortedOne[ind1] - sortedTwo[ind2]
      : sortedTwo[ind2] - sortedOne[ind1];
  };
  let minDiff = diff(0, 0);
  while (i1 < sortedOne.length || i2 < sortedTwo.length) {
    const currDiff = diff(i1, i2);

    if (currDiff < minDiff) {
      minDiff = currDiff;
      closestPair = [sortedOne[i1], sortedTwo[i2]];
    }
    if (currDiff === 0) return closestPair;
    console.log({ i1, i2, currDiff, closestPair });
    if (sortedOne[i1] > sortedTwo[i2]) {
      if (i2 < sortedTwo.length - 1) i2++;
      else return closestPair;
    } else {
      if (i1 < sortedOne.length - 1) i1++;
      else return closestPair;
    }
  }
  return closestPair;
}

const test = {
  arrayOne: [-1, 5, 10, 20, 3],
  arrayTwo: [26, 134, 135, 15, 17],
};
console.log(smallestDifference(test.arrayOne, test.arrayTwo));
