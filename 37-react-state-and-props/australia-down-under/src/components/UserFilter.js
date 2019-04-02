import React, { Component } from 'react';

class UserFilter extends Component {
  render() {
    return (
      <div>
        Min Age:
        <select onChange={this.props.onSelectMinAge}>
          <option value="0">None</option>
          <option value="20">20</option>
          <option value="30">30</option>
          <option value="40">40</option>
          <option value="50">50</option>
          <option value="60">60</option>
          <option value="70">70</option>
        </select>
      </div>
    );
  }
}

export default UserFilter;
