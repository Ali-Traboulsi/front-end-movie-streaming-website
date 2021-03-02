// This file is only concerned with fetching similar movies in the movie page
// and is not finished yer

import React from 'react';
import PropTypes from 'prop-types';

const SimilarMovies = props => {

    console.log(props.value[0]);
    const URL1 = `http://127.0.0.1:8000/api/visual/search?genre=${props.value[0]}`

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