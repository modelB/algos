// https://leetcode.com/problems/permutations/

function permute(nums: number[]): number[][] {
  const length = nums.length;
  const res = [];
  const stack = [{ arr: [], numsLeft: [...nums] }];
  while (stack.length) {
    const { arr, numsLeft } = stack.pop();
    if (arr.length === length) res.push(arr);
    else {
      for (let i = 0; i < numsLeft.length; i++) {
        stack.push({
          arr: [...arr, numsLeft[i]],
          numsLeft: [...numsLeft.slice(0, i), ...numsLeft.slice(i + 1)]
        });
      }
    }
  }
  return res;
}

console.log(permute([1, 2, 3]));
