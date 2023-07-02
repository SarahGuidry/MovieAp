import React, { useState } from 'react'
import axios from 'axios'

import MovieListItem from './MovieListItem'
import MovieFooter from './MovieFooter'

const MovieSearchModal = (props) => {

    const { query } = props
    const [results, setResults] = useState([])
    const searchForMovie = props.searchForMovie
    
    searchForMovie(query)
    console.log('searching')
    return (
        <div className="col">
            <table className='table table-striped table-hover'>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Director</th>
                        <th>Genre</th>
                        <th>Metascore</th>
                        <th></th>
                    </tr>
                </thead>

                <tbody>
                    {results.map(movie => <MovieListItem key={movie.id} movie={movie} />)}
                </tbody>
            </table>
            <MovieFooter totalMovies={results.length} />
        </div>
    )

    function newFunction() {
        searchForMovie()
    }
}
export default MovieSearchModal