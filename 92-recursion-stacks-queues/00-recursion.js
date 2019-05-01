// the fibonacci sequence is just a bunch of numbers
// where the next one in the sequence is the sum of the
// two numbers preceeding it.
// 1 1 2 3 5 8 13 21 34
function fib(nth) {
  if (nth <= 2) {
    return 1
  }
  return fib(nth - 1) + fib(nth - 2) 
}

fib(9)

// fib(4)
//   n1 = fib(3)
//      n1 = fib(2)
//        return 1
//      n2 = fib(1)
//        return 1
//      return n1 + n2
//    n2 = fib(2)
//      return 1
//    return n1 + n2
// return true if a string is spelled the
// same backward and forward
// "racecar"
function isPalindrome(ss) {
  return _isPalindrome(ss.toLowerCase(), 0, ss.length - 1)
}

const ALPHABET = 'qwertyuiopasdfghjklzxcvbnm'
function _isPalindrome(ss, left, right) {
  if (right < left) {
    return true
  }
  // look at each index and see if it's actually a letter
  if (!ALPHABET.includes(ss[left])) {
    return _isPalindrome(ss, left + 1, right)
  } else if (!ALPHABET.includes(ss[right])) {
    return _isPalindrome(ss, left, right - 1)
  } else if (ss[left] !== ss[right]) {
    return false
  }
  return _isPalindrome(ss, left + 1, right - 1)
}

p1 = "Go hang a salami, I'm a lasagna hog"
p2 = "Mr. Owl ate my metal worm"
console.log(isPalindrome('racecar'))
console.log(isPalindrome('sdkfhjsdkl'))
console.log(isPalindrome(p1))
console.log(isPalindrome(p2))

// make change
// given an object that represents coin values
// and how many coins you have
// write a function that returns an object giving
// coin change to a specified value
// let coins ={1: 2, 5: 3, 10:1, 25:3}
// makeChange(27, coins)
// should return {1: 2, 25: 1}
//
// base cases
// - the value is zero
// - you're out of coins to give
// recursive case
// - pick the largest coin that you have and subtract it
//   from the value and recurse
// makeChange(27, {25: 1, 1: 2})
//   makeChange(2, {25: 0, 1: 2}) took one quarter
//     makeChange(1, {25: 0, 1: 1}) took one penny
//       makeChange(0, {25: 0, 1: 0}) took another penny