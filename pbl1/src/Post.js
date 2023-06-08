import { Avatar } from '@mui/material'
import React from 'react'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import CommentIcon from '@mui/icons-material/Comment';
import ShareIcon from '@mui/icons-material/Share';
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import "./css/post.css";
import { forwardRef } from 'react';
const Post = forwardRef(({name, description, message, photoURL}, ref) => {
  return (
    <div className='posts' ref={ref}>
        <div className='post__header'>
            <div className='post__headerleft'>
               <Avatar src={photoURL}/>
               <div className='post_profile_details'>
                <h3>{name}</h3>
                <p>{description}</p>
               </div>
            </div>
            <div className='post__headerright'>

            </div>
            <MoreHorizIcon/>
        </div>
        <div className='post__body'>
          <p>{message}</p>
        </div>
        <div className='post__footer'>
          <div className='post__footer__options'>
                <ThumbUpIcon/>
                <span>Like</span>
          </div>
          <div className='post__footer__options'>
                <CommentIcon/>
                <span>Comment</span>
          </div>
          <div className='post__footer__options'>
                <ShareIcon/>
                <span>Share</span>
          </div>
          <div className='post__footer__options'>
                <BookmarkAddIcon/>
                <span>Save</span>
          </div>
        </div>
    </div>
  )})

export default Post