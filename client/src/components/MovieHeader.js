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
            <div className="col-lg-2">
                <input type='text' onChange={handleChange} placeholder='Search for Movie' />
                <Link to={`/movies/search/t='${query}'`} className='btn btn-danger'>
                    Search                </Link>
            </div>
            <div className="col-lg-3">
                <Link to="/movies/add/" className="btn btn-success">
                    <i className="material-icons">&#xE147;</i> <span>Add New Movie Manually</span></Link>
                <Link to="/movies" className="btn btn-primary"> View All Movies </Link>
            </div> </div> 
             </div>);
}

export default MovieHeader;
/*class BodyData extends React.Component {
  state = {
    query: "",
    data: [],
    filteredData: []
  };

  handleInputChange = event => {
    const query = event.target.value;

    this.setState(prevState => {
      const filteredData = prevState.data.filter(element => {
        return element.name.toLowerCase().includes(query.toLowerCase());
      });

      return {
        query,
        filteredData
      };
    });
  };

  getData = () => {
    fetch(`http://localhost:4000/restaurants`)
      .then(response => response.json())
      .then(data => {
        const { query } = this.state;
        const filteredData = data.filter(element => {
          return element.name.toLowerCase().includes(query.toLowerCase());
        });

        this.setState({
          data,
          filteredData
        });
      });
  };

  componentWillMount() {
    this.getData();
  }

  render() {
    return (
      <div className="searchForm">
        <form>
          <input
            placeholder="Search for..."
            value={this.state.query}
            onChange={this.handleInputChange}
          />
        </form>
        <div>{this.state.filteredData.map(i => <p>{i.name}</p>)}</div>
      </div>
    );
  }
}*/