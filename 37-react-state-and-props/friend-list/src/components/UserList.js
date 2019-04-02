import React, { Component } from 'react';

import User from './User'

class UserList extends Component {
  render() {
    return (
      <div>
        {this.props.users.map((user, i) => {
          return (
            <User
              key={i} user={user} 
              onToggleFriendship={this.props.onToggleFriendship}
            />
          )
        })}
      </div>
    );
  }
}

export default UserList;
