import React from "react";
import "./APODdetails.css";

const APODdetails = props => {

    console.log('post: ', props.post);

    return (
        <div className="APOD-details">
            <div className="date">
                <h3>{props.date}</h3>
            </div>
            <div className="APOD-pic-container">
                <img
                alt="APOD"
                className="APOD-picture"
                src={props.url}
                />
            </div>
            <h2>{props.title}</h2>
            <h4>{props.explanation}</h4>
        </div>
    );
};

export default APODdetails;