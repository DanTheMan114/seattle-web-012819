import React, { Component } from 'react';

class DOMSelectionOrder extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(ev) {
    ev.preventDefault()

    let inputs = ev.target.getElementsByTagName('input')
    let name = inputs[0].value
    let city = inputs[1].value
    let bio = inputs[2].value

    this.props.updateInfo(name, city, bio)
  }

  render() { 
    return ( <div>
      <h2>DOM Selection Order</h2>
      <form onSubmit={this.handleSubmit}>
        Name: <input type="text" placeholder="name"></input>
        City: <input type="text" placeholder="city"></input>
        Bio: <input type="text" placeholder="bio"></input>
        <input type="submit" />
      </form>
    </div> );
  }
}
 
export default DOMSelectionOrder;