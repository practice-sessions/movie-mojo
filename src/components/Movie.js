import React, { Component } from 'react';

 
class Movie extends Component {
  render() {
    return (
      <div className="movie">
        <h2>{ this.props.title }</h2>
      <div><img width="200" src={ this.props.poster } alt="desc" /></div>
        <p>({ this.props.year })</p>
        <p>{ this.props.alt }</p>
      </div>
    );
  }
}
 
export default Movie;