const binarySearch = (arr, x, tally=0) => {
  let end = arr.length;
  let mid = Math.floor((arr.length - 1) / 2);

  // check base case
  if (0 < end) {
    if (arr[mid] === x) {
      return mid + tally;
    } else if (x < arr[mid]) {
      return binarySearch(arr.slice(0, mid), x, tally);
    } else {
      return binarySearch(arr.slice(mid + 1), x, tally + mid + 1);
    }
  } else {
    return -1;
  }
}

const CircularArraySearch = (A, x) => {
  let low = 0;
  let high = A.length - 1;

  while (low <= high) {
    let mid = (low + high) / 2;
    if (x === A[mid]) return mid;
    if (A[mid] <= A[high]) {
      if (x > A[mid] && x <= A[high]) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    } else {
      if (A[low] <= x && x < A[mid]) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    }
  }

  return - 1;
}

export default binarySearch;