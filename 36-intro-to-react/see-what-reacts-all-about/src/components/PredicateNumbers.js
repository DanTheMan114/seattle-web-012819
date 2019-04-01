import React, { Component } from 'react'

class PredicateNumbers extends Component {
  constructor(props) {
    super(props)

    this.state = {
      nums: []
    }

    for (let i = props.min; i < props.max; i++) {
      if (props.predicate(i)) {
        this.state.nums.push(i)
      }
    }
  }

  render() {
    return (
      <ul>
        {this.state.nums.map(num => {
          return <li key={num}>{num}</li>
        })}
      </ul>
    )
  }
}

export default PredicateNumbers