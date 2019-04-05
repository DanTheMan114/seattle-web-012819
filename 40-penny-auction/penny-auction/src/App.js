import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Auction from './components/Auction'
import HappyBirthday from './components/HappyBirthday';
import CipherType from './components/CipherType';

class App extends Component {
  constructor() {
    super()

    this.state = {
      auctions: []
    }

    fetch('http://localhost:3000/auctions')
    .then(res => res.json())
    .then(auctions => {
      console.log(auctions)
      this.setState({auctions})
    })
  }
  render() {
    return (
      <div className="App">
        <CipherType />
        <HappyBirthday />
      </div>
    );
  }
}

export default App;
