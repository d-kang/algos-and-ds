import MinHeap from '../minheap';

// 12, 4, 5, 3, 8, 7
// [3, 4, 5, 12, 8, 7]

describe('MinHeap', () => {
  describe('Insert', () => {
    test('should insert into heap', () => {
      const minHeap = new MinHeap();
      minHeap.insert(12)

      expect(minHeap.heap).toEqual([12]);
    });


    test('should swap left child with parent', () => {
      const minHeap = new MinHeap();
      minHeap.insert(12)
      minHeap.insert(1)
      expect(minHeap.heap[0]).toBe(1);
    });

    test('should not swap left child with parent', () => {
      const minHeap = new MinHeap();
      minHeap.insert(12)
      minHeap.insert(15)
      expect(minHeap.heap[0]).toBe(12);
    });


    test('should swap right child with parent', () => {
      const minHeap = new MinHeap();
      minHeap.insert(12)
      minHeap.insert(14)
      minHeap.insert(2)
      expect(minHeap.heap[0]).toBe(2);
    });

    test('should not swap right child with parent', () => {
      const minHeap = new MinHeap();
      minHeap.insert(12)
      minHeap.insert(14)
      minHeap.insert(18)
      expect(minHeap.heap[0]).toBe(12);
    });

    // should bubble up multilevel
    test('should bubble up left child to root: test root', () => {
      const minHeap = new MinHeap();
      minHeap.insert(12)
      minHeap.insert(14)
      minHeap.insert(15)
      minHeap.insert(1)
      expect(minHeap.heap[0]).toBe(1);
    });

    test('should bubble up left child: test heap', () => {
      const minHeap = new MinHeap();
      minHeap.insert(12)
      minHeap.insert(14)
      minHeap.insert(15)
      minHeap.insert(1)
      expect(minHeap.heap).toEqual([1, 12, 15, 14]);
    });

    test('should bubble up right child to root: test root', () => {
      const minHeap = new MinHeap();
      minHeap.insert(12)
      minHeap.insert(14)
      minHeap.insert(15)
      minHeap.insert(16)
      minHeap.insert(17)
      minHeap.insert(1)
      expect(minHeap.heap[0]).toBe(1);
    });

    test('should bubble up right child: test heap', () => {
      const minHeap = new MinHeap();
      minHeap.insert(12)
      minHeap.insert(14)
      minHeap.insert(15)
      minHeap.insert(16)
      minHeap.insert(17)
      minHeap.insert(1)
      expect(minHeap.heap).toEqual([1, 14, 12, 16, 17, 15]);
    });
  });

  describe('extract min', () => {

  });

});



// test('should insert', () => {
//   const minHeap = new MinHeap();
//   minHeap.insert(12)
//   minHeap.insert(4)
//   minHeap.insert(5)
//   minHeap.insert(3)
//   minHeap.insert(8)
//   minHeap.insert(7)

//   expect(minHeap.heap).toEqual([3, 4, 5, 12, 8, 7]);
// });