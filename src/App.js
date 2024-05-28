import React, { useEffect, useState } from "react";
import "./App.css";
import "./theme.css";
import "./style.css";

import { Hero } from "./components/desktop/Hero";
import { Navbar } from "./components/navbar/navbar";
import Skills from "./components/desktop/Skills";
import ProjectSection from "./components/desktop/Projects";

function App() {
  const [showDiv, setShowDiv] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowDiv(true);
      } else {
        setShowDiv(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    setTimeout(()=>{
      setLoading(false);
    }, 1000)


    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [])


  return (
    <>
    <div className="siteloader">
      <h1 style={{fontWeight: "bold", color: "black"}}>VK</h1>
      <h1 className={loading?"blink":""} style={{color: "black"}}>{loading?"Loading...":"All set"}</h1>
    </div>
    <div className="gradientbg">
      <div style={{paddingRight: '40px', paddingLeft: '40px'}}>
        <Navbar />
      </div>
      <div className="container">
        <Hero />
      </div>
    </div>
    <div className={showDiv? "download-side-popup visible": "download-side-popup hidden" }>
        <a href={require("./Vansh_Kapoor_Developer.pdf")} download="CV" style={{ color: "#cccccc", textDecoration: "none", padding: '10px' }}>
          Download Resume
        </a>
    </div>
    
    <div className="box downarrow">
      <i class="fas fa-arrow-down arrowopacity"></i>
    </div>
    
    <div>
      <div className="container">
        <div>
          <p>
            <span className="font-weight-bold secondary-text" style={{ fontSize: "2rem" }}>
                {" "}
                About Me!
              </span>{" "}
              <br />
              <br />
              Hello! I am currently working as an Application Developer Consultant at <span className="primary-text">Thoughtworks</span>, collaborating with exceptional professionals to implement rigorous coding practices for the development of production-ready applications and processes.
            <br />
            <br />
            <br />
                        I hold a Bachelor's degree in Computer Science and Engineering from <span className="primary-text">Bharati Vidyapeeth IPU</span>.
            <br />
            <br />
            <br />
            My professional journey includes diverse experiences in various startups across different sectors. I specialize in end-to-end development, with expertise in Node.js for backend and creating seamless UI/UX experiences using React.js and React Native. My approach is rooted in best software development practices such as TDD, DDD, and clean coding. I am always eager to take on more challenging opportunities.
            </p>
        </div>
      </div>
    </div>
    <br />
    <br />
    <br />
    <br />
    <br />

    <div className="about">
      <Skills />
    </div>
    <div className="project">
        <div className="container">
          <br />
          <h1>Projects</h1>
          <br />
          <br />
          <div>
          <ProjectSection />
          </div>
        </div>
    </div>
    <div>
      <div className="container mt-4">
        <div className="row" style={{paddingTop: '10rem', paddingBottom: '3rem'}}>
            <div className="col-lg-6 col-sm-12">
              <p>crafted by</p>
              <p style={{marginTop: '0px', fontSize: '1.5rem'}}>Vansh Kapoor</p>
              <div className="d-flex">
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
              </div>
            </div>
            {/* <div className="col-lg-6 col-sm-12 d-flex" style={{justifyContent: "end", flexDirection: "column"}}>
              <p>Copyright@2024</p>
            </div> */}
        </div>
      </div>
    </div>
    </>
  );
}




export default App;
