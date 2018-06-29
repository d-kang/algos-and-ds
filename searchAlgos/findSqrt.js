var mySqrt = function (x) {
  if (x === 0 || x === 1) return x;

  let high = x / 2;
  let low = 1;
  let res;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    const sq = mid * mid;
    if (sq === x) {
      return mid;
    } else if (x < sq) {
      high = mid - 1;
    } else {
      low = mid + 1;
      res = mid;
    }

  }
  return res;
};