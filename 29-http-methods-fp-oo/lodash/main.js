// https://lodash.com/docs/4.17.11
// use require('package-name') to import packages
// in JavaScript command line apps with Node
const _ = require('lodash')

const ll = [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log('.take(3)', _.take(ll, 3))
console.log('.takeRight(3)', _.takeRight(ll, 3))
console.log('.zip', _.zip(['a', 'b'], [1, 2], [true, false]))

