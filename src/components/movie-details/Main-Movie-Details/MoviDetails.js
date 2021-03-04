import React, { Component } from 'react';
import DetailsContainer from '../Details-Container/DetailsContainer';
import EnbeddedVideo from '../Embedde-video/EnbeddedVideo';
import AlsoYouMayLike from '../Also-You-May-Like/AlsoYouMayLike';
import AboutMovie from './../About-Movie/AboutMovie';
import ModalVideo from 'react-modal-video';
export default class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      data: {},
      similarMovies: [],
      videoId: '',
    };
    this.GET_MOVIE_BY_GENRE_API_PATH = 'http://localhost:8000/api/visuals/genre?genre=';
    this.GET_MOVIE_BY_ID_API_PATH = 'http://localhost:8000/api/movie/';
    this.openModal = this.openModal.bind(this);
  }
  //this.props.location.pathname
  //this.props.location
  //window.location.href

  openModal(id) {
    this.setState({ videoId: id, isOpen: true }, (state) => {
      console.log('State', this.state);
    });
  }

  async getData() {
    let id = this.props.id;
    const response = await fetch(this.GET_MOVIE_BY_ID_API_PATH + id);
    const json = await response.json();
    console.log('response Movie Details', await json);
    this.setState({ data: await json[0] }, () => {
      console.log('STATE IN MOVIEDETAILS ', this.state);
    });
  }

  async getSimilarMovie() {
    const response = await fetch(this.GET_MOVIE_BY_GENRE_API_PATH + this.state.data.genre[0].genre_in_english);
    const json = await response.json();
    console.log('response', await json);
    this.setState({ similarMovies: await json.data.data });
  }

  componentDidMount() {
    this.getData();
    this.getSimilarMovie();
    console.log('From Didmount in Movie Details', window.location.href);
  }

  shouldComponentUpdate(nextState, nextProps) {
    return true;
    //nextState.visuals !== this.state.visuals || nextState.isOpen !== this.state.isOpen;
  }

  render() {
    return (
      <>
        <ModalVideo
          channel='youtube'
          isOpen={this.state.isOpen}
          videoId={this.state.videoId}
          onClose={() => this.setState({ isOpen: false })}
        />
        <div className='container'>
          <DetailsContainer
            imgUrl={this.state.data.poster_image_link}
            title={this.state.data.movie_title}
            description_in_english={this.state.data.description_in_english}
            description_in_arabic={this.state.data.description_in_arabic}
            duration={this.state.data.duration}
            genre={this.state.data.genre}
            year={this.state.data.year}
            rating={this.state.data.rating}
          />
        </div>
        <ReactHlsPlayer
          url='https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8'
          /*  url={this.state.data.link} */
          autoplay={false}
          controls={true}
          width="100%"
          height="auto"
        />

        <div className='container'>
          <AboutMovie
            title={this.state.data.movie_title}
            imgUrl={this.state.data.poster_image_link}
            description_in_english={this.state.data.description_in_english}
            description_in_arabic={this.state.data.description_in_arabic}
          />
          <AlsoYouMayLike
            openModal={this.openModal}
            visuals={this.state.similarMovies}
            genre='Drama'
          />
        </div>
      </>
    );
  }
}
// visuals={this.state.visuals}

/**
 *

 */
