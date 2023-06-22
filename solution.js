function findAverage(array) {
  let total = array.reduce((a, b) => a + b)
  if (array.length === 0) {
    return 0
  } else {
    return total / array.length
  }
}

console.log(findAverage([1,1,1])) // 1
console.log(findAverage([1,2,3,4])) // 2.5