import React, { Component } from 'react';

class User extends Component {
  render() {
    return (
      <div className="user-card">
        <div>
          <img src={this.props.user.picture.thumbnail} alt="profile" />

          <span className="friend-heart">
            {this.props.user.isFriend ? '❤' : '♡'}
          </span>

          {this.props.user.name.first}{' '}
          {this.props.user.name.last}

          {' '}
          ({this.props.user.dob.age})
        </div>

        <div>
          <button onClick={() => this.props.onToggleFriendship(this.props.user.login.uuid)}>
            toggle friend
          </button>
        </div>
      </div>
    );
  }
}

export default User;
