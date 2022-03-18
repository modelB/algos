// Do not edit the class below except for
// the insert, contains, and remove methods.
// Feel free to add new properties and methods
// to the class.
export class BST {
  value: number;
  left: BST | null;
  right: BST | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value: number, root: BST = this): BST {
    if (value < this.value) {
      if (this.left) {
        return this.left.insert(value, root);
      } else {
        this.left = new BST(value);
        return root;
      }
    } else {
      if (this.right) {
        return this.right.insert(value, root);
      } else {
        this.right = new BST(value);
        return root;
      }
    }
  }

  contains(value: number): boolean {
    if (this.value === value) return true;
    else if (this.value < value) {
      if (this.right) return this.right.contains(value);
      else return false;
    } else {
      if (this.left) return this.left.contains(value);
      else return false;
    }
  }

  height(accumulatedHeight: number = 1): number {
    return Math.max(
      this.left ? this.left.height(accumulatedHeight + 1) : accumulatedHeight,
      this.right ? this.right.height(accumulatedHeight + 1) : accumulatedHeight
    );
  }

  remove(value: number, root: BST = this, parent: BST = this): BST {
    if (this.value < value && this.right)
      return this.right.remove(value, root, this);
    if (this.value > value && this.left)
      return this.left.remove(value, root, this);
    if (this.value === value) {
      if (this.right?.value === value) this.right.remove(value, root, this);
      else if (!this.left && !this.right && parent !== this) {
        if (parent.left === this) parent.left = null;
        else parent.right = null;
      } else {
        const leftHeight = this.left ? this.left.height() : 0;
        const rightHeight = this.right ? this.right.height() : 0;
        if (leftHeight > rightHeight && this.left) {
          let replacement = this.left;
          while (replacement.right) replacement = replacement.right;
          this.value = replacement.value;
          this.left.remove(this.value, root, this);
        } else if (this.right) {
          let replacement = this.right;
          while (replacement.left) replacement = replacement.left;
          this.value = replacement.value;
          this.right.remove(this.value, root, this);
        }
      }
    }
    return root;
  }
}

const bst = new BST(10);
bst.insert(5);
bst.insert(15);
bst.insert(2);
bst.insert(5);
bst.insert(13);
bst.insert(22);
bst.insert(1);
bst.insert(14);
bst.insert(12);
console.log(JSON.stringify(bst.remove(5)));

