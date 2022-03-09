// https://www.algoexpert.io/questions/Smallest%20Difference
function smallestDifference(arrayOne, arrayTwo) {
    var sortedMerged = arrayOne.map(function (el) { return [el, 0]; })
        .concat(arrayTwo.map(function (el) { return [el, 1]; }))
        .sort(function (a, b) { return a[0] - b[0]; });
    console.log({ sortedMerged: sortedMerged });
    var minPair = [];
    var minDiff = Infinity;
    for (var i = 0; i < sortedMerged.length; i++) {
        console.log({ minDiff: minDiff, minPair: minPair });
        if (minPair.length < 2) {
            if ()
        }
        else {
            var nominee = sortedMerged[i];
            if (nominee[1] === 0) {
                var diff = nominee[0] >= minPair[1] ?
                    nominee[0] - minPair[1] :
                    minPair[1] - nominee[0];
                if (diff === 0)
                    return [nominee[0], minPair[1]];
                if (diff < minDiff) {
                    minDiff = diff;
                    minPair[0] = nominee[0];
                }
            }
            else {
                var diff = nominee[0] >= minPair[0] ?
                    nominee[0] - minPair[0] :
                    minPair[0] - nominee[0];
                if (diff === 0)
                    return [minPair[0], nominee[0]];
                if (diff < minDiff) {
                    minDiff = diff;
                    minPair[1] = nominee[0];
                }
            }
        }
    }
    console.log(minPair);
    return minPair;
}
var arrayOne = [-1, 5, 10, 20, 28, 3];
var arrayTwo = [26, 134, 135, 15, 17];
console.log(smallestDifference(arrayOne, arrayTwo));
