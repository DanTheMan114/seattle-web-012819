import React, { Component } from 'react';

class CurrentLeader extends Component {
  leader() {
    let winnerSoFar = undefined;
    for (let key in this.props.votes) {
      if (winnerSoFar === undefined) {
        winnerSoFar = key
      } else {
        let mostVotes = this.props.votes[winnerSoFar]
        if (this.props.votes[key] > mostVotes) {
          winnerSoFar = key
        }
      }
    }
    return winnerSoFar
  }

  render() {
    return (
      <div>
        Current Leader: {this.leader()}
      </div>
    );
  }
}

export default CurrentLeader;
