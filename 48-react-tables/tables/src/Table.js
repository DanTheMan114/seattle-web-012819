import React, { Component } from 'react';
import TableRow from './TableRow'

// rows: [
//   {id: 245, name: "Alice", city: "Seattle"},
//   {id: 123, name: "Bob", city: "Portland"},
//   {id: 824, name: "Carol", city: "Seattle"},
// ]

class Table extends Component {
  myFilter() {
    return this.props.data.filter(row => {
      return row.name.includes(this.props.filter) ||
             row.city.includes(this.props.filter)
    })
  }

  render() {
    return (
      <div>
        <h1>Table</h1>
        <table border="1">
          <tr>
            <td>id</td>
            <td>name</td>
            <td>city</td>
          </tr>
          {this.myFilter().map(row => {
            return <TableRow row={row} />
          })}
        </table>
      </div>
    );
  }
}

export default Table;
