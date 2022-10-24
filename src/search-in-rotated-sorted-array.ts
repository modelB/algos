// https://leetcode.com/problems/search-in-rotated-sorted-array/

function search(nums: number[], target: number): number {
  let start = 0;
  let end = nums.length - 1;
  let mid: number;
  if (nums[start] === target) return start;
  let orderedSide: "left" | "right";
  while (start < end) {
    if (end - start === 1) {
      if (nums[end] === target) return end;
      else if (nums[start] === target) return start;
      return -1;
    }
    mid = Math.floor((start + end) / 2);
    if (nums[mid] === target) return mid;
    orderedSide = nums[start] < nums[mid] ? "left" : "right";
    if (orderedSide === "left") {
      if (target > nums[mid] || target < nums[start]) start = mid;
      else end = mid;
    } else {
      if (target < nums[mid] || target > nums[end]) end = mid;
      else start = mid;
    }
  }
  return -1;
}

console.log(search([3, 1], 1));
