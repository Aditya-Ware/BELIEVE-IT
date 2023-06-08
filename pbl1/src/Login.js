import React from 'react'
import "./css/login.css"
import { useState } from 'react'
import { auth } from './firebase';
import {useDispatch} from 'react-redux';
import { loginuser } from './features/counter/userSlice';
function Login() {

    const[signup, setSignUp] = useState(false);
    const[name, setName] = useState("");
    const[photoURL, setPhotoUrl] = useState("");
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");

    const dispatch = useDispatch();

    const register = (e)=>{
      e.preventDefault();

      if(!name)
      {
        return alert("Name is Required.")
      }
      if(!photoURL)
      {
        return alert("photoUrl is Required.")
      }
      if(!email)
      {
        return alert("Email is Required.")
      }
      if(!password)
      {
        return alert("Password is Required.")
      }
      auth.createUserWithEmailAndPassword(email, password).then((userAuth)=>{
        userAuth.user.updateProfile({
            displayName:name,
            photoURL:photoURL
        }).then(()=>{
          dispatch(loginuser({
            email:userAuth.user.email,
            uid:userAuth.user.uid,
             photoURL:photoURL,
             displayName:name
          }))
        })
      }).catch(error=>alert(error));

      setName("");
      setPhotoUrl("");
      setEmail("");
      setPassword("");
    }
    const signIn=(e)=>{
        e.preventDefault();
        if(!email)
      {
        return alert("Email is Required.")
      }
      if(!password)
      {
        return alert("Password is Required.")
      }
      auth.signInWithEmailAndPassword(email, password).then(({user})=>{
        dispatch(loginuser({
            email:user.email,
            uid:user.uid,
             photoURL:user.photoURL,
             displayName:user.displayName
          }))
      }).catch(error=>alert(error))
    }
  return (
    <>
    <div className='loginscreen'>
        <img src='https://pbs.twimg.com/media/FtWJQdqWwAAmLV3?format=jpg&name=small'></img>
        {
        signup===true ? (<form onSubmit={register}>
            <input type='text' placeholder='Full Name' value={name} onChange={e=>setName(e.target.value)}/>
            <input type='text' placeholder='Profile Picture' value={photoURL} onChange={e=>setPhotoUrl(e.target.value)}/>
            <input type='email' placeholder='Email' value={email} onChange={e=>setEmail(e.target.value)}/>
            <input type='password' placeholder='Password' value={password} onChange={e=>setPassword(e.target.value)}/>
    
            <input type='submit' value="Sign Up"/>
            <h4>Already a Member ? <span onClick={e=>setSignUp(false)}>Login Here</span></h4>
           </form>) : (<form onSubmit={signIn}>
        <input type='email' placeholder='Email' value={email} onChange={e=>setEmail(e.target.value)}/>
        <input type='password' placeholder='Password' value={password} onChange={e=>setPassword(e.target.value)}/>

        <input type='submit' value="Sign In"/>
        <h4>Not a Member ? <span onClick={e=>setSignUp(true)}>Register Here</span></h4>
       </form>)
        }       
       


       
    </div>
    </>
  )
}

export default Login