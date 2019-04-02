import React, { Component } from 'react';

class Vote extends Component {
  render() {
    let name = this.props.name
    let count = this.props.value
    return (
      <div>
        {name}: {count}
      </div>
    );
  }
}

export default Vote;
