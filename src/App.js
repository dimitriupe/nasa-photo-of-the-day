import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios';
import Header from "./components/Header/header.js"
import APOD from "./components/APOD/APOD.js"
import Footer from "./components/Footer/footer.js"

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
      .then(response => {
        setData(response.data);
        console.log(response.data);
      })
      .catch(error => {
        console.log("The data was not returned", error);
      });
  }, [data]);

  return (
    <div className="App">
      {/* <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p> */}
      <Header />
      <APOD />
      <Footer />
    </div>
  );
}

export default App;
