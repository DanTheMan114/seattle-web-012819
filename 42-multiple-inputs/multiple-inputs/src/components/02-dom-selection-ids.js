import React, { Component } from 'react';

class DOMSeleftionIds extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(ev) {
    ev.preventDefault()

    let name = document.getElementById('name').value
    let city = document.getElementById('city').value
    let bio = document.getElementById('bio').value

    this.props.updateInfo(name, city, bio)
  }

  render() { 
    return ( <div>
      <h2>DOM Selection IDs</h2>
      <form onSubmit={this.handleSubmit}>
        Name: <input id="name" type="text" placeholder="name"></input>
        City: <input id="city" type="text" placeholder="city"></input>
        Bio: <input id="bio" type="text" placeholder="bio"></input>
        <input type="submit" />
      </form>
    </div> );
  }
}
 
export default DOMSeleftionIds;