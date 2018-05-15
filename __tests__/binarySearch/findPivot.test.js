import findPivot from '../../binarySearch/findPivot';

describe('findPivot', () => {
  test('should return -1 if no pivot', () => {
    const arr = [1, 2, 3, 4, 5, 6]
    const actual = findPivot(arr)

    expect(actual).toBe(-1);
  });

  test('should return pivot index: A', () => {
    const arr = [2, 1]
    const actual = findPivot(arr)

    expect(actual).toBe(1);
  });
  test('should return pivot index: B', () => {
    const arr = [3, 1, 2]
    const actual = findPivot(arr)

    expect(actual).toBe(1);
  });

  test('should return pivot index: C', () => {
    const arr = [4, 5, 6, 7, 8, 9, 10, 1, 2, 3]
    const actual = findPivot(arr)

    expect(actual).toBe(7);
  });

  // test('should return pivot index', () => {
  //   const arr = [3, 4, 5, 6, 1, 2]
  //   const actual = findPivot(arr)

  //   expect(actual).toBe(4);
  // });
});