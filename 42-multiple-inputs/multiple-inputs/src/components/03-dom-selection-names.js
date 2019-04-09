import React, { Component } from 'react';

class DOMSelectionNames extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(ev) {
    ev.preventDefault()

    // use HTMLFormElement.elements
    // https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/elements
    let name = ev.target.elements['name'].value
    let city = ev.target.elements['city'].value
    let bio = ev.target.elements['bio'].value
    console.log('name target', ev.target)

    this.props.updateInfo(name, city, bio)
  }

  render() { 
    return ( <div>
      <h2>DOM Selection Names</h2>
      <form onSubmit={this.handleSubmit}>
        Name: <input type="text" name="name" placeholder="name"></input>
        City: <input type="text" name="city" placeholder="city"></input>
         Bio: <input type="text" name="bio"  placeholder="bio"></input>
        <input type="submit" />
      </form>
    </div> );
  }
}
 
export default DOMSelectionNames;