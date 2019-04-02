import React, { Component } from 'react';
import './App.css';

import CurrentLeader from './components/CurrentLeader'
import Form from './components/Form'
import VoteTally from './components/VoteTally'

class App extends Component {
  constructor() {
    super()
    this.state = {
      votes: {
        'Seattle': 32,
        'Vancouver': 23,
        'Portland': 19,
      }
    }

    this.castVote = this.castVote.bind(this)
  }

  castVote(key) {
    console.log('cast vote', key)
    let newState = Object.assign({}, this.state)
    let votes = newState.votes
    if (votes[key] === undefined) {
      votes[key] = 0
    }
    votes[key]++
    this.setState(newState)
  }

  totalVotes() {
    let total = 0
    for (let value of Object.values(this.state.votes)) {
      total += value
    }
    return total
  }

  shouldShowCurrentLeader() {
    if (this.totalVotes() > 100) {
      return <CurrentLeader votes={this.state.votes} />
    } else {
      return <div>
        <p>We will only display a leader once 100 votes have been cast.</p>
        <p>Votes cast so far: {this.totalVotes()}</p>
      </div>
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {this.shouldShowCurrentLeader()}
          {/* {
            this.totalVotes() > 100 ?
              <CurrentLeader votes={this.state.votes} />
            : 
              <div>
                <p>We will only display a leader once 100 votes have been cast.</p>
                <p>Votes cast so far: {this.totalVotes()}</p>
              </div>
          } */}

          <Form onCastVote={this.castVote} />
          <VoteTally votes={this.state.votes} />
        </header>
      </div>
    );
  }
}

export default App;
