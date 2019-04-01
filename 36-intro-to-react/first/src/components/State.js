import React, { Component } from 'react';

class State extends Component {
  constructor() {
    super()

    this.state = {
      name: 'Washington',
      description: 'Washington, officially the State of Washington, is a state in the Pacific Northwest region of the United States.'
    }
  }

  render() {
    return <div>
      <h1>{this.state.name}</h1>
      <p>{this.state.description}</p>
    </div>
  }
}

export default State;