let nums = [1, 2, 3, 4, 5]
let superheroes = [
  {name: 'Wolverine', identity: 'Logan'},
  {name: 'Superman', identity: 'Clark Kent'},
  {name: 'Batman', identity: 'Bruce Wayne'}
]

map(superheroes, (hero) => hero.name)
map(superheroes, (hero) => hero.identity)
map(nums, (num) => num ** 2)

function map(arr, fn) {
  let results = []
  for (let i = 0; i < arr.length; i++) {
    let result = fn(arr[i])
    results.push(result)
  }
  return results
}

function transformToNames(ll) {
  let names = []
  for (let i = 0; i < ll.length; i++) {
    names.push(ll[i].name)
  }
  return names
}

function transformtoidentity(ll) {
  let results = []
  for (let i = 0; i < ll.length; i++) {
    results.push(ll[i].identity)
  }
  return results
}

function square(ll) {
  let results = []
  for (let i = 0; i < ll.length; i++) {
    results.push(ll[i] ** 2)
  }
  return results
}