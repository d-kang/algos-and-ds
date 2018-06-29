const findPivot = arr => {
  let high = arr.length - 1;
  let low = 0;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    const prev = arr[mid - 1];
    const next = arr[mid + 1];
    const curr = arr[mid];

    if (curr < prev) return mid;

    if (next < curr) return mid + 1;

    if (curr < arr[low]) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }

  }
  return -1;
}

export default findPivot;