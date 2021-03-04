import React, { Component } from 'react';
import SingleCard from '../../SingleCard/SingleCard';
import Slider from 'react-slick';

export default class AlsoYouMayLike extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
    console.log('SliderComponet - props', this.props);
  }
  componentDidMount() {
    let data = this.props.visuals.map((visual) => {
      return (
        <SingleCard
          imageUrl={visual.poster_image_link}
          title={visual.movie_title}
          duration={visual.duration}
          type={visual.type.type_in_english}
          year={visual.year}
          trailer={visual.movie_trailer}
          rating={visual.imdb_rating}
          id={visual.id}
          openModal={this.props.openModal}
        />
      );
    });

    this.setState({ data: data });
  }

  shouldComponentUpdate(nextState, nextProps) {
    return true;//nextState.data !== this.state.data;
  }
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
    };
    return (
      <div>
        <h2> You May Also Like</h2>
        <Slider {...settings}>
          <div>
            <SingleCard />
          </div>
        </Slider>
      </div>
    );
  }
}
