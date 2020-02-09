import React from "react";
import APODdetails from "./APODdetails.js";
import "./APOD.css";


const APOD = props => {

    return (
        <div className="apod-container">
            {props.post.map((item) => {
                return (
                    <APODdetails post={item} />
                );
            })};
        </div>
    );
};

export default APOD;