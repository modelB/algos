// https://www.algoexpert.io/questions/Smallest%20Difference

function smallestDifference(arrayOne: number[], arrayTwo: number[]) {
  let indexOne = 0;
  let indexTwo = 0;
  let winnerOne = 0;
  let winnerTwo = 0;
  const diff = (ind1: number, ind2: number) => {
    if (
      typeof arrayOne[ind1] !== "number" ||
      typeof arrayTwo[ind2] !== "number"
    )
      return Infinity;
    return arrayOne[ind1] >= arrayTwo[ind2]
      ? arrayOne[ind1] - arrayTwo[ind2]
      : arrayTwo[ind2] - arrayOne[ind1];
  };
  let minDiff = diff(winnerOne, winnerTwo);
  while (indexOne < arrayOne.length && indexTwo < arrayTwo.length) {
    const currentDiff = diff(indexOne, indexTwo);
	
	const inc1Diff = diff(indexOne+1, indexTwo);
	const inc2Diff = diff(indexOne, indexTwo+1);
	if (inc1Diff < currentDiff && in)
	if (minDiff === 0) return [arrayOne[winnerOne], arrayTwo[winnerTwo]];
  }
}

const arrayOne = [-1, 5, 10, 20, 28, 3];
const arrayTwo = [26, 134, 135, 15, 17];
console.log(smallestDifference(arrayOne, arrayTwo));
