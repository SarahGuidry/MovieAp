import axios from 'axios';
import React, { useEffect, useState } from "react";
import { Redirect, Route, Switch, useHistory } from "react-router-dom";

//Components:
import DeleteMovieModal from "./components/DeleteMovieModal";
import EditMovieForm from './components/EditMovieForm';
import ManuallyAddMovieForm from './components/ManuallyAddMovieForm';
import Movie from './components/Movie';
import MovieHeader from './components/MovieHeader';
import MovieList from './components/MovieList';
import MovieSearchModal from "./components/MovieSearchModal";
import VerifyAddTypeModal from './components/VerifyAddTypeModal.js';


const App = () => {
  const [movies, setMovies] = useState([]);
  const { push } = useHistory();
  //const [results, setResults] = useState([])

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
  console.log(`${movies.map(movie => { movie.name })}`)


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
            <Route path="/movies/addType" component={VerifyAddTypeModal} />

            <Route path="/movies/add" component={ManuallyAddMovieForm}>
              <ManuallyAddMovieForm setMovies={setMovies} />
            </Route>

            <Route path="/movies/delete/:id">
              <DeleteMovieModal setMovies={setMovies} deleteMovie={deleteMovie} />
            </Route>

            <Route path="/movies/:id">
              <Movie movie={Movie} />
            </Route>

            <Route path="/movies/search/">
              <MovieSearchModal />
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