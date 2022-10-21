// https://leetcode.com/problems/combinations/

function combine(n: number, k: number): number[][] {
  const stack = [[]];
  const output = [];
  while (stack.length) {
    const candidate = stack.pop();
    if (candidate.length === k) output.push(candidate);
    else {
    const start = candidate.length ? candidate[candidate.length - 1] : 0
      for (let i = start + 1; i <= n; i++) {
        stack.push(candidate.concat(i));
      }
    }
  }
  return output;
}

console.log(combine(4, 2));
