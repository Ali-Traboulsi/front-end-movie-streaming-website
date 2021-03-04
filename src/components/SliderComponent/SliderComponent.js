import React, { Component } from 'react';
import Slider from 'react-slick';
import SingleCard from '../SingleCard/SingleCard';
import Classes from "./sliderComponent.module.css";

export default class SliderComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
    console.log("SliderComponet - props", this.props);
  }

  componentDidMount() {
    let data =   this.props.visuals.map((visual) => {
      return <SingleCard
    imageUrl={visual.poster_image_link}
    title={visual.movie_title}
    duration={visual.duration}
    type={visual.type.type_in_english}
    year={visual.year}
    trailer={visual.movie_trailer}
    rating={visual.imdb_rating}
    id={visual.id}
    openModal={this.props.openModal}
    />;
    })
      
    this.setState({data:data});
  }

  shouldComponentUpdate(nextState,nextProps) {
    return true;//nextState.data !== this.state.data;
}

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1,
    };

   
    return (
      <div>
        <h1 className={Classes.genre}>{this.props.genre}</h1>
        <hr className={ Classes.horizontalLine}/>
        <Slider className={Classes.slider} {...settings}>
          {this.state.data}
        </Slider> 
      </div>
    );
  }
}

