import React from 'react'
import"./css/sidebar.css";
import {Avatar} from '@mui/material';
import { selectUser } from './features/counter/userSlice';
import{useSelector} from 'react-redux';
function Sidebar() {
  const user = useSelector(selectUser);
  return (
    <div className='sidebar'>
        <div className='sidebar__profile'>
           <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShIKSt24bJXIODL1cSnZigpGpxwfjguxk-Rg&usqp=CAU'></img>
            <div className='profile__details'>
                   <Avatar src={user.photoURL}/>
                   <h4>{user.displayName}</h4>
                    <p>Artist</p>
            </div>
            <div className='profile__stats'>
              <span>Profile Views</span>
              <span className='stat__number'>18</span>
            </div>
            <div className='profile__stats'>
              <span>Connection<br/><b>Grow Your Network</b></span>
              <span className='stat__number'>150</span>
            </div>
        </div>
        <div className='sidebar__recent'>
          <p>Recent</p>
          <p className='hash'><span>#</span>Events</p>
          <p className='hash'><span>#</span>Organization</p>
          <p className='hash'><span>#</span>Theatre</p>
          <p className='hash'><span>#</span>Musical Events</p>
          <p className='hash'><span>#</span>Artists</p>
          <p className='hash'><span>#</span>Other</p>
        </div>
    </div>
  )
}

export default Sidebar