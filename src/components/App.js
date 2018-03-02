import React, { Component } from 'react';
import '../App.css';
import Header from './Header';
import Movie from './Movie';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header text="My Movie Mojo App!" />
        <p className="App-intro">Sharing a few movies</p>
        <div className="movies">
          <Movie 
            title="Harry Porter and the Sorceres Stone" 
            year="2001" 
            alt="Adaptation of the first of J.K. Rowling's popular children's novels about Harry Potter, a boy who learns on his eleventh birthday that he is the orphaned son of two powerful wizards and possesses unique magical powers of his own." 
            poster="./posters/poster1.png" />
          <Movie 
            title="Star Wars" 
            year="1997" 
            alt="an American epic space opera media franchise, centered on a film series created by George Lucas depicting the adventures of various characters a long time ago in a galaxy far, far away." 
            poster="./posters/poster2.png" />
          <Movie 
            title="Betrayed Women" 
            year="1955" 
            alt="Love-starved gun molls (Carole Mathews, Beverly Michaels) escape from a prison farm where matrons make their lives miserable." 
            poster="./posters/poster3.png" />
          <Movie 
            title="Dinosaurus" 
            year="1960" 
            alt="Science fiction film directed by Irvin Yeaworth and produced by Jack H. Harris. The leading role was intended for Steve McQueen, who starred in The Blob two years earlier, also directed by Yeaworth Jr., but for reasons not clear, the offer was never made to McQueen." 
            poster="./posters/poster4.png" />
        </div>
      </div>
    );
  }
}

export default App;
