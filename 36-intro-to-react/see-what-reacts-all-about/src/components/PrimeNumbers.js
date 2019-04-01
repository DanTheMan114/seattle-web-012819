import React, { Component } from 'react'

class PrimeNumbers extends Component {
  constructor() {
    super()
    this.state = {
      primes: [2, 3, 5, 7, 11, 13, 17, 19]
    }
  }

  forLoopHelper() {
    let results = []
    for (let i = 0; i < this.state.primes.length; i++) {
      results.push(<li key={i}>{this.state.primes[i]}</li>)
    }
    return results
  }

  render() {
    return (
      <ul>
        {this.forLoopHelper()}
      </ul>
    )
  }
}

export default PrimeNumbers