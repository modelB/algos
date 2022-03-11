// https://www.algoexpert.io/questions/Longest%20Peak

export function longestPeak(array: number[]) {
    let isIncreasing = null;
    let priorEquals = false;
    let peakPassed = false;
    let currPeak = 0;
    let maxPeak = 0;
    for (let i = 0; i<array.length-1; i++) {
        if (array[i+1]>array[i]) {
            if (currPeak === 0) ++currPeak;
            if (isIncreasing) {
                ++currPeak;
            } else {
                currPeak = 2;
            }
            priorEquals = false;
            isIncreasing = true;
        } else if (array[i+1] === array[i]) {
            currPeak = 0;
            peakPassed = false;
            isIncreasing = false;
        } else {
            if (isIncreasing && priorEquals) {
                currPeak = 0;
                priorEquals = false;
                peakPassed = false;
            } else if (isIncreasing) {
                peakPassed = true;
            }
            if (peakPassed) {
                currPeak++;
            }
            isIncreasing = false;
        }
        if (peakPassed && currPeak > maxPeak) maxPeak = currPeak;
    }
    return maxPeak;
}

console.log(
  longestPeak([1, 2, 3, 3, 2, 1])
);
