import React, { Component } from 'react';

class TrippleControlled extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      city: '',
      bio: ''
    }
    this.onNameChange = this.onNameChange.bind(this)
    this.onCityChange = this.onCityChange.bind(this)
    this.onBioChange = this.onBioChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  onNameChange(ev) {
    let value = ev.target.value
    this.setState({name: value})
  }

  onCityChange(ev) {
    let value = ev.target.value
    this.setState({city: value})
  }

  onBioChange(ev) {
    let value = ev.target.value
    this.setState({bio: value})
  }

  handleSubmit(ev) {
    ev.preventDefault()
    this.props.updateInfo(this.state.name, this.state.city, this.state.bio)
  }

  render() { 
    return ( <div>
      <h2>Triple Controlled</h2>
      <form onSubmit={this.handleSubmit}>
        Name: <input type="text" value={this.state.name} placeholder="name" onChange={this.onNameChange}></input>
        City: <input type="text" value={this.state.city} placeholder="city" onChange={this.onCityChange}></input>
        Bio: <input type="text"  value={this.state.bio} placeholder="bio" onChange={this.onBioChange}></input>
        <input type="submit" />
      </form>
    </div> );
  }
}
 
export default TrippleControlled;