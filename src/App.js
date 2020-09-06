import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import Hero from "./components/hero/main";
import Footer from "./components/Footer/footer";
import Detailer from "./components/detailer/detailer";
// import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="greybg">
        <Hero />
        <a href="/#info">
          <i className="fas fa-chevron-down movedown pb-4 fontsz-15"></i>
        </a>
      </div>
      <div id="info" className="whitebg">
        <Detailer />
        <i class="fas fa-chevron-down movedown pb-4 fontsz-15"></i>
      </div>
      {/* <div className="footerdiv">
        <Footer />
      </div> */}
    </div>
  );
}

export default App;
