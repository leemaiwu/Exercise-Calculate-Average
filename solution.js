function findAverage(array) {
  if (array.length === 0) {
    return 0
  } else {
    return (array.reduce((a, b) => a + b) / array.length)
  }
}

console.log(findAverage([])) // 0
console.log(findAverage([1,1,1])) // 1
console.log(findAverage([1,2,3,4])) // 2.5

// Alternate Solution

const average = (arr) => !arr.length ? 0 : (arr.reduce((a, b) => a + b)) / arr.length
  
console.log(average([])) // 0
console.log(average([1,1,1])) // 1
console.log(average([1,2,3,4])) // 2.5