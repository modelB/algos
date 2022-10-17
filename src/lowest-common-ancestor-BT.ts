// TODO: refactor to O(n) time, O(n) space
// https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/submissions/

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

function lowestCommonAncestor(
  root: TreeNode | null,
  p: TreeNode | null,
  q: TreeNode | null
): TreeNode | null {
  type Dir = "l" | "r";
  class Queue {
    start = 0;
    end = 0;
    length = 0;
    vals: Record<string, { path: Dir[]; node: TreeNode }> = {};
    push(path: Dir[], node: TreeNode) {
      this.vals[this.end] = { path, node };
      this.end += 1;
      this.length += 1;
    }
    pop() {
      this.length -= 1;
      const temp = this.vals[this.start];
      delete this.vals[this.start];
      this.start += 1;
      return temp;
    }
  }
  let pathToP: Dir[];
  let pathToQ: Dir[];

  const queue = new Queue();
  queue.push([], root);
  while (queue.length && (!pathToP || !pathToQ)) {
    const popped = queue.pop();
    if (popped.node.val === p.val) {
      pathToP = popped.path;
    }
    if (popped.node.val === q.val) {
      pathToQ = popped.path;
    }
    if (popped.node.left) queue.push(popped.path.concat("l"), popped.node.left);
    if (popped.node.right)
      queue.push(popped.path.concat("r"), popped.node.right);
  }

  let currNode = root;
  let i = 0;
  while (pathToP[i] === pathToQ[i] && pathToP[i]) {
    currNode = pathToP[i] === "l" ? currNode.left : currNode.right;
    i++;
  }
  return currNode;
}
