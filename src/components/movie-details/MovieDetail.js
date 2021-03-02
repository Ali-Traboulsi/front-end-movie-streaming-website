// This file is only concerned with fetching similar movies in the movie page
// and is not finished yer

import React, {useState, useEffect} from 'react';
import axios from "axios";
import Hero from "../home/hero-section/hero";
import Footer from "../home/footer/footer";
import SimilarMovies from "./similar-movies/SimilarMovies";

const URL = 'http://127.0.0.1:8000/api/visual/genres/1';

const MovieDetail = () => {

    const [movieData, setMovieData] = useState({
        movie: [],
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
        <>
            {(movieData.length != 0)
                ?
                <>
                    <SimilarMovies
                        value={movieData.movie}
                        isFetching={movieData.isFetching}
                    />

                </>
                :
                null}
        </>
    );
}

export default MovieDetail;