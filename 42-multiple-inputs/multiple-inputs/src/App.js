import React, { Component } from 'react';
import './App.css';

import TotallyUncontrolled from './components/00-totally-uncontrolled'
import DOMSelectionOrder from './components/01-dom-selection-order'
import DOMSelectionIds from './components/02-dom-selection-ids'
import DOMSelectionNames from './components/03-dom-selection-names'
import RefReferences from './components/04-ref-references'
import TripleControlled from './components/05-triple-controlled'
import SingleControlled from './components/06-single-controlled'

class App extends Component {
  state = {
    name: 'N/A',
    city: 'N/A',
    bio: 'N/A'
  }

  constructor() {
    super()
    this.updateInfo = this.updateInfo.bind(this)
  }

  updateInfo(name, city, bio) {
    console.log('update info', {name, city, bio})
    this.setState({name, city, bio})
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div>
            Name: {this.state.name}{' '}
            City: {this.state.city}{' '}
            Bio: {this.state.bio}
          </div>

          <input id="name" value="trash1" />

          <TotallyUncontrolled updateInfo={this.updateInfo} />
          <DOMSelectionOrder updateInfo={this.updateInfo} />
          <DOMSelectionIds updateInfo={this.updateInfo} />
          <DOMSelectionNames updateInfo={this.updateInfo} />
          <RefReferences updateInfo={this.updateInfo} />
          <TripleControlled updateInfo={this.updateInfo} />
          <SingleControlled updateInfo={this.updateInfo} />

          <input id="name" value="trash2" />
        </header>
      </div>
    );
  }
}

export default App;
