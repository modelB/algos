// https://leetcode.com/problems/count-primes

function countPrimes(n: number): number {
    const trackingPrimesArr: boolean[]= [];
    for (let i = 0; i<n; i++) {
        i < 2
            ? trackingPrimesArr.push(false)
            : trackingPrimesArr.push(true);     
    }
    let j = 2;
    while (j<n) {
        if (trackingPrimesArr[j]) {
            for (let k = j*2; k<n; k+=j) {
                trackingPrimesArr[k] = false;
            }
        }
        j++;
    }
    return trackingPrimesArr.reduce((a,c) => c ? a + 1: a,0);
};