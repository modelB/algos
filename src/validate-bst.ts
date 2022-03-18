// This is an input class. Do not edit.
class BST {
  value: number;
  left: BST | null;
  right: BST | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

export function validateBst(tree: BST) {
  const stack: BST[] = [tree];
  while (stack.length) {
    let currBST = stack.pop();
    if (currBST) {
      if (currBST.left) {
        let max = currBST.left;
        while (max.right) max = max.right;
        if (max.value >= currBST.value) return false;
        stack.push(currBST.left);
      }
      if (currBST.right) {
        let min = currBST.right;
        while (min.left) min = min.left;
        if (min.value < currBST.value) return false;
        stack.push(currBST.right);
      }
    }
  }
  return true;
}
