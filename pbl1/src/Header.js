import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import "./css/header.css";
import Headeroptions from './Headeroptions';
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import MessageIcon from '@mui/icons-material/Message';
import { Avatar} from '@mui/material';
import{useSelector} from 'react-redux';
import { selectUser } from './features/counter/userSlice';
function Header(){
  const user = useSelector(selectUser)
  return (
    <div className='header'>
        <div className='header_left'>
             <div className='header_logo'>
               <img src='https://pbs.twimg.com/media/FtWJQdqWwAAmLV3?format=jpg&name=small'></img>
             </div>
             <div className='header_search'>
                 <SearchIcon/>
                 <input type='text' placeholder='Search'></input>
             </div>
        </div>
        <div className='header_right'>
           <Headeroptions Icon={HomeIcon} title="My Home"/>
           <Headeroptions Icon={PeopleIcon} title="Connect"/>
           <Headeroptions Icon={BusinessCenterIcon} title="Event Hub"/>
           <Headeroptions Icon={MessageIcon} title="Messages"/>
           <Headeroptions Icon={NotificationsActiveIcon} title="Alert"/>
           <Headeroptions avatar={Avatar} title={user.displayName}/>
        </div>
    </div>
  )
}

export default Header