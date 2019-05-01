class Queue {
  constructor() {

  }

  enqueue(value) {

  }

  dequeue() {

  }
}

// Josephus problem / "eeney-meeney-miney-moe"
// people stand in a circle
// choose a number
// count that many people
// when you hit the number shoot that person
// keep counting
// last one standing wins

let people = [1, 2, 3, 4, 5, 6, 7]
let qq = new Queue()
people.forEach(person => qq.enqueue(person))

let count = 0
let number = 4
while (qq.size() > 1) {
  count++
  if (count === number) {
    qq.dequeue() // remove current person
    count = 0
  } else {
    // move the person in front to the back
    qq.enqueue(qq.dequeue())
  }
}
console.log('winner:', qq.dequeue())
