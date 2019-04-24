import React, { Component } from 'react';
import './App.css';

import UserList from './components/UserList'
import UserFilter from './components/UserFilter';

class App extends Component {
  state = {
    users: [],
    filtered: []
  }

  constructor() {
    this.getUsers()

    this.onSelectMinAge = this.onSelectMinAge.bind(this)
    this.onToggleFriendship = this.onToggleFriendship.bind(this)
  }

  getUsers() {
    fetch('http://localhost:3000/users')
    .then(res => res.json())
    .then(users => {
      console.log(users)
      this.setState({users, filtered: users})
    })
    .catch(console.log)
  }

  onSelectMinAge(ev) {
    console.log(ev)
    let minAge = parseInt(ev.target.value)
    let filtered = this.state.users.filter(user => {
      return user.dob.age > minAge
    })

    this.setState({filtered})
  }

  onToggleFriendship(id) {
    console.log('toggle friend', id)
    let users = this.state.users.map(user => {
      if (user.login.uuid === id) {
        user.isFriend = !user.isFriend
      }
      return user
    })
    this.setState({users})
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <UserFilter
            onSelectMinAge={this.onSelectMinAge}
          />

          {this.state.users.length === 0 ? 
            <p>No users.</p>
            :
            <UserList
              users={this.state.filtered} 
              onToggleFriendship={this.onToggleFriendship}
            />
          }
        </header>
      </div>
    );
  }
}

export default App;
