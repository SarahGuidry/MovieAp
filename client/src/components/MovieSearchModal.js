import React, { useState, useEffect } from 'react'
import axios from 'axios'

//import MovieListItem from './MovieListItem'
import MovieFooter from './MovieFooter'

const MovieSearchModal = (props) => {

    const [results,setResults] = useState([])
    
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
                    {results.map(result =>{result.title} )}
                </tbody>
            </table>
            <MovieFooter totalMovies={results.length} />
        </div>
    )

}
export default MovieSearchModal