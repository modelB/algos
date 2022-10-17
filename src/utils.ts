export class Queue {
  start = 0;
  end = 0;
  length = 0;
  vals: Record<string, number> = {};
  push(val: number) {
    this.vals[this.end] = val;
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
