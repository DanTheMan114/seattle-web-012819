let nums = [1, 2, 3, 4, 5, 6]

filter(nums, (item) => {
  if (item % 2 == 0) {
    return true
  } else {
    return false
  }
})
filter(nums, item => item % 2 != 0)

// the predicate callback function should
// return true or false given an item to determine
// if it should be added to the filtered results
function filter(arr, predicate) {
  let results = [];
  for (let i = 0; i < arr.length; i++) {
    if (predicate(arr[i])) {
      results.push(arr[i])
    }
  }
  return results;
}

function getEvens(ll) {
  let evens = [];
  for (let i = 0; i < ll.length; i++) {
    let item = ll[i]
    if (item % 2 == 0) {
      evens.push(item)
    }
  }
  return evens
}

function getOdds(ll) {
  let evens = [];
  for (let i = 0; i < ll.length; i++) {
    let item = ll[i]
    if (item % 2 != 0) {
      evens.push(item)
    }
  }
  return evens
}