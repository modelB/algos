// https://leetcode.com/problems/valid-parentheses/submissions/
function isValid(s: string): boolean {   
    const stack = [];
    for (let i = 0; i< s.length; i++) {
        if ({'{':true,'[':true,'(':true}[s[i]]) {
            stack.push(s[i]);
        } else if (!stack.length) return false;
        else {
            const match = stack.pop();
            if ({')':'(', '}':'{', ']':'['}[s[i]] !== match) return false;
        }
    }
    return !stack.length;
};