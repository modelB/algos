// https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/
// TODO: implement

//prog
function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
    const root = new TreeNode(preorder[0]);
    let preIndex = 1;
    let inIndex = 0;
    while (preIndex < preorder.length) {
        while (preorder[preIndex] !== inorder[inIndex]) {
            
        }
    }

    
};
