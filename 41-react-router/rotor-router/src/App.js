import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {BrowserRouter as Router, Route, NavLink} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'

class App extends Component {
  constructor() {
    super()
    this.state = {
      text: 'Seattle!!'
    }
    this.saveText = this.saveText.bind(this)
  }

  saveText(text) {
    console.log('saving', text)
    this.setState({text})
  }

  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <div>
              anchor tags:
              <a href="/">Home</a>{' '}
              <a href="/about">About</a>{' '}
              <a href="/contact">Contact</a>{' '}

              NavLinks:
              <NavLink activeClassName="active" exact to="/">Home</NavLink>{' '}
              <NavLink activeClassName="active" to="/about">About</NavLink>{' '}
              <NavLink activeClassName="active" to="/contact">Contact</NavLink>
            </div>

            <div>
              {/* <form onSubmit={this.handleSubmit} /> 
              <form onSubmit={this.handleSubmit()} />
              <form onSubmit={() => this.handleSubmit()} /> */}

              <Route exact path="/"
                component={() => <Home text={this.state.text} saveText={this.saveText} />}
              />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
            </div>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
