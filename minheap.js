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



  insert = (val) => {
    this.heap.push(val);
    // 1. given the index
    // 2. and whether its a left or right child by even or odd (not counting root index 0)
    // we can find the index of the parent

    if (this.heap.length > 1) {
      this.swapWithParent(this.heap.length - 1);
    }


  }
  // this.heap => [12, 1]
  swapWithParent = (i) => {


    // find parent index
    const isLeftChild = i % 2 === 1;

    const parentIndex = isLeftChild ? (i - 1) / 2 : (i - 2) / 2;

    const parent = this.heap[parentIndex];
    const child = this.heap[i];

    if (child < parent) {
      const tempStore = parent;
      this.heap[parentIndex] = child;
      this.heap[i] = tempStore;

      if (parentIndex !== 0) {
        this.swapWithParent(parentIndex);
      }
    }


  }
}

export default MinHeap