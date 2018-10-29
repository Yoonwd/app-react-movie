import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

class App extends Component {

  state = {}

  componentDidMount() {
    fetch('https://yts.am/api/v2/list_movies.json?sort_by=rating')
    .then(Myresponse => Myresponse.json())
    .then(json => console.log(json))
    .catch(err => console.log(err))
  }

  _renderMovies = () => {
    const movies = this.state.movies.map((movie, index) => {
      return <Movie title={movie.title} poster={movie.poster} key={index}/> //movies 배열을 맵해서 새로운 컴포넌트를 만든다.
    })
    return movies
  }

  render() {
    return (
      <div className="App">
        {/* movies 키값이 있냐? */}
        {this.state.movies ? this._renderMovies() : 'Loading...'}
      </div>
    );
  }
}

export default App;

// 맵함수와 같은 컴포넌트
/* 
  <Movie title={movies[0].title} poster={movies[0].poster} />
  <Movie title={movies[1].title} poster={movies[1].poster} />
  <Movie title={movies[2].title} poster={movies[2].poster} />
  <Movie title={movies[3].title} poster={movies[3].poster} />
*/