import React from 'react'
import "./css/widget.css";
import InfoIcon from '@mui/icons-material/Info';
function Widget() {
  return (
    <div className='widget'>
        <div className='widget_top'>
            <div className='widget__header'>
                <h4>Updates</h4>
                <InfoIcon/>
            </div>
            <div className='widget__body'>
                <ul className='widget__options'>
                    <li>
                        <h4>Singing Audition in National Centre Performing Arts, New Delhi</h4>
                        <p>2d ago * 455 readers</p>
                    </li>
                    <li>
                        <h4>LTG auditorium to hold Dance audition</h4>
                        <p>2d ago * 645 readers</p>
                    </li>
                    <li>
                        <h4>Pattern of Intensity providing opportunity to showcase their art pieces</h4>
                        <p>3d ago * 1596 readers</p>
                    </li>
                    <li>
                        <h4>Many upcoming cultural events on borivali; Contact:-xxxxx79640</h4>
                        <p>3d ago * 578 readers</p>
                    </li>
                    <li>
                        <h4>Recruitment of Tatoo artists in Nikko Hurtado</h4>
                        <p>4d ago * 784 readers</p>
                     </li>                                      
                </ul>
            </div>
        </div>
        <div className='widget_bottom'>
            <div className='widget__header'>
                <h4>Upcoming Events</h4>
                <InfoIcon/>
            </div>
            <div className='widget__body'>
                <ul className='widget__options'>
                    <li>
                        <h4>Akshara Theatre to hold audition for their band</h4>
                        <p>Expected in few weeks</p>
                    </li>
                    <li>
                        <h4>Artightis Theatre Co. looking for young actors for upcoming play</h4>
                        <p>Expected next month</p>
                    </li>
                    <li>
                        <h4>Traversing The Noosphere will hold Young picasso week to encourage young artists</h4>
                        <p>Expected next month</p>
                    </li>
                    <li>
                        <h4>Birbum Blossom Will start recruitment for script-writers</h4>
                        <p>Expected in upcoming months</p>
                    </li>
                    <li>
                        <h4>Delhi Contemporary Arts week will start its art submission, winners gets chance to meet Prime Minister</h4>
                        <p>Expected this year</p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Widget