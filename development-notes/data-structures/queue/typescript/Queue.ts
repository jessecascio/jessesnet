
export default class Queue<T> 
{
  private data: Array<T> = [];
  private q_size: number = 0;
  private index: number = 0;
  
  // O(1)
  public enqueue(item: T) {
    this.data.push(item);
    this.q_size++;
  }

  // O(1)
  dequeue(): T {
    if (this.isEmpty()) {
      return undefined;
    }

    // re-indexes after data.shift(), dont use
    const item = this.data[this.index];
    delete this.data[this.index]; // free memory

    this.index++;
    this.q_size--;

    return item;
  }

  // O(1)
  isEmpty(): boolean {
    return this.q_size === 0;
  }

  // O(1)
  size(): number {
    return this.q_size;
  }

  // O(1)
  peek(): any {
    return !this.isEmpty() ? this.data[this.index] : undefined;
  }

  // O(1)
  reset(): void {
    this.data = [];
    this.q_size = this.index = 0;
  }
}




