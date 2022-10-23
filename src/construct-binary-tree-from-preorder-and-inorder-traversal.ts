// https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/

class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
  const recurse = (
    preIndex: number,
    inStart: number,
    inEnd: number
  ): TreeNode => {
    const val = preorder[preIndex];
    let indexInInOrder: number | null = null;
    for (let i = inStart; i <= inEnd; i++) {
      if (inorder[i] === val) {
        indexInInOrder = i;
        break;
      }
    }
    const node = new TreeNode(val);
    if (indexInInOrder > inStart) {
      node.left = recurse(preIndex + 1, inStart, indexInInOrder - 1);
    }
    if (indexInInOrder < inEnd) {
      node.right = recurse(
        preIndex + 1 + (indexInInOrder - inStart),
        indexInInOrder + 1,
        inEnd
      );
    }

    return node;
  };
  return recurse(0, 0, inorder.length - 1);
}

console.log(buildTree([3, 1, 2, 4], [1, 2, 3, 4]));
