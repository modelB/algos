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

export function validateBst(
  tree: BST,
  max = Infinity,
  min = -Infinity
): boolean {
  if (tree.value >= max || tree.value < min) return false;
  if (!tree.left && !tree.right) return true;
  return (
    (tree.left ? validateBst(tree.left, tree.value, min) : true) &&
    (tree.right ? validateBst(tree.right, max, tree.value) : true)
  );
}
