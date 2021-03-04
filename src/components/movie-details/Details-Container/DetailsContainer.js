import React, { Component } from 'react';
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import classes from './detailsContainer.module.css';

export class DetailsContainer extends Component {
  constructor(props){
    super(props);
  }
//NOTE: we will work on the en/ar later
//if u want to tell me something send it on discord
//if u still awake 
  render() {
    getFilledStars=()=>{
      let num = Math.round(5*this.props.rating/11);
      let stars;
      for(let i = 0 ; i <num ; i++){
          stars += <StarIcon/> 
      }
      return stars
    }

    getEmptyStars=()=>{
      let num = Math.round(5*(11-this.props.rating)/11);
      for(let i = 0 ; i <num ; i++){
        stars += <StarIcon/> 
    }
    return stars
    }


    return (
      <div className="row">
         <div className="col-md-3">
              <img src={this.props.imgUrl} alt=""/>
         </div>
         <div className="col-md-9">
            <h1>{this.props.title}</h1>
           
            <p>{this.props.description_in_english}</p>
           
            <div>
              <span>Rating:</span>
              {getFilledStars()}{getEmptyStars()}
            </div>

            <div>
              year - language - duration - genres 

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

              {
                this.props.genres.forEach(genre => {
                  return <span className="badge badge-secondary">{genre.genre_in_english}</span> 
                })
              }
            </div>

         </div>
      </div>
    );
  }
}

export default DetailsContainer;
