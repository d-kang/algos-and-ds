/* with promises */
const sleep = (num, arr) => {
  return new Promise(resolve => {
    setTimeout(() => {
      arr.push(num)
      resolve(arr)
    }, num);
  })
}

const sleepSort = numbers => {
  const sorted = []
  for (const num of numbers) {
    sleep(num, sorted)
      .then(res => {
        if (res.length === numbers.length) {
          console.log('sorted:::', sorted)
        }
      })
  }
}
const nums = [4, 2, 8, 2, 1, 6]
sleepSort(nums)



/* with async await */
const sleep = (num, arr) => {
  return new Promise(resolve => {
    setTimeout(() => {
      arr.push(num)
      resolve()
    }, num)
  })
}

const sleepSort = async numbers => {
  const sorted = []
  const promises = []

  for (const num of numbers) {
    promises.push(sleep(num, sorted))
  }

  await Promise.all(promises)
  return sorted
}

const nums = [9, 2, 8, 2, 1, 6]
sleepSort(nums)
  .then(sorted => console.log('sorted:', sorted))