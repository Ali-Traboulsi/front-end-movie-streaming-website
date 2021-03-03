import React from 'react';
// import Rating from 'react-rating';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
// import PropTypes from 'prop-types';
import './MovieDataContainer.modules.scss';
import Typography from '@material-ui/core/Typography';
import {Router, Redirect } from 'react-router-dom';

// import { CircularProgressbar } from 'react-circular-progressbar';
// import 'react-circular-progressbar/dist/styles.css';
// import { CircularProgressbarWithChildren } from 'react-circular-progressbar';

import {
    CircularProgressbar,
    buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";


const MovieDataContainer = props => {

    return (
        <div className="movie-details container position-absolute fixed-bottom" id='details-container'>
            {/* ----------- First row ----------- */}
            <div className="row">

                <div className='col-7 display-1' >
                    <h1 className='movie-details-title'>
                        {props.data.movie_title}
                    </h1>
                </div>
            </div>

                {/* ----------- second row ----------- */}

                <div className='row'>

                    <div className='col-1 year'>
                        <p>{props.data.year}</p>
                    </div>

                        <div className='col-3 details-genres'>
                        {props.data.genres.map((val) => {
                                return <span key={val.id} className='list-genre'>{val.genre_in_english}</span>
                        })}
                    </div>

                    <div className='col-2'>
                        <p>{props.data.duration}</p>
                    </div>

                        <div className='col-2 movie-rating'>
                            {/*<Box component="fieldset" mb={3} borderColor="transparent">*/}
                            {/*    <span className='align-items-center'>{props.data.imdb_rating}</span>*/}
                                {/*<Rating name="read-only" defaultValue={props.data.imdb_rating} max={10} readOnly />*/}
                                {/*<Rating readonly={true} stop={props.data.imdb_rating} placeholderRating={props.data.imdb_rating} quiet={true}/>*/}
                                {/*<CircularProgressbar value={props.data.imdb_rating} maxValue={10} text={`${props.data.imdb_rating}`} />*/}
                            <CircularProgressbar
                                value={props.data.imdb_rating}
                                text={`${props.data.imdb_rating}`}
                                maxValue={10}
                                background
                                backgroundPadding={6}
                                styles={buildStyles({
                                    backgroundColor: "#3e98c7",
                                    textColor: "#fff",
                                    pathColor: "#fff",
                                    trailColor: "transparent",
                                    textSize: '30px'
                                })}
                            />
                            {/*</Box>*/}
                        </div>
                </div>


                {/* ----------- Third row ----------- */}
                <div className='row'>

                    <div className='col-8'>
                        <p className='movie_description'>
                            {
                                (props.data.descriptions.description_in_arabic === '')
                                ?
                                    props.data.descriptions.description_in_english
                                :
                                    props.data.descriptions.description_in_arabic
                            }
                        </p>
                    </div>
                </div>
            <div className='row'>
                <div className="col-5">
                    <button
                        type='button'
                        className='watch-now'
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                             className="bi bi-play" viewBox="0 0 16 16">
                            <path
                                d="M10.804 8L5 4.633v6.734L10.804 8zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692z"/>
                        </svg>
                        Watch Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MovieDataContainer;