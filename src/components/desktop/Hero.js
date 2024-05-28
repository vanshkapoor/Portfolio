import React from "react";

export const Hero = () => {
    return <div>
        <div className="hero-info">
            <img alt="My pic" style={{borderRadius: '100px'}} width={150} height={150} src={require("../assets/mypic.gif")} />
            <p className="hey">Hey!</p>
            <p className="name">I'm Vansh Kapoor</p>
            <div className="container">
                <p className="primary-text hero-skills reveal-text">A Full Stack Developer</p>
            </div>
            <p className="description">Programmer | Techpreneur</p>
            <button className="mt-2 mb-2 pl-4 pr-4 downloadBtn animateShow resumeBtn" style={{ fontSize: "1.2rem" }}>
                <a href={require("../../Vansh_Kapoor_Developer.pdf")} download="CV" style={{ color: "#cccccc", textDecoration: "none", padding: '10px' }}>
                  Download Resume
                </a>
            </button>
                <div className="d-flex pt-2 cont" style={{justifyContent: "center"}}>
                    <a href="https://twitter.com/vansh_Kapoor_" className="social-icons animateShow" target="_blank">
                    <i className="fab fa-twitter fs14" />
                    </a>
                    <a href="https://github.com/vanshkapoor" target="_blank" className="social-icons animateShow">
                    <i className="fab fa-github pl-4 fs14" />
                    </a>
                    <a
                    href="https://www.linkedin.com/in/vansh-kapoor-03/"
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
}