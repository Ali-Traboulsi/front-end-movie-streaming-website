import React, { Component } from 'react';
import Slider from 'react-slick';
import SingleCard from '../SingleCard/SingleCard';
import Classes from "./sliderComponent.module.css";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
export default class SliderComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
    console.log("SliderComponet - props", this.props);
  }

  componentDidMount() {
    let data = this.props.visuals.map((visual) => {
      return (
          <li>
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
          </li>
      );
    });

    this.setState({ data: data });
  }

  shouldComponentUpdate(nextState,nextProps) {
    return true;//nextState.data !== this.state.data;
}

  render() {

    let settings = {
      infinite: false,
      speed: 1000,
      arrows: true,
      slidesToShow: 5,
      slidesToScroll: 4,
  
      responsive: [
        {
          breakpoint: 960,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 2,
          },
        },
      ],
    };
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};
    return (
      <div>
        <h1 className={Classes.genre}>{this.props.genre}</h1>
        <hr className={Classes.horizontalLine} />
        <Slider {...settings}>
        {console.log("DATa",this.state.data)}
        </Slider>
        
        <Carousel
          swipeable={false}
          draggable={false}
          showDots={true}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          autoPlay={this.props.deviceType !== 'mobile' ? true : false}
          autoPlaySpeed={1000}
          keyBoardControl={true}
          customTransition='all .5'
          transitionDuration={500}
          containerClass='carousel-container'
          removeArrowOnDeviceType={['tablet', 'mobile']}
          deviceType={this.props.deviceType}
          dotListClass='custom-dot-list-style'
          itemClass="carousel-item"
        >
          {this.state.data}
        </Carousel>
      </div>
    );
  }
}




