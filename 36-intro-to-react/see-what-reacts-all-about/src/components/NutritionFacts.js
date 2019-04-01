import React, { Component } from 'react'

class NutritionFacts extends Component {
  constructor(props) {
    super(props)
    console.log(props)
  }

  render() {
    return (
      <div>
        <h2>{this.props.name}</h2>
        <p>{this.props.description}</p>
      </div>
    )
  }
}

export default NutritionFacts