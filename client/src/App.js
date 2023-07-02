import React, { useEffect, useState } from "react";
import axios from 'axios'
import { Route, Switch, Redirect, useHistory } from "react-router-dom";
import MovieList from './components/MovieList';
import Movie from './components/Movie';
import MovieHeader from './components/MovieHeader';
import ManuallyAddMovieForm from './components/ManuallyAddMovieForm';
import EditMovieForm from './components/EditMovieForm';
import DeleteMovieModal from "./components/DeleteMovieModal";
import MovieSearchModal from "./components/MovieSearchModal";
import VerifyAddTypeModal from './components/VerifyAddTypeModal.js'


const App = () => {
  const [movies, setMovies] = useState([]);
  const { push } = useHistory();
  const [results, setResults] = useState([])

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios.get('http://localhost:5000/api/movies')
      .then(res => {
        setMovies(res.data);
      })
      .catch(err => {
        console.log(err);
      })
  }

  const deleteMovie = (id) => {
    console.log(`attempting delete movie action for ${id}`)
    axios.delete(`http://localhost:5000/api/movies/${id}`)
      .then(() => {
        console.log('delete movie complete')
        getData();
        push('/movies')

      });
  }

  async function searchForMovie(query) {
    await axios.get(`http://www.omdbapi.com/&t=${query}&apikey=[37db357b]`)
        .then(resp => {
            setResults(...results, resp.data)
            console.log('the results should be next:')
            console.log(resp.data)
        })
}


  return (
    <div>
      <nav className="navbar navbar-dark bg-dark">
        <span className="navbar-brand" ><img width="40px" alt="" src="./Lambda-Logo-Red.png" /> HTTP / CRUD PROJECT *** SARAH GUIDRY</span>
      </nav>

      <div className="container">

        <MovieHeader />
      <div className="row ">
          <Switch>
            <Route path="/movies/edit/:id">
              <EditMovieForm setMovies={setMovies} />
            </Route>
            <Route path="/movies/addType" component={VerifyAddTypeModal}/>

            <Route path="/movies/add" component={ManuallyAddMovieForm}>
              <ManuallyAddMovieForm setMovies={setMovies}/>
            </Route>

            <Route path="/movies/delete/:id">
              <DeleteMovieModal setMovies={setMovies} deleteMovie={deleteMovie} />
            </Route>

            <Route path="/movies/:id">
              <Movie movie={Movie} />
            </Route>

            <Route path="/movies/search/:query">
              <MovieSearchModal movieList={MovieList} searchForMovie={searchForMovie} />
            </Route>

            <Route path='/movies/search'>
            
            </Route>
            <Route path="/movies">
              <MovieList movies={movies} />
            </Route>

            <Route path="/">
              <Redirect to="/movies" />
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;