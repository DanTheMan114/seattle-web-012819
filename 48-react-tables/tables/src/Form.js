import React, { Component } from 'react';

// rows: [
//   {id: 245, name: "Alice", city: "Seattle"},
//   {id: 123, name: "Bob", city: "Portland"},
//   {id: 824, name: "Carol", city: "Seattle"},
// ]

class Form extends Component {
  render() {
    return (
      <div>
        <form>
          <input type="text"
            value={this.props.value}
            placeholder="filter"
            onChange={this.props.handleOnChange}
          />
        </form>
      </div>
    );
  }
}

export default Form;
