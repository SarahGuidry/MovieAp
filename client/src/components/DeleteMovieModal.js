import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom'
import axios from 'axios'

const DeleteMovieModal = (props) => {
    const deleteMovie = props.deleteMovie
    const { id } = useParams()
    const { push } = useHistory()
    const [movie, setMovie] = useState({
        title: "",
        director: "",
        genre: "",
        metascore: 0,
        description: ""
    })

    useEffect(() => {
        axios.get(`http://localhost:5000/api/movies/${id}`)
            .then(({ data }) => setMovie(data))
    }, [id])

    const redirectToMovieList = () => {
        let path = `/movies`
        push(path)
    }

    const confirmDelete = () => {
        console.log(`movie about to be deleted: ${id} ${movie.name}`)
        deleteMovie(`${id}`)
        redirectToMovieList()
    }

    return (<div id="deleteMovieModal">
        <div className="modal-dialog">
            <div className="modal-content">
                <form>
                    <div className="modal-header">
                        <h4 className="modal-title">Delete Movie</h4>
                        <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                    </div>
                    <div className="modal-body">
                        <p>Are you sure you want to delete these records?</p>
                        <p className="text-warning"><small>This action cannot be undone.</small></p>
                    </div>
                    <div className="modal-footer">
                        <input type="button" className="btn btn-default" data-dismiss="modal" value="Cancel" onClick={redirectToMovieList} />
                        <input type="submit" className="btn btn-danger" onClick={confirmDelete} value="Delete" />                    </div>
                </form>
            </div>
        </div>
    </div>)
}

export default DeleteMovieModal;
