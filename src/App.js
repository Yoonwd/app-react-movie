import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

class App extends Component {

  state = {}

  // 컴.디.마의 코드량 줄이는 효과
  componentDidMount() {
    this._getMovies();
  }

  _renderMovies = () => {
    const movies = this.state.movies.map(movie => {
      return <Movie title={movie.title} poster={movie.large_cover_image} key={movie.id}/> //movies 배열을 맵해서 새로운 컴포넌트를 만든다.
    })
    return movies
  }

  _getMovies = async () => {
    const movies = await this._callApi()
    this.setState({
      // movies: movies
      movies
    })
  }

  _callApi = () => {
    return fetch('https://yts.am/api/v2/list_movies.json?sort_by=rating')
    .then(Myresponse => Myresponse.json())
    .then(json => json.data.movies)
    .catch(err => console.log(err))
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