import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Hero from './hero-section/hero';
import Footer from "./footer/footer";

const URL = 'http://127.0.0.1:8000/api/visual';

const Home = () => {

    const [data, setData] = useState({
        movies: [],
        isFetching: true
    });

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                setData({movies: data.movies, isFetching: true});
                const response = await axios.get(URL);
                console.log(response);
                setData({movies: response.data.visuals.data, isFetching: false});
                console.log(response.data.visuals.data);
            } catch (e) {
                console.log(e);
                setData({movies: data.movies, isFetching: false});
            }
        }
        fetchMovies();
    }, [])


    return (
        <>
            {(data.movies.length != 0)
                ?
                <>
                    <Hero
                        value={data.movies}
                        isFetching={data.isFetching}
                    />

                    <Footer/>

                </>
                :
                null}
        </>

    );
};

export default Home;