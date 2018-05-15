import binarySearch from '../../binarySearch/binarySearch';

describe('binarySearch', () => {
  test('should return -1 if target not found', () => {
    const actual = binarySearch([1, 2, 3, 4, 5], 10);
    expect(actual).toBe(-1);
  });
  test('should find the target index', () => {
    const actual = binarySearch([1, 2, 3, 4, 5], 4);
    expect(actual).toBe(3);
  });
});