import React, { Component } from 'react';

class CipherType extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      plainInput: '',
      cipheredText: '',
      isShowingPlaintext: false
    }

    this.handleOnChange = this.handleOnChange.bind(this)
  }

  // return random characters
  // except!! spaces return as is.
  cipher(letter) {
    if (letter === ' ') {
      return ' '
    }
    let choices = 'qwertyuiopasdfghjklzxcvbnm' 
    let index = Math.floor(Math.random() * choices.length)
    let choice = choices.charAt(index)
    return choice
  }

  displayText() {
    if (this.state.isShowingPlaintext) {
      return this.state.plainInput
    } else {
      return this.state.cipheredText
    }
  }

  handleOnChange(ev) {
    let text = ev.target.value
    let letter = text.charAt(text.length - 1)
    let cipheredLetter = this.cipher(letter)

    if (text.length === 0) {
      this.setState({
        cipheredText: '',
        plainInput: '',
      })
    } else {
      this.setState({
        cipheredText: this.state.cipheredText + cipheredLetter,
        plainInput: this.state.plainInput + letter
      })
    }
  }

  handleOnSubmit(ev) {
    ev.preventDefault()

    // toggle it so it's opposite whatever it was
    let isShowingPlaintext = !this.state.isShowingPlaintext

    this.setState({
      isShowingPlaintext,
    })
  }

  render() { 
    return ( <div>
      <p>
        You can type secrets here and no one will know what you're
        writing unless you press reveal!
      </p>
      <div>
        <form onSubmit={(ev) => this.handleOnSubmit(ev)}>
          <textarea
            rows="10" cols="60"
            onChange={this.handleOnChange}
            value={this.displayText()}
          >
          </textarea>
          <p>
            {'' + this.state.isShowingPlaintext}
            <input type="submit" value="toggle visibility"/>
          </p>
        </form>
      </div>
    </div> );
  }
}
 
export default CipherType;