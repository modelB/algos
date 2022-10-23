// https://leetcode.com/problems/maximum-subarray/

function maxSubArray(nums: number[]): number {
  let max = nums[0];
  let curr = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > curr && curr < 0) {
      curr = nums[i];
    } else curr += nums[i];
    max = Math.max(max, curr);
  }
  return max;
}
console.log(maxSubArray([5, 4, -1, 7, 8]));
