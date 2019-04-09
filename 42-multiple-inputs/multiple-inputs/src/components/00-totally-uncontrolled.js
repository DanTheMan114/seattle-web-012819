import React, { Component } from 'react';

class TotallyUncontrolledForm extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(ev) {
    ev.preventDefault()

    let name = 'uhh'
    let city = 'uhh'
    let bio = 'uhh'

    this.props.updateInfo(name, city, bio)
  }

  render() { 
    return ( <div>
      <h2>Totally Uncontrolled</h2>
      <form onSubmit={this.handleSubmit}>
        Name: <input type="text" placeholder="name"></input>
        City: <input type="text" placeholder="city"></input>
        Bio: <input type="text" placeholder="bio"></input>
        <input type="submit" />
      </form>
    </div> );
  }
}
 
export default TotallyUncontrolledForm;