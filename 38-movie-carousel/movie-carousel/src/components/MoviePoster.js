import React, { Component } from 'react';
import './MoviePoster.css'

class MoviePoster extends Component {
  render() { 
    return (
      <div className="movie-poster">
        <div className="movie-title">{this.props.title}</div>
        <img src={this.props.poster} />
      </div>
    );
  }
}
 
export default MoviePoster;