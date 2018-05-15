// heap
    // complete binary tree
    // min heap: parent must be less than children
    // max-heap: parent must be greater than children

// min heap insert and extract
// insert
    // insert element at the bottom right most spot
    // fix the tree after by swapping new element with its parent until its placed in correct spot
        // bubble up minimum eleme
// extract
    // extracting the minimum elem is always at the top so swap min with last element in heap
        // then bubble down element until you find the correct spot
            // must swap with smaller child elem if both are smaller

// skip list nlogn
// try implementing with insertion sort n^2

// array based implementation
  // find the left child by (2 * i + 1)
  // find the right child by (2 * i + 2)
// 12, 4, 5, 3, 8, 7
// [3, 4, 5, 12, 8, 7]

class MinHeap {
  constructor() {
    this.heap = [];
  }

  swap = (i, k) => {
    const parent = this.heap[i];
    const child = this.heap[k];
    const tempStore = parent;

    this.heap[i] = child;
    this.heap[k] = tempStore;
  }


  extractMin = () => {
    this.swap(0, this.heap.length - 1)
    const rootVal = this.heap.pop();

    this.bubbleDown(0)

    return rootVal; // add test for minVal
  }

  bubbleDown = (parentIndex) => {
    // this.heap => [1, 2, 3, 4, 5, 6, 7, 8]
    // this.heap => [2, 4, 3, 8, 5, 6, 7]

    const leftChildIndex = (parentIndex * 2) + 1;
    const rightChildIndex = (parentIndex * 2) + 2;

    const leftVal = this.heap[leftChildIndex]
    const rightVal = this.heap[rightChildIndex]

    let childIndex;
    if (rightVal !== undefined) {
      childIndex = leftVal < rightVal ? leftChildIndex : rightChildIndex;
    } else if (leftVal !== undefined) {
      childIndex = leftChildIndex;
    }

    if (this.heap.length > 1) {
      this.swap(0, childIndex);
    }

  }

  insert = (val) => {
    this.heap.push(val);
    // 1. given the index
    // 2. and whether its a left or right child by even or odd (not counting root index 0)
    // we can find the index of the parent

    if (this.heap.length > 1) {
      this.bubbleUp(this.heap.length - 1);
    }
  }


  bubbleUp = (childIndex) => {
    // find parent index
    const isLeftChild = childIndex % 2 === 1;

    const parentIndex = isLeftChild ? (childIndex - 1) / 2 : (childIndex - 2) / 2;

    const parent = this.heap[parentIndex];
    const child = this.heap[childIndex];

    if (child < parent) {
      this.swap(parentIndex, childIndex)

      if (parentIndex !== 0) {
        this.bubbleUp(parentIndex);
      }
    }


  }
}

export default MinHeap