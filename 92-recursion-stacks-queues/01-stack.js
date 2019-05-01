class Stack {
  constructor() {
    this.data = new Array(16)
    this.size = 0
  }

  push(value) {
    this._checkCapacity()
    this.data[this.size] = value
    this.size++
  }

  pop() {
    let value = this.data[this.size - 1]
    this.size--
    return value
  }

  // well you could just do a pop() and a push()
  peek() {
    return this.data[this.size - 1]
  }

  size() {
    return this.size
  }

  isEmpty() {
    return this.size === 0
  }

  // if the stack fills up then we can create a new
  // array that's twice the size of the original
  // and fill it up with everything we have
  _checkCapacity() {
    if (this.size >= this.data.length) {
      let newData = new Array(this.data.length * 2)
      this.data.forEach((value, index) => {
        newData[index] = value
      })
      this.data = newData
    }
  }
}

// write a function called reverse that accepts
// one stack. the function should reverse all the
// contents of the stack. you may use additional
// stacks in order to reverse it.
function reverse(stack) {

}

// write a function called isBalanced that accepts
// a string and returns true if all the parenthesis
// are balanced.
// "dfg()"  true
// ")(" false
// "((()))" true
// "text((()))otherText()" true
// "(" false
// ")" false
// "" true
function isBalanced(ss) {

}

// "func(){for()aa[i](){}}"