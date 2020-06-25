import React from 'react'
import "./SideBar.css";

function SideBar(props) {
    return (


        <div className="NewsfeedWrapper">
            <h1>{props.Maintitle}</h1>

            <div className="articleContent">
                <div>
                    <h5>{props.Title1}</h5>
                    <h3>{props.Title2}</h3>
                </div>
                <div>
                    <h5>{props.Title3}</h5>
                </div>

            </div>

            <h2>{props.Foottitle}</h2>
        </div>
    )
}

export default SideBar