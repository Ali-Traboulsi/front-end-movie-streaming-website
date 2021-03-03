import React, { Component } from 'react';
import DetailsContainer from './../Details-Container/DetailsContainer';
import EnbeddedVideo from './../Embedde-video/EnbeddedVideo';
import AboutMovie from '../About-Movie/AboutMovie';
import SliderCarousel from './../You-May-Also-Like/SliderCarousel';
import ModalVideo from 'react-modal-video'
export class MoviDetails extends Component {
  state = {
    visuals: [],
  };
  async componentDidMount() {
    /* fetch all */

    const url = 'http://localhost:8000/api/visuals/2';
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
    const result = await response.json();
    this.setState({ visuals: result[0] });
    // console.log(result[0]);
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
          <DetailsContainer data={this.state.visuals} />
        </div>

        <EnbeddedVideo />

        <div className='container'>
          <AboutMovie />
          <SliderCarousel
          openModal={this.openModal}
          visuals={this.getDataByGenre("drama")}
        genre='Drama' />
        </div>
      </>
    );
  }
}
// visuals={this.state.visuals}

export default MoviDetails;
