import React from 'react'
import { doc, deleteDoc } from 'firebase/firestore';
import { db } from '../firebase'
import movie from "./MoviesList";

function DeleteMovie() {
    function deleteMovie(id) {
        const movieCollectionRef = doc(db, 'movies', id);
        deleteDoc(movieCollectionRef, id);
    }
    return (
        <button
            type='button'
            onClick={() => {
                deleteMovie(movie.id)
            }}
        >
            Delete
        </button>
    )
}

export default DeleteMovie