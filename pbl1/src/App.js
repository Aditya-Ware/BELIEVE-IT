import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Widget from './Widget';
import Login from "./Login";
import {useSelector} from 'react-redux';
import { loginuser, logoutuser, selectUser } from './features/counter/userSlice';
import { useEffect } from 'react';
import { auth } from './firebase';
import {useDispatch} from 'react-redux';
function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(()=>{
     auth.onAuthStateChanged((userAuth)=>{
      if(userAuth){
        dispatch(loginuser({
          email:userAuth.email,
            uid:userAuth.uid,
             photoURL:userAuth.photoURL,
             displayName:userAuth.displayName
        }))
      }
      else{
        dispatch(logoutuser())
      }
     })
  },  [])
  return (
    <>
    {
      !user ? (<Login/>) : (
        <div className='app_wrapper'>
        <Header/>
        <div className='app_body'>
          <Sidebar/>
          <Feed/>
          <Widget/>
        </div>
    </div>
      )
    }
    </>
  );
}

export default App;
