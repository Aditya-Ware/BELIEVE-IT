import React, { useState } from 'react'
import { Avatar} from '@mui/material';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';
import ArticleIcon from '@mui/icons-material/Article';
import EventIcon from '@mui/icons-material/Event';
import './css/feed.css';
import Post from './Post';
import { db } from './firebase';
import firebase from "firebase"
import { useEffect } from 'react';
import{useSelector} from 'react-redux';
import { selectUser } from './features/counter/userSlice';
import FlipMove from 'react-flip-move';
function Feed() {
    const user = useSelector(selectUser);
    const[posts, setPost] = useState([]);
    const[input, setInput] = useState();
const submitPost=(e)=>{
e.preventDefault();
db.collection("posts").add({
    name:user.displayName,
    description:"Artist",
    message:input,
    photoURL:user.photoURL,
    timestamp:firebase.firestore.FieldValue.serverTimestamp(),
});
setInput("");
}
useEffect(() => {
   db.collection("posts").orderBy("timestamp","desc").onSnapshot(snapshot=>{
      setPost(snapshot.docs.map(doc=>({
           id:doc.id,
           data:doc.data()
   })))
   })
},[])
  return (
    <div className='feed'>
        <div className='feed__input'>
        <div className='feed__form'>   
             <Avatar src={user.photoURL}/>
             <form onSubmit={submitPost}>
                <input type='text' placeholder='Start a Post' value={input} onChange={e=>setInput(e.target.value)}/>
                <input type='submit'/>
             </form>
        </div>
        <div className='feed__options'>
            <div className='option'>
                <AddAPhotoIcon style={{color:'#70b5f9'}}/>
                <span>Photo</span>
            </div>
            <div className='option'>
                <VideoCameraBackIcon style={{color:'03ac13'}}/>
                <span>Video</span>
            </div>
            <div className='option'>
                <EventIcon style={{color:'#e3242b'}}/>
                <span>Event</span>
            </div>
            <div className='option'>
                <ArticleIcon style={{color:'#fce205'}}/>
                <span>Post Article</span>
            </div>
        </div>
        </div>
        <FlipMove>
        {
            posts.map(({id, data : {name, description, message, photoURL}})=>{
                return <Post key={id} name={name} description={description} message={message} photoURL={photoURL}/>
            })
        }   
       </FlipMove> 
        
    </div>
  )
}

export default Feed