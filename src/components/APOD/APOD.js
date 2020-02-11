import React, { useState, useEffect } from "react";
import APODdetails from "./APODdetails.js";
import "./APOD.css";
import axios from 'axios';


const APOD = () => {
    
    const initialState = [];
    const [data, setData] = useState(initialState);

    const effectFn = () => {
        console.log('effect function')
      axios.get("https://api.nasa.gov/planetary/apod?api_key=5iktU30klFS43SXMuID2ePnVxtYp7mLGiRdeQCT9")
        .then(response => {
          console.log("data received", response.data);
          setData(response.data);
        })
        .catch(error => {
          console.log("The data was not returned", error);
        });
    }
    useEffect(effectFn, []);

    console.log("APOD", data);

    return (
        <div className="apod-container">
            <APODdetails />
        </div>
    );
};

export default APOD;