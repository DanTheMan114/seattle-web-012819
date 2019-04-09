import React, { Component } from 'react';

class SingleControlled extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      city: '',
      bio: ''
    }
    this.onChange = this.onChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  onChange(ev) {
    let key = ev.target.name;
    let value = ev.target.value;

    let state = {}
    state[key] = value

    // {key: value} will create an object literally {'key': 99}
    // this.setState({key: value})
    // {[key]: value} is new syntactic sugar that will evaluate
    // key="bio"; {[key]: 99} => {'bio': 99}
    // this.setState({[key]: value})

    console.log('single controlled state', state)
    this.setState(state)
  }

  handleSubmit(ev) {
    ev.preventDefault()
    this.props.updateInfo(this.state.name, this.state.city, this.state.bio)
  }

  render() { 
    return ( <div>
      <h2>Single Controlled</h2>
      <form onSubmit={this.handleSubmit}>
        Name: <input type="text" name="name" placeholder="name" onChange={this.onChange}></input>
        City: <input type="text" name="city" placeholder="city" onChange={this.onChange}></input>
        Bio: <input type="text" name="bio" placeholder="bio" onChange={this.onChange}></input>
        <input type="submit" />
      </form>
    </div> );
  }
}
 
export default SingleControlled;