const findPeak = arr => {
  let leftPeak = null;
  let hasLeft = false;

  for (let i = 0; i < arr.length; i++) {
    const curr = arr[i];
    const next = arr[i + 1];

    if (curr < next) {
      hasLeft = true;
    } else if (next < curr) {
      if (hasLeft) {
        return i;
      }
    }

  }
  return -1;
}


export default findPeak;