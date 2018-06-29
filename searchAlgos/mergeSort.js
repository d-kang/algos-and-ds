const merge = (arr1, arr2) => {
  let merged = []
  let p1 = 0
  let p2 = 0

  while (p1 < arr1.length && p2 < arr2.length) {
    if (arr1[p1] <= arr2[p2]) {
      merged.push(arr1[p1])
      p1++
    } else if (arr1[p1] > arr2[p2]) {
      merged.push(arr2[p2])
      p2++
    }

    if (p1 === arr1.length) {
      merged = merged.concat(arr2.slice(p2))
    } else if (p2 === arr2.length) {
      merged = merged.concat(arr1.slice(p1))
    }

  }

  return merged
}

const mergeSort = (arr, low=0, high) => {
  if (!high) high = arr.length - 1

  const mid = parseInt(high + low / 2)

  if (high === 0 || high === 1) return arr

  return merge(mergeSort(arr, low, mid + 1), mergeSort(arr, mid, high));
}


const arr = [1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]
console.log('result:::', mergeSort(arr))
console.log('mergsort2', mergeSort([1, 10, 1, 5, 19, 20, 0, 9192]))