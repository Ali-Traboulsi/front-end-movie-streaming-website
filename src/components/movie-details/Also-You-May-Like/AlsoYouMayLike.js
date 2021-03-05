import React, { Component } from 'react';
import SingleCard from '../../SingleCard/SingleCard';
import SliderComponent from '../../SliderComponent/SliderComponent';

export default class AlsoYouMayLike extends Component {
  constructor(props) {
    super(props);
    this.state = {
      similarMovies: [],
    };
    // this.GET_MOVIE_BY_ID_API_PATH = 'http://localhost:8000/api/movie/';
    this.GET_MOVIE_BY_GENRE_API_PATH =
      'http://localhost:8000/api/home/genre?genre=';
  }
  // async getSimilarMovie() {
    
  //   console.log("Get Similar movies",)
  //    const response = await fetch(this.GET_MOVIE_BY_GENRE_API_PATH + this.props.genre);
  //   const json = await response.json();
  //   console.log('response', await json);
  //   this.setState({ similarMovies: await json.data[0] }); 
  //   console.log(json.data)
  // }
  async getSimilarMovie() {
    console.log("genre",this.props.genre);
    const id = this.props.id;
    const response = await fetch('http://localhost:8000/api/home/genre?genre=Crime');
    const json = await response.json();
    console.log(json,'Jihad');
    //console.log('response Movie Details', await json);
    this.setState({ similarMovies: await json.data.data }, () => {
      console.log('STATE IN MOVIE DETAILS ', this.state);
      // this.getSimilarMovie();
    });
  }

  componentDidMount=()=>{
    this.getSimilarMovie();
   
  }
  // shouldComponentUpdate(nextState, nextProps) {
  //   return true; //nextState.data !== this.state.data;
  // }
  render() {
    return (
      <div>
        <h2> You May Also Like</h2>
        { this.state.similarMovies&&
          <SliderComponent
            openModal={this.props.openModal}
            visuals={this.state.similarMovies} />
        }
      </div>
    );
  }
}
