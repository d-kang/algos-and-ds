import shiftedArray from '../../binarySearch/shiftedArray';
describe('shiftedArray', () => {
  test('should return -1 if target not found: A', () => {
    const arr = [4, 5, 6, 7, 0, 1, 2];
    const actual = shiftedArray(arr, 10);
    expect(actual).toBe(-1);
  });

  test('should find target index of shifted array: B', () => {
    const arr = [4, 5, 6, 7, 0, 1, 2];
    const actual = shiftedArray(arr, 4);
    expect(actual).toBe(0);
  });
  test('should find target index of shifted array: C', () => {
    const arr = [4, 5, 6, 7, 0, 1, 2];
    const actual = shiftedArray(arr, 2);
    expect(actual).toBe(6);
  });
  test('should find target index of shifted array: D', () => {
    const arr = [4, 5, 6, 7, 8, 9, 10, 0, 1, 2];
    const actual = shiftedArray(arr, 10);
    expect(actual).toBe(6);
  });
  test('should find target index of shifted array: E', () => {
    const arr = [4, 5, 6, 7, 8, 9, 10, 0, 1, 2];
    const actual = shiftedArray(arr, 0);
    expect(actual).toBe(7);
  });

  test('should find target index of shifted array: F', () => {
    const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const actual = shiftedArray(arr, 3);
    expect(actual).toBe(3);
  });

});