import React, { useState } from 'react'
import { updateDoc, doc } from 'firebase/firestore'
import { db } from '../firebase'


function EditMovie() {
    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [actor, setActor] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        const docRef = doc(db, 'movies', id);
        updateDoc(docRef, {
            name,
            actor
        }).then((res) => console.log(res)).catch((err) => console.log(err.message))

    }

    return (
        <div style={{ margin: "4rem", }}>
            <h1>Edit movies Here</h1>
            <form onSubmit={handleSubmit}>
                <div style={{ margin: "2rem", }}>
                    <input
                        type='text'
                        name='id'
                        placeholder='Movie id'
                        onChange={(e) => setId(e.target.value)}
                    />
                </div>
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
                    >Update Movie</button>
                </div>
            </form>

        </div>
    )
}

export default EditMovie