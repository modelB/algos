// https://leetcode.com/problems/search-a-2d-matrix/

function searchMatrix(matrix: number[][], target: number): boolean {
  const width = matrix[0].length;
  if (
    matrix[matrix.length - 1][width - 1] === target ||
    matrix[0][0] === target
  )
    return true;
  let start = 0;
  let end = matrix.length * matrix[0].length - 1;
  let mid: number;
  let midValue: number;

  // helper to convert an index of list to index of 2d matrix
  const getMid = () => {
    const y = Math.floor(mid / width);
    const x = mid % width;
    return matrix[y][x];
  };
  while (start + 1 < end) {
    mid = Math.floor((start + end) / 2);
    midValue = getMid();
    if (midValue === target) return true;
    else if (midValue < target) start = mid;
    else end = mid;
  }
  return false;
}

console.log(
  searchMatrix(
    [
      [0, 1, 2, 3],
      [5, 6, 9, 13],
    ],
    13
  )
);
