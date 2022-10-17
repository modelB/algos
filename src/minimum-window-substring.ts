// https://leetcode.com/problems/minimum-window-substring/submissions/

function minWindow(s: string, t: string): string {
    if (t.length > s.length) return '';
    if (t === s) return s;
    class Queue {
      start = 0;
      end = 0;
      length = 0;
      vals: Record<string, number> = {};
      push(val: number) {
        this.vals[this.end] = val;
        this.end += 1;
      }
      pop() {
        const temp = this.vals[this.start];
        delete this.vals[this.start];
        this.start += 1;
        return temp;
      }
    };
    const queue = new Queue();
    const counts: Record<string, number> = {};
    for (let i = 0; i<t.length; i++) {
        if (!(t[i] in counts)) counts[t[i]] = 1;
        else counts[t[i]]++;
    }
    let minStr: string | null = null;
    let charsLeft = Object.keys(counts).length;
    for (let i = 0; i < s.length; i++) {
        const c = s[i];
        if (c in counts) {
            queue.push(i);
            counts[c]--;
            if (counts[c] === 0) charsLeft--;
            while (charsLeft === 0) {
                const start = queue.pop();
                counts[s[start]]++;
                if (counts[s[start]] > 0) charsLeft++;
                const candidateStr = s.slice(start, i+1);
                if (!minStr || candidateStr.length < minStr.length) minStr = candidateStr;
            }
        }
    }
    return minStr ?? ''
};