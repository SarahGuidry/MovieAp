import React, { useEffect, useState } from "react";
import axios from 'axios'
import { Route, Switch, Redirect, useHistory } from "react-router-dom";
import MovieList from './components/MovieList';
import Movie from './components/Movie';
import MovieHeader from './components/MovieHeader';
import ManuallyAddMovieForm from './components/ManuallyAddMovieForm';
import EditMovieForm from './components/EditMovieForm';
import VerifyAddTypeModal from './components/VerifyAddTypeModal.js'

const App = () => {
  const [movies, setMovies] = useState([]);
  const {push} = useHistory();
  
  useEffect(()=>{
    getData();
  }, []);

  const getData =() =>{
    axios.get('http://localhost:5000/api/movies')
      .then(res =>{
        setMovies(res.data);
      })
      .catch(err =>{
        console.log(err);
      })
  }

  const deleteMovie = (id)=> {
    axios.delete(`http://localhost:5000/api/movies/${id}`)
      .then(() =>{
          getData();
          push('/movies')
      });
    }

  
    

  return (
    <div>
      <nav className="navbar navbar-dark bg-dark">
        <span className="navbar-brand" ><img width="40px" alt="" src="./Lambda-Logo-Red.png"/> HTTP / CRUD PROJECT *** SARAH GUIDRY</span>
      </nav>
    
      <div className="container">
        <MovieHeader/>
      
        
        <div className="row ">
              
          <Switch>
            <Route path="/movies/edit/:id">
              <EditMovieForm setMovies={setMovies}/>
            </Route>

            <Route path="/movies/addType" component={VerifyAddTypeModal}/>

            <Route path="/movies/add" component={ManuallyAddMovieForm}>
              <ManuallyAddMovieForm setMovies={setMovies}/>
            </Route>
            
            <Route path="/movies/:id">
              <Movie deleteMovie={deleteMovie} movie={Movie}/>
            </Route>

            <Route path="/movies/:id">
              <Movie movie={Movie}/>
            </Route>

            <Route path='/movies/search'>
            
            </Route>
            <Route path="/movies">
              <MovieList movies={movies}/>
            </Route>
            
            <Route path="/">
              <Redirect to="/movies"/>
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  );
  }

export default App;