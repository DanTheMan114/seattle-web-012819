import React, { Component } from 'react';
import card from '../img/happy-birthday.jpeg'

class HappyBirthday extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      cardName: 'Tim Allen',
      inputName: 'Tim Allen',
      isShowing: false
    }

    this.inputRef = React.createRef()

    this.showCard = this.showCard.bind(this)
  }

  showCard(ev) {
    ev.preventDefault()
    this.setState({
      cardName: this.state.inputName,
      isShowing: true
    })
  }

  updateName() {
    this.setState({inputName: this.inputRef.current.value})
  }

  renderCard() {
    if (this.state.isShowing) {
      return <div>
        <h1>
          {this.state.cardName}
        </h1>
        <img src={card} />
      </div>
    }
  }

  render() { 
    return ( <div>
      <div>
        <form onSubmit={this.showCard}>
          <input id="birthday-name" type="text" 
            onChange={() => this.updateName()}
            ref={this.inputRef}
            value={this.state.inputName}
          />
          <input type="submit" value="Happy Birthday!"/>
        </form>
      </div>

      {this.renderCard()}
    </div> );
  }
}
 
export default HappyBirthday;