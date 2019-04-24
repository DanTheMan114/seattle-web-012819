import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Form from './Form'
import Table from './Table'

class App extends Component {
  constructor() {
    super()

    let rows = [
      {id: 245, name: "Alice", city: "Seattle"},
      {id: 123, name: "Bob", city: "Portland"},
      {id: 824, name: "Carol", city: "Seattle"},
    ]

    this.state = {
      value: '',
      rows: rows
    }

    this.handleOnChange = this.handleOnChange.bind(this)
  }

  handleOnChange(ev) {
    // setState waits till the end of an event to 
    // batch update everything at once
    let value = ev.target.value
    this.setState({value})
  }

  render() {
    return (
      <div>
        <Form handleOnChange={this.handleOnChange}
              value={this.state.value}
        />
        <Table data={this.state.rows} filter={this.state.value} />
        <table border="1">
          <tr>
            <td>id</td>
            <td>name</td>
            <td>city</td>
          </tr>
          <tr>
            <td>234</td>
            <td>Susan</td>
            <td>Seattle</td>
          </tr>
          <tr>
            <td>835</td>
            <td>Henry</td>
            <td>Seattle</td>
          </tr>
          <tr>
            <td>734</td>
            <td>Camille</td>
            <td>Portland</td>
          </tr>
        </table>
      </div>
    );
  }
}

export default App;
