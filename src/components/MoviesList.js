import React, { useEffect, useState } from 'react'
import { collection, getDocs, updateDoc, deleteDoc, doc } from 'firebase/firestore'
import { db } from '../firebase'



function MoviesList() {
    const [movies, setMovies] = useState([]);// initially empty array

    useEffect(() => {
        getMovies();
    }, [])

    function getMovies() {
        const movieCollectionRef = collection(db, 'movies')
        getDocs(movieCollectionRef)
            .then(res => {
                const movieArray = res.docs.map(item => ({
                    data: item.data(),
                    id: item.id,
                }))
                setMovies(movieArray)
            })
            .catch(err => console.log(err.code))
    }
    // function call for update movie or edit
    function editMovie(id) {

    }

    // function call for Remove movie
    function removeMovie(id) {
        const docRef = doc(db, 'movies', id);
        deleteDoc(docRef)
            .then((res) => {
                alert('sucessfully delted');
            })
            .catch((err) => {
                console.log(err.code)
            })
    }
    return (
        <div style={{ margin: "4rem", background: "red", padding: "2rem", borderRadius: "12px" }}>

            {movies.map((movie) => {
                return (
                    <div key={movie.id} style={{ margin: ".5rem", background: "green", padding: ".8rem", borderRadius: "12px" }}>
                        <h1>{movie.data.name}</h1>
                        <p>{movie.data.actor}</p>
                        <div >
                            <i
                                className="fa-solid fa-pen-to-square"
                                style={{ cursor: "pointer", color: "blue" }}
                                onClick={() => {
                                    editMovie(movie.id)
                                }}

                            ></i>
                            <i
                                className="fa-solid fa-trash-can"
                                style={{ marginLeft: "2rem", cursor: "pointer", color: "red" }}
                                onClick={() => {
                                    removeMovie(movie.id)
                                }}
                            ></i>
                        </div>
                    </div>
                )
            })}

        </div>
    )
}

export default MoviesList