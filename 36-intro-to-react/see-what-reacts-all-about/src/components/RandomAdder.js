import React, { Component } from 'react'

class RandomAdder extends Component {
  randomNumber() {
    return Math.floor(Math.random() * 10)
  }

  render() {
    let num1 = this.randomNumber()
    let num2 = this.randomNumber()
    let result = num1 + num2

    return <div>
      {num1} plus {num2}
      {' '} equals {result}
    </div>
  }
}

export default RandomAdder