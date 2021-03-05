// This file is only concerned with fetching similar movies in the movie page
// and is not finished yer

import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import axios from "axios";

const SimilarMovies = props => {

    // console.log(props.value[0].genre_in_english);
    const URL1 = `http://127.0.0.1:8000/api/visual/search?genre=${props.value[0].genre_in_english}`

    const [similarMovies, setSimilaMovies] = useState({
        similarMovies: [],
        isFetching: true
    });

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                setMovieData({movie: movieData.movie, isFetching: true});
                const response = await axios.get(URL);
                // console.log(response.data.data);
                setMovieData({movie: response.data.data, isFetching: false});
                console.log(response.data.data);
            } catch (e) {
                console.log(e);
                setMovieData({movie: movieData.movie, isFetching: false});
            }
        }
        fetchMovies();
    }, [])


    return (
        <div>
            {/*{props.value.map((val) => {*/}
            {/*    return*/}
            {/*    <div>*/}
            {/*        */}
            {/*    </div>*/}
            {/*})}*/}
        </div>
    );
};

SimilarMovies.propTypes = {
    
};

export default SimilarMovies;