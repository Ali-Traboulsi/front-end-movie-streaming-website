import React, { Component } from 'react';
import Slider from 'react-slick';
import Classes from './../MovieDramaSlider/movieSlider.module.css';
export class MovieHorrorSlider extends Component {
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
        <br />
        <br />
        <h4 className={Classes.title}>Horror</h4>
        <hr></hr>
        <Slider {...settings}>
          <div>
            <div className={Classes.card}>
              <img
                src='/w3images/jeans3.jpg'
                alt='Des'
                style={{ width: '100%' }}
              />
              <a href=''>
                <h1>Tailored Jeans</h1>
              </a>
              <p>
                <button>Trailer</button>
              </p>
            </div>
          </div>
          <div>
            <div className={Classes.card}>
              <img
                src='/w3images/jeans3.jpg'
                alt='Des'
                style={{ width: '100%' }}
              />
              <a href=''>
                <h1>Tailored Jeans</h1>
              </a>
              <p>
                <button>Trailer</button>
              </p>
            </div>
          </div>
          <div>
            <div className={Classes.card}>
              <img
                src='/w3images/jeans3.jpg'
                alt='Des'
                style={{ width: '100%' }}
              />
              <a href=''>
                <h1>Tailored Jeans</h1>
              </a>
              <p>
                <button>Trailer</button>
              </p>
            </div>
          </div>
          <div>
            <div className={Classes.card}>
              <img
                src='/w3images/jeans3.jpg'
                alt='Des'
                style={{ width: '100%' }}
              />
              <a href=''>
                <h1>Tailored Jeans</h1>
              </a>
              <p>
                <button>Trailer</button>
              </p>
            </div>
          </div>
          <div>
            <div className={Classes.card}>
              <img
                src='/w3images/jeans3.jpg'
                alt='Des'
                style={{ width: '100%' }}
              />
              <a href=''>
                <h1>Tailored Jeans</h1>
              </a>
              <p>
                <button>Trailer</button>
              </p>
            </div>
          </div>
          <div>
            <div className={Classes.card}>
              <img
                src='/w3images/jeans3.jpg'
                alt='Des'
                style={{ width: '100%' }}
              />
              <a href=''>
                <h1>Tailored Jeans</h1>
              </a>
              <p>
                <button>Trailer</button>
              </p>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}

export default MovieHorrorSlider;
