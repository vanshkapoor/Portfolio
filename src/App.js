import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import Hero from "./components/hero/main";
import Footer from "./components/Footer/footer";
import Detailer from "./components/detailer/detailer";

function App() {
  return (
    <div className="App">
      <div className="greybg">
        <Hero />
        <a href="#detailer">
          <i class="fas fa-chevron-down movedown pb-4 fontsz-15"></i>
        </a>
      </div>
      <div className="whitebg">
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
