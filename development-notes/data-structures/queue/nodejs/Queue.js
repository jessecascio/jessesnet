
/**
 * simple FIFO queue
 */
export default class Queue
{
  constructor() {
    this.data = [];
    this.q_size = this.i = 0;
  }

  // O(1)
  enqueue(item) {
    this.data.push(item);
    this.q_size++;
  }

  // O(1)
  dequeue() {
    if (this.isEmpty()) {
      return undefined;
    }

    // re-indexes after data.shift(), dont use
    const item = this.data[this.i];
    delete this.data[this.i]; // free memory

    this.i++;
    this.q_size--;

    return item;
  }

  // O(1)
  isEmpty() {
    return this.q_size === 0;
  }

  // O(1)
  size() {
    return this.q_size;
  }

  // O(1)
  peek() {
    return !this.isEmpty() ? this.data[this.i] : undefined;
  }

  // O(1)
  reset() {
    this.data = [];
    this.q_size = this.i = 0;
  }
}
