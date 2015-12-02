function reduce(arr, fn, initial) {
  reduce(arr, fn, initial)
}

module.exports = reduce


reduce([1,2,3], function(prev, curr, index, arr) {
      return prev + curr
    }, 0)