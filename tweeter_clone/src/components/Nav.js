import React from 'react'
import './Nav.css'


function Nav() {
    return (
        <div className="navContainer">
            <div className="tweeter"></div>
            <ul>
                <li className="active">Home</li>
                <li>Explore</li>
                <li>Notifications</li>
                <li>Messages</li>
                <li>Bookmarks</li>
                <li>Lists</li>
                <li>Profile</li>
                <li>More</li>
            </ul>

            <button className="btn">Tweet</button>

        </div>
    )
}

export default Nav
