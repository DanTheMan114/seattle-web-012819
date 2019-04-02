import React, { Component } from 'react';

import Vote from './Vote'

class VoteTally extends Component {
  render() {
    return (
      <div>
        {Object.keys(this.props.votes).map(voteKey => {
          return (
            <Vote
              key={voteKey}
              name={voteKey}
              value={this.props.votes[voteKey]}
            />
          )
        })}
      </div>
    );
  }
}

export default VoteTally;
