import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import MovieSearchModal from './MovieSearchModal';

const MovieHeader = () => {
    const [query, setQuery] = useState('')
    const handleChange = e => {
        setQuery(e.target.value)
        console.log('updating search box'+ e.target.value)
    }

    return (<div className="table-title">
        <div className="row">
            <div className="col-sm-6">
                <h2>IMDB Movie Database</h2>
            </div>
            <div className="col-sm-2">
                <input type='text' onChange={handleChange} placeholder='Search for Movie' />
                <Link to={`/movies/search/t='${query}'`} className='btn btn-danger'>
                    Search                
				</Link>
                <Link to="/movies/addType/" className="btn btn-success">
                    <i className="material-icons">&#xE147;</i> <span>Add New Movie</span>
				</Link>
                <Link to="/movies" className="btn btn-primary"> View All Movies </Link>
            </div>
		</div> 
	</div>);
}

export default MovieHeader;

