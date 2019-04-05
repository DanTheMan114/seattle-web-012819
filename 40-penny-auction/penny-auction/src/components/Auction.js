import React, { Component } from 'react';

class Auction extends Component {
  constructor(props) {
    super(props);
    console.log(props)
    this.state = { 
      timeLeft: parseInt(props.auction.timeleft),
      isOpen: true
    }

    this.decrementTimer = this.decrementTimer.bind(this)
    this.timer = setInterval(this.decrementTimer, 1000)
  }

  decrementTimer() {
    this.setState({timeLeft: this.state.timeLeft - 1})
    console.log('tick:', this.state.timeLeft)
    if (this.state.timeLeft === 0) {
      this.setState({isOpen: false})
      clearInterval(this.timer)
    }
  }

  render() { 
    return ( <div>
      <div>{this.props.auction.item}</div>
      <div>{this.props.auction.bid}</div>
      <div>{this.state.timeLeft}</div>
    </div> );
  }
}
 
export default Auction;