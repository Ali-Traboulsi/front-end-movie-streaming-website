import React, { Component } from 'react';
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import classes from './detailsContainer.module.css';

export class DetailsContainer extends Component {
  constructor(props){
    super(props);
    console.log('From Details Component:', this.props);
  }
  
  
//NOTE: we will work on the en/ar later
//if u want to tell me something send it on discord
//if u still awake 
  render() {
    let getFilledStars = () => {
      let num = Math.round((5 * this.props.rating) / 11);
      let stars=[];
      for (let i = 0; i < num; i++) {
        stars.push(<StarIcon />);
      }
      return stars;
    };

    let getEmptyStars = () => {
      let num = Math.round((5 * (11 - this.props.rating)) / 11);
      let stars=[];
      for (let i = 0; i < num; i++) {
        stars.push(<StarBorderIcon />);
      }
      return stars;
    };
    
    return (
      <div className={"row "+classes.container}>
        <div className='col-md-3'>
          <img className={classes.poster} src={this.props.imgUrl} alt='' />
        </div>  
        <div className='col-md-9'>
          <h1 className={classes.title}>{this.props.title}</h1>

          <p className={classes.description}>{this.props.description_in_english}</p>

          <div title={this.props.rating}>
            <span className={classes.ratingLabel}>Rating:</span>
           {getFilledStars()}
            {getEmptyStars()}
          </div>

          <div>
            <ul className={classes.movieDetailsList}>
              <li>
                <label>Year:</label>
                {this.props.year}
              </li>

              <li>
                <label>Language:</label>
                {this.props.language}
              </li>

              <li>
                <label>duration:</label>
                {this.props.duration}
              </li>
            </ul>
            {this.props.genre.map((genre) => {
              return (<span className='badge badge-secondary'>
                  {genre.genre_in_english}
                </span>)
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default DetailsContainer;
