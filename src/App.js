import React, { useState } from "react";
import "./App.css";
import "./theme.css";
import Hero from "./components/hero/main";
import Footer from "./components/Footer/footer";
import Detailer from "./components/detailer/detailer";

function App() {
  const [level, setLevel] = useState(0);

  return (
    <div className="App">
      <div className="hero-background">
        <div className="cont d-flex pt-4">
          <h3 className="">
            <a
              href="/"
              className="header-name"
            >
              <span>Vansh Kapoor</span>
            </a>
          </h3>
          <div className="d-flex nav-links">
            <a className={level==0?"primary-text borderbottom clicks showOnDesktop":"clicks showOnDesktop"} onClick={() => setLevel(0)}>Home</a>
            <a className={level==1?"primary-text borderbottom clicks ml-4 showOnDesktop":"clicks ml-4 showOnDesktop"} onClick={() => setLevel(1)}>About</a>
            <a className="ml-4 showOnDesktop" style={{textDecoration: 'none', color: "white"}} target="_blank" href="https://vanshkapoor-blog.netlify.app/">Writings</a>
          </div>
        </div>
        
        <Hero level={level}/>
        {/* <a href="/#info">
          <i className="fas fa-chevron-down movedown pb-4 fontsz-15"></i>
        </a> */}

        <div className="bottomDiv bottomFixed showOnMobile">
          <div className="d-flex nav-links-bottom ">
              <a className={level==0?"primary-text borderbottom clicks":"clicks"} onClick={() => setLevel(0)}>Home</a>
              <a className={level==1?"primary-text borderbottom clicks ml-4":"clicks ml-4"} onClick={() => setLevel(1)}>About</a>
              <a className="ml-4" style={{textDecoration: 'none', color: "white"}} target="_blank" href="https://vanshkapoor-blog.netlify.app/">Writings</a>
            </div>
        </div>

        <div className="bottomDiv showOnDesktop">
          <div className="d-flex pt-2 cont">
                <a href="https://twitter.com/vansh_Kapoor_" className="social-icons animateShow" target="_blank">
                  <i className="fab fa-twitter fs14" />
                </a>
                <a href="https://github.com/vanshkapoor" target="_blank" className="social-icons animateShow">
                  <i className="fab fa-github pl-4 fs14" />
                </a>
                <a
                  href="https://www.linkedin.com/in/vansh-kapoor-62a938169/"
                  target="_blank"
                  className="social-icons animateShow"
                >
                  <i className="fab fa-linkedin pl-4 fs14" />
                </a>
                <a href="mailto:vanshkapoorvk7@gmail.com?subject=To Hire" className="social-icons animateShow">
                  <i class="fas fa-envelope pl-4 fs14"></i>
                </a>
              </div>
        </div>
      </div>
    </div>
  );
}

export default App;
