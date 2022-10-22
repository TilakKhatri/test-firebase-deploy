import React, { useEffect, useState } from 'react'
import { db } from "../firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { async } from '@firebase/util';



function Addblog() {
    const [img, setImg] = useState("");
    const [title, setTitle] = useState("");
    const [des, setDes] = useState("");
    const [blog, setBlog] = useState([]);

    useEffect(() => {
        async function fetchBlog() {
            try {
                const docRef = doc(db, 'blogs', 'associates');
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    // console.log(docSnap.data());
                    setBlog(docSnap.data());
                    // setBlog(blogs.map((item) => ({ title: item.title, des: item.description, img: item.image })));
                    // setBlog(Object.keys(docSnap.data()).map(key => ({ title: key.title, image: key.image, des: key.description })))
                }
            }
            catch (err) {
                console.log(err)
            }
        }
        fetchBlog();
    }, [])

    async function handleSubmit() {
        // console.log(title, des)
        setBlog([...blog, {
            image: img,
            title: title, description: des
        }])
        const blogRef = doc(db, 'blogs', 'associates');
        await setDoc(blogRef, {
            blog
        }, { merge: true })

    }
    return (
        <div style={{ margin: "5rem" }}>
            <form onSubmit={handleSubmit}>
                <div>
                    <input
                        type="file"
                        name="img"
                        accept="image/*"
                        onChange={(e) => setImg(e.target.value)}
                    />
                </div>
                <div>
                    <input
                        type='text'
                        name='title'
                        placeholder='Your blog title'
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div>
                    <textarea
                        className='description'
                        rows='10'
                        cols="30"
                        placeholder='Describe '
                        onChange={(e) => setDes(e.target.value)}
                    >

                    </textarea>
                </div>
                <div>
                    <button type='submit'>Publish</button>
                </div>
            </form>
            <div className='data' style={{ marginTop: "2rem" }}>
                <div className='card'>

                    <h2>title</h2>
                    <p>description</p>
                </div>
            </div>
        </div>
    )
}

export default Addblog