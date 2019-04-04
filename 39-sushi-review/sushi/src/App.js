import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  state = {
    sushis: [],
    eaten: [],
    index: 0,
    balance: 100
  }

  constructor() {
    super()

    this.getSushis()
    .then(sushis => {
      // explicitly attach a isEaten property to every object
      // in the array and start it as false.
      sushis = sushis.map(sushi => {
        sushi.isEaten = false
        return sushi
      })
      this.setState({sushis})
    })

    this.eatSushi = this.eatSushi.bind(this)
    this.moreSushi = this.moreSushi.bind(this)
  }

  getSushis() {
    return fetch(API).then(res => res.json())
    // .then(sushis => {
    //   this.setState({sushis})
    //   this.setState({sushis: sushis})
    // })
  }

  eatSushi(sushi) {
    if (sushi.price > this.state.balance || sushi.isEaten) {
      return
    }

    this.state.eaten.push(sushi)

    console.log('eat')
    sushi.isEaten = true
    this.setState({
      sushis: this.state.sushis,
      balance: this.state.balance - sushi.price,
      eaten: this.state.eaten
    })
  }

  moreSushi() {
    console.log('more')
    this.setState({index: this.state.index + 4})
  }

  render() {
    return (
      <div className="app">
        <SushiContainer
          index={this.state.index}
          sushis={this.state.sushis}
          eatSushi={this.eatSushi}
          moreSushi={this.moreSushi}
        />
        <Table balance={this.state.balance} eaten={this.state.eaten} />
      </div>
    );
  }
}

export default App;