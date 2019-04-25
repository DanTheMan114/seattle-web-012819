// Manually implement our own List out of forcing ourselves
// to use a restrictive fixed-size array

class ArrayList {
  // assume all ArrayLists start with room for 7 things
  constructor() {
    this.data = new Array(7)
    this.size = 0
  }

  checkBounds(index) {
    if (index >= this.size) {
      throw 'index out of range exception'
    }
  }

  checkCapacity() {
    // the array that we're making our list out of is full!
    // we should double the size of the array we're using
    // copy all the values we have now into that larger array
    // and use the larger array from now on.
    if (this.size === this.data.length) {
      console.log('growing from ', this.size, 'to', this.size * 2)
      let larger = new Array(2 * this.size)
      for (let i = 0; i < this.size; i++) {
        larger[i] = this.data[i]
      } 
      this.data = larger
    }
  }

  get(index) {
    this.checkBounds()
    return this.data[index]
  }

  set(index, value) {
    this.checkBounds()
    this.data[index] = value
  }

  push(value) {
    this.checkCapacity()
    // add a value to the end of the array
    this.data[this.size] = value
    // increment the size so we know how many things
    // are being used in the array
    this.size++
  }

  pop() {
    // get the last value being used in our array
    let value = this.data[this.size - 1]
    // "erase" that position in the array so it's back
    // to being "empty"
    this.data[this.size - 1] = undefined

    // decrement the size of our ArrayList to indicate
    // we're only using so-many indices.
    this.size--
    return value
  }

  insert(index, value) {
    this.checkCapacity()

    // start at a free unused empty position
    // at the end of what we're using in the array
    // scoot everything over to make room for the new value
    for (let i = this.size; i > index; i--) {
      // scoot each value one spot toward the back
      this.data[i] = this.data[i - 1]
    }
    // now we can save the value at a spot that was
    // being used by another thing, but has been scooted over.
    this.data[index] = value

    // increment the size to show we've got one more thing
    this.size++
  }

  // print out the array
  myToString() {
    let result = this.size + ' ['
    for (let i = 0; i < this.size; i++) {
      result += this.data[i] + ', '
    }
    result += ']'
    return result
  }

  rawToString() {
    return this.size + ' ' + this.data
  }
}

let aa = new ArrayList()
console.log('fake', aa.myToString())
console.log('real', aa.rawToString())

aa.push(42)
console.log('fake', aa.myToString())
console.log('real', aa.rawToString())
aa.push(56)
console.log('fake', aa.myToString())
console.log('real', aa.rawToString())
aa.push(94)
console.log('fake', aa.myToString())
console.log('real', aa.rawToString())

aa.insert(1, 444)

console.log('fake', aa.myToString())
console.log('real', aa.rawToString())

while (aa.size < 1000000) {
  aa.push(Math.random())
}