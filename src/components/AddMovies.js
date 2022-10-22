import React, { useState } from 'react'
import { collection, addDoc } from 'firebase/firestore'
import { db } from '../firebase'

function AddMovies() {
    const [name, setName] = useState("");
    const [actor, setActor] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        const movieCollectionRef = collection(db, 'movies');
        addDoc(movieCollectionRef, {
            name, actor
        }).then((res) => {
            console.log(res.docs)
        }).catch(err => console.log(err.code))
    }

    return (
        <div style={{ margin: "4rem", }}>
            <h1>Add movies Here</h1>
            <form onSubmit={handleSubmit}>
                <div style={{ margin: "2rem", }}>
                    <input
                        type='text'
                        name='name'
                        placeholder='Movie name'
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div style={{ margin: "2rem", }}>
                    <input
                        type='text'
                        name='actor'
                        placeholder='Main actor'
                        onChange={(e) => setActor(e.target.value)}
                    />
                </div>
                <div style={{ margin: "2rem", }}>
                    <button
                        type='submit'
                    >Add Movie</button>
                </div>
            </form>

        </div>
    )
}

export default AddMovies