import React, { Component } from 'react';
import YouTubeIcon from '@material-ui/icons/YouTube';
import StarsIcon from '@material-ui/icons/Stars';
import TheatersIcon from '@material-ui/icons/Theaters';
import LiveTvIcon from '@material-ui/icons/LiveTv';
import Classes from './../SingleCard/SingleCard.module.css';
import { Link } from 'react-router-dom';
import TodayIcon from '@material-ui/icons/Today';
import AccessTimeIcon from '@material-ui/icons/AccessTime';

export default class SingleCard extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    
    {
      console.log('PROPS FROM SINGLE CARD', this.props);
    }
    let path = '';
    if (this.props.type == 'movie') {
      path = `/movie/${this.props.id}`;
    }
    if (this.props.type == 'tv show') {
      path = `/tv-show/${this.props.id}`;
    }
    if (this.props.type == 'serie') {
      path = `/series/${this.props.id}`;
    }
 
    return (
      <div className={Classes.card}>
        <Link to='/movie/1'>
          <span className={Classes.typeIcon}>
            {this.props.type === 'movie' ? <TheatersIcon /> : <LiveTvIcon />}
          </span>
          <span
            onClick={() => {
              this.props.openModal(this.props.trailer.split('/')[4]);
            }}
            className={Classes.trailer}
          >
            <YouTubeIcon /> Trailer
          </span>
          <div className={Classes.imageTrailerContainer}>
            <div className={Classes.trailer}></div>
            <img
              className={Classes.Mposter}
              src={this.props.imageUrl}
              alt=''
              style={{ width: '100%' }}
            />
          </div>
        </Link>
        <div className={Classes.visualDetails}>
          <Link to={path}>
            <h1 title={this.props.title}>
              {this.props.title.length > 20
                ? this.props.title.substring(0, 19) + '...'
                : this.props.title}{' '}
            </h1>
          </Link>
          <div className={Classes.details}>
            <span>
              <StarsIcon />
              {this.props.rating}
            </span>
            <span>
              <TodayIcon />
              {this.props.year}
            </span>
            <span>
              <AccessTimeIcon />
              {this.props.duration}
            </span>
          </div>
        </div>
      </div>
    );
  }
}

/**
 * 
        <div className='row'>
    

          <div className='col-sm-4'>
         
            <div>
              <span
                className={Classes.trailer}
                //https://www.youtube.com/embed/cppPd-FBxO0
                onClick={() => {this.props.openModal(this.props.trailer.split("/")[4]) }}
              >
                <YouTubeIcon /> Trailer
              </span>
            </div>
          </div>
        </div>
 */
