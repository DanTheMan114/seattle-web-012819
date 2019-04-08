import React, { Component, PureComponent } from 'react';

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: props.text
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(ev) {
    this.setState({text: ev.target.value})
  }

  componentWillUnmount() {
    this.props.saveText(this.state.text)
  }

  render() { 
    return (
      <>
        <h1>Home</h1>
        <div>
          <input
            type="text" value={this.state.text}
            ref={this.ref}
            onChange={this.handleChange}
          />
        </div>
        <div>
          you: {this.state.text}
        </div>
      </>
    );
  }
}
 
export default Home;