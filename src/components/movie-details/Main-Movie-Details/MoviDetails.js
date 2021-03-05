import React, { Component } from 'react';
import DetailsContainer from '../Details-Container/DetailsContainer';
import AlsoYouMayLike from '../Also-You-May-Like/AlsoYouMayLike';
import AboutMovie from './../About-Movie/AboutMovie';
import ReactHlsPlayer from 'react-hls-player';

import ModalVideo from 'react-modal-video';
export default class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      data: {},
      videoId: '',
    }
  
    this.GET_MOVIE_BY_ID_API_PATH = 'http://localhost:8000/api/movie/';
    // this.GET_MOVIE_BY_ID_API_PATH = 'http://localhost:8000/api/movie/';
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
    console.log("id",this.props.match.params.id);
    const id = this.props.match.params.id;
    const response = await fetch(this.GET_MOVIE_BY_ID_API_PATH +id);
    const json = await response.json();
    console.log(json);
    console.log('response Movie Details', await json);
    this.setState({ data: await json.data[0]}, () => {
      console.log('STATE IN MOVIE DETAILS ', this.state);
      // this.getSimilarMovie();
    });
  }
// 
  // async getSimilarMovie() {
  //   const genre = this.state.data.genre[0].genre_in_english;
  //   console.log("Get Similar movies",)
  //    const response = await fetch(this.GET_MOVIE_BY_GENRE_API_PATH + genre);
  //   const json = await response.json();
  //   console.log('response', await json);
  //   this.setState({ similarMovies: await json.data.data }); 
  // }

  componentDidMount() {
    console.log('From Didmount in Movie Details', window.location.href);
    this.getData();
  }

  shouldComponentUpdate(nextState, nextProps) {
    return true;//nextState.visuals !== this.state.visuals || nextState.isOpen !== this.state.isOpen || this.state.data != nextState.data;
  }

  renderPage = () => {
    return (
      <>
      <ModalVideo
      channel='youtube'
      isOpen={this.state.isOpen}
      videoId={this.state.videoId}
      onClose={() => this.setState({ isOpen: false })}
    />
      <div className='container'>
    <ReactHlsPlayer
      url='https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8'
      /*  url={this.state.data.link} */
      autoplay={false}
      controls={true}
      width='100%'
      height='auto'
    />
      <DetailsContainer
        imgUrl={this.state.data.poster_image_link}
        title={this.state.data.movie_title}
            type_in_english={ this.state.data.types.type_in_english}
            type_in_arabic={ this.state.data.types.type_in_arabic}
        description_in_english={this.state.data.visual_description[0].description_in_english}
        description_in_arabic={this.state.data.visual_description[0].description_in_arabic}
        duration={this.state.data.duration}
        genre={this.state.data.genre}
        year={this.state.data.year}
        rating={this.state.data.imdb_rating}
          />
     
    </div>
  

    <div className='container'>
      <AlsoYouMayLike
            openModal={this.openModal}
            genre={this.state.data.genre[0].genre_in_english}
           
          />
          
      
    </div>
    </>
    );
  }
  render() {
    return (
      <>
        {(this.state.data.movie_title)?this.renderPage():<h1>Loading...</h1>}
      </>
    );
  }
}
// visuals={this.state.visuals}

/**
 *{
 id: 2,
        movie_title: 'old',
        duration: '01:45:00',
        language_id: 2,
        movie_trailer: 'https://www.youtube.com/embed/kcIr_qq15CY',
        year: '2021',
        imdb_rating: 5.4,
        type_id: 3,
        poster_image_link:
          'https://www.washingtonpost.com/graphics/2019/entertainment/oscar-nominees-movie-poster-design/img/black-panther-web.jpg',
        slug: 'hd',
        created_at: null,
        updated_at: null,
        type: {
          id: 3,
          type_in_english: 'Movie',
          type_in_arabic: 'فيلم',
        },
        genre: [
          {
            id: 1,
            genre_in_arabic: 'romance',
            genre_in_english: 'romance',
            pivot: {
              vidsual_id: 2,
              genre_id: 1,
            },
          },
        ],
        visual_description: [],
      },
      similarMovies: [
        {
          id: 2,
          movie_title: 'old',
          duration: '01:45:00',
          language_id: 2,
          movie_trailer: 'https://www.youtube.com/embed/kcIr_qq15CY',
          year: '2021',
          imdb_rating: 5.4,
          type_id: 3,
          poster_image_link:
            'https://www.washingtonpost.com/graphics/2019/entertainment/oscar-nominees-movie-poster-design/img/black-panther-web.jpg',
          slug: 'hd',
          created_at: null,
          updated_at: null,
          type: {
            id: 3,
            type_in_english: 'Movie',
            type_in_arabic: 'فيلم',
          },
          genre: [
            {
              id: 1,
              genre_in_arabic: 'romance',
              genre_in_english: 'romance',
              pivot: {
                vidsual_id: 2,
                genre_id: 1,
              },
            },
          ],
          visual_description: [],
        },
      ],
 */
