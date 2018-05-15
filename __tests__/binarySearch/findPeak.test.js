import findPeak from '../../binarySearch/findPeak'

describe('peak finding', () => {
  test('should find peak value', () => {
    const arr = [1, 2, 1];
    const result = findPeak(arr);
    const expected = 1;

    expect(result).toBe(expected);
  });
  test('should return -1 if no peak', () => {
    const arr = [1, 2, 3];
    const result = findPeak(arr);
    const expected = -1;

    expect(result).toBe(expected);
  });

  test('should find plateau', () => {
    const arr = [1, 2, 3, 3, 2];
    const result = findPeak(arr);
    const expected = 3;

    expect(result).toBe(expected);
  });

});