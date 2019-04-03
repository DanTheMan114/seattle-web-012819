import React, { Component } from 'react';

import MoviePoster from './MoviePoster'

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      start: 0
    }
  }

  currentThree() {
    return [
      this.props.items[this.state.start + 0],
      this.props.items[this.state.start + 1],
      this.props.items[this.state.start + 2]
    ]
  }

  prev() {
    if (this.state.start > 0) {
      this.setState({start: this.state.start - 1})
    }
  }

  next() {
    if (this.state.start < this.props.items.length - 1 - 2) {
      this.setState({start: this.state.start + 1})
    }
  }

  render() { 
    return <div>
      <p>
        <button onClick={() => this.prev()}>prev</button>
        <button onClick={() => this.next()}>next</button>
      </p>

      <div>
        {this.currentThree().map(img => {
          return <MoviePoster poster={img} title="Coco" />
        })}
      </div>
    </div>
  }
}
 
export default Carousel;