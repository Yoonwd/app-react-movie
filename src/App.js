import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

const movies = [
  {
    title: "React",
    poster: "https://image.aladin.co.kr/product/15837/89/cover/k462533335_1.jpg"
  },
  {
    title: "Node",
    poster: "https://image.aladin.co.kr/product/15837/93/cover/k422533335_1.jpg"
  },
  {
    title: "Refactor",
    poster: "https://image.aladin.co.kr/product/16929/94/cover/k392534378_1.jpg"
  },
  {
    title: "javascript",
    poster: "https://image.aladin.co.kr/product/2252/42/cover/8960773867_1.jpg"
  }
]

class App extends Component {
  render() {
    return (
      <div className="App">
        {movies.map(movie => {
          return <Movie title={movie.title} poster={movie.poster} /> //movies 배열을 맵해서 새로운 컴포넌트를 만든다.
        })}
      </div>
    );
  }
}

export default App;

// 맵함수와 같은 컴포넌트
{/* 
  <Movie title={movies[0].title} poster={movies[0].poster} />
  <Movie title={movies[1].title} poster={movies[1].poster} />
  <Movie title={movies[2].title} poster={movies[2].poster} />
  <Movie title={movies[3].title} poster={movies[3].poster} />
*/}