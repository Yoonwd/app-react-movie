import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

class App extends Component {

  state = {}
 
  // 컴.디.마의 코드량 줄이는 효과
  componentDidMount() {
    this._getMovies();
  }

  // 렌더링할 요소 선택해서 맵핑 후 리턴
  _renderMovies = () => {
    const movies = this.state.movies.map(movie => {
      return <Movie 
        title={movie.title_english} 
        poster={movie.medium_cover_image} 
        key={movie.id} 
        genres={movie.genres}
        synopsis={movie.synopsis} 
      /> //movies 배열을 맵해서 새로운 컴포넌트를 만든다.
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
    return fetch('https://yts.am/api/v2/list_movies.json?sort_by=like_count')
    .then(Myresponse => Myresponse.json())
    .then(json => json.data.movies)
    .catch(err => console.log(err))
  }

  render() {
    const { movies } = this.state; 
    return (

      // 클래스 이름 분기해서 다른 css 적용하기
      <div className={movies ? "App" : " App--loading"}>
        {/* movies 키값이 있냐? */}
        {movies ? this._renderMovies() : 'Loading...'}
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