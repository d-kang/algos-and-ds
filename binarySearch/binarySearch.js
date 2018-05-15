const binarySearch = (arr, target) => {
  let high = arr.length - 1;
  let low = 0;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    if (target === arr[mid]) {
      return mid;
    }
    if (target < arr[mid]) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return -1;
}

export default binarySearch;