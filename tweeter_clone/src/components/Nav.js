import React from 'react';
import './Nav.css';
import tweeter from '../img/tweeter.png';
import tweeterHome from '../img/tweeterHome.png';
import profile from '../img/profile.png';
import tweeterBell from '../img/tweeterBell.png';
import tweeterBookmark from '../img/tweeterBookmark.png';
import tweeterEnvelope from '../img/tweeterEnvelope.png'
import tweeterHash from '../img/tweeterHash.png'
import tweeterMore from '../img/tweeterMore.png'
import tweeterList from '../img/tweeterList.png'



function Nav() {
    return (
        <div className="navContainer">
            <div className="tweeter">
                <img className="bird" src={tweeter} alt="tweeter-logo" width='30px' />
            </div>
            <ul>
                <li className="active"> <img className="icon" src={tweeterHome} alt="home" width='20px' /> Home</li>
                <li> <img className="icon" src={tweeterHash} alt="explore" width='20px' /> Explore</li>
                <li><img className="icon" src={tweeterBell} alt="notification" width='20px' /> Notifications</li>
                <li> <img className="icon" src={tweeterEnvelope} alt="message" width='25px' /> Messages</li>
                <li> <img className="icon" src={tweeterBookmark} alt="bookmarks" width='25px' /> Bookmarks</li>
                <li> <img className="icon" src={tweeterList} alt="list" width='25px' /> Lists</li>
                <li> <img className="icon" src={profile} alt="profile" width='25px' /> Profile</li>
                <li> <img className="icon" src={tweeterMore} alt="more" width='25px' /> More

                </li>

            </ul>

            <button className="btn">Tweet</button>


        </div>
    );
}



export default Nav
