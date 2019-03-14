function forEach(arr, cb) {
  for (let i = 0; i < arr.length; i++) {
    cb(arr[i]) 
  }
} 

function map(arr, cb) {
  let results = []
  for (let i = 0; i < arr.length; i++) {
    let result = cb(arr[i])
    results.push(result)
  }
  return results
}

function filter(arr, cb) {
  let results = [];
  for (let i = 0; i < arr.length; i++) {
    if (cb(arr[i])) {
      results.push(arr[i])
    }
  }
  return results;
}