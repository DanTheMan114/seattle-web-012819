import React, { Component } from 'react';

class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: 'Seattle'
    }

    this.onTextChange = this.onTextChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  onTextChange(ev) {
    console.log('changed', ev.target.value)
    let text = ev.target.value
    this.setState({text: text})
  }

  handleSubmit(ev) {
    ev.preventDefault()
    this.props.onCastVote(this.state.text)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          Vote:
          <input
            type="text"
            value={this.state.text}
            onChange={this.onTextChange}
          />
          <input type="submit"></input>
        </form>
        <p>
          You are voting for: {this.state.text}
        </p>
      </div>
    );
  }
}

export default Form;
