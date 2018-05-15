import binarySearch from '../../ctci/shifted-array-search';

describe('shifted array search', () => {
  // test('should return middle index', () => {
  //   expect(binarySearch([1, 2, 3], 2)).toBe(1);
  // });

  // test('', () => {
  //   expect(binarySearch([1, 2, 3], 1)).toBe(0);
  // });
  test('', () => {
    expect(binarySearch([1, 2, 3], 3)).toBe(2);
  });
  test('', () => {
    expect(binarySearch([2, 3, 4, 10, 40], 10)).toBe(3);
  });
  test('', () => {
    expect(binarySearch([2, 3, 4, 10, 40, 50, 80, 90, 100, 110, 111, 1123,], 110)).toBe(9);
  });




  // test('should return -1', () => {
  //   expect(binarySearch([1, 2, 3, 4, 5], 0)).toBe(-1);
  // });



  // test('should return middle index', () => {
  //   expect(binarySearch([1, 2, 3, 4, 5], 2)).toBe(1);
  // });
});