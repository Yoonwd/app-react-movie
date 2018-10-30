import React from 'react';
import PropTypes from 'prop-types';
import LinesEllipsis from 'react-lines-ellipsis';
import './Movie.css';

// export default class Movie extends Component {

// //   부모App에서 받을 프롭스를 한정하기 - 스트링, 필요사항으로  
//   static propTypes = {
//     title: PropTypes.string.isRequired,
//     poster: PropTypes.string.isRequired
//   }  

//   render() {
//     console.log(this.props);
//     return (
//       <div>
//         <MoviePoster poster={this.props.poster}/>
//         <h1>{this.props.title}</h1>
//       </div>
//     )
//   }
//  }

function Movie({title, poster, genres, synopsis}) {
  return (
    <div className="Movie">
      <div className="Movie__Columns">
        <MoviePoster poster={poster} alt={title}/>
      </div>  
      <div className="Movie__Columns">
        <h1>{title}</h1>
        <div className="Movie__Genres">
          {genres.map((genre, index) => <MovieGenre genre={genre} key={index} />)}
        </div>
        <div className="Movie__Synopsis">
          <LinesEllipsis
            text={synopsis}
            maxLine='3'
            ellipsis='...'
            trimRight
            baseOn='letters'
            />
        </div>
      </div>    
    </div>
  )  
}

//  class MoviePoster extends Component {

//   // 부모요소에서 받아야 할 필요사항 체크
//     static propTypes = {
//       poster: PropTypes.string.isRequired
//     }

//     render() {
//         console.log(this.props);
//         return (
//             <img src={this.props.poster} alt="poster"/>
//         )
//     }
//  }
 
// 스테이트없는 컴포넌트 - 렌더함수, 라이프사이클없음
function MoviePoster({poster, alt}) {
  return (
      <img src={poster} alt={alt} title={alt} className="Movie__Poster"/>
  )
}

function MovieGenre({genre}) {
  return (
    <span className="Movie_Genre">{genre} </span>
  )
}

Movie.propTypes = {
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.array.isRequired,
  synopsis: PropTypes.string.isRequired
}

MoviePoster.propTypes = {
  poster: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
}
 
MovieGenre.propTypes = {
  genre: PropTypes.array.isRequired,
}

 export default Movie;

//클래스 컴포넌트는 this.props 를 써줘야 한다. 함수 컴포넌트는 필요없다.