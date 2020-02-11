import React from "react";
import "./App.css";
import Header from "./components/Header/header.js"
import APOD from "./components/APOD/APOD.js"
import Footer from "./components/Footer/footer.js"

const App = () => {
  
  return (
    <div className="Appl">
      <Header />
      <APOD />
      <Footer />
    </div>
  );
}

export default App;
