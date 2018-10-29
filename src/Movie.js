import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Movie.css';

export default class Movie extends Component {

//   부모App에서 받을 프롭스를 한정하기 - 스트링, 필요사항으로  
  static propTypes = {
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired
  }  

  render() {
    console.log(this.props);
    return (
      <div>
        <MoviePoster poster={this.props.poster}/>
        <h1>{this.props.title}</h1>
      </div>
    )
  }
 }

 class MoviePoster extends Component {

  // 부모요소에서 받아야 할 필요사항 체크
    static propTypes = {
      poster: PropTypes.string.isRequired
    }

    render() {
        console.log(this.props);
        return (
            <img src={this.props.poster} />
        )
    }
 }