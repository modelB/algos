// https://www.algoexpert.io/questions/BST%20Traversal

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
  
  export function inOrderTraverse(tree: BST | null, array: number[]) {
    const insert = (currTree: BST) => {
        if (currTree.left) insert(currTree.left);
        array.push(currTree.value);
        if (currTree.right) insert(currTree.right);
    }
    if (tree) insert(tree);
    return array;
  }
  
  export function preOrderTraverse(tree: BST | null, array: number[]) {
    const insert = (currTree: BST) => {
        array.push(currTree.value);
        if (currTree.left) insert(currTree.left);
        if (currTree.right) insert(currTree.right);
    }
    if (tree) insert(tree);
    return array;
  }
  
  export function postOrderTraverse(tree: BST | null, array: number[]) {
    const insert = (currTree: BST) => {
        if (currTree.left) insert(currTree.left);
        if (currTree.right) insert(currTree.right);
        array.push(currTree.value);
    }
    if (tree) insert(tree);
    return array;
  }
  