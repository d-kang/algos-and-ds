import findPivot from './findPivot';
import binarySearch from './binarySearch';

const shiftedArray = (arr, target) => {
  const pivot = findPivot(arr);

  if (pivot === -1) {
    return binarySearch(arr, target);
  }

  if (arr[0] <= target && target <= arr[pivot - 1]) {
    return binarySearch(arr.slice(0, pivot), target);
  } else if (arr[pivot] <= target && target <= arr[arr.length - 1]) {
    return binarySearch(arr.slice(pivot), target) + pivot;
  }


  return -1;
}

export default shiftedArray;