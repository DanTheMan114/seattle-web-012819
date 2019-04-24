import React, { Component } from 'react';

class TableRow extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.row.id}</td>
        <td>{this.props.row.name}</td>
        <td>{this.props.row.city}</td>
      </tr>
    );
  }
}

export default TableRow;
