import React, { Component } from 'react';

class RefReferences extends Component {
  constructor(props) {
    super(props);
    this.state = {  }

    this.nameInput = React.createRef()
    this.cityInput = React.createRef()
    this.bioInput = React.createRef()

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(ev) {
    ev.preventDefault()

    let name = this.nameInput.current.value
    let city = this.cityInput.current.value
    let bio = this.bioInput.current.value

    this.props.updateInfo(name, city, bio)
  }

  render() { 
    return ( <div>
      <h2>Ref References</h2>
      <form onSubmit={this.handleSubmit}>
        Name: <input type="text" placeholder="name" ref={this.nameInput}></input>
        City: <input type="text" placeholder="city" ref={this.cityInput}></input>
        Bio: <input type="text" placeholder="bio" ref={this.bioInput}></input>
        <input type="submit" />
      </form>
    </div> );
  }
}
 
export default RefReferences;