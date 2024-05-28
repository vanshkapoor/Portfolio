import React from "react";
import "./hero.css";
import { Aboutme } from "../detailer/detailer";

const Hero = (props) => {
  return (
    <div className="cont ">
      <div className={props.level == 1 ? "visible" : "hidden"} >
        <div className="centreAbout"><Aboutme /></div>
      </div>

      <div className={props.level == 0 ? "visible" : "hidden"}>
        <div className="makeitcentre">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <p className="primary-text mb-0 animateShow" style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
                Hii! I'm Vansh Kapoor
              </p>
              <h1 className="mt-0 mb-2 secondary-text animateShow" style={{ fontSize: "3.5rem" }}>
                I get stuff done.
              </h1>
              <h4 className="mt-0 animateShow off-text">
                A Full Stack Developer | Programmer
              </h4>
              <button className="mt-2 mb-2 pl-4 pr-4 downloadBtn animateShow" style={{ fontSize: "1.2rem", backgroundColor: "antiquewhite" }}>
                <a href={require("../../Vansh_Kapoor_Developer.pdf")} download="CV" style={{ color: "black", textDecoration: "none" }}>
                  Download Resume
                </a>
              </button>
              <div className="d-flex pt-2">
                <a href="https://twitter.com/vansh_Kapoor_" className="social-icons primary-text animateShow showOnMobile" target="_blank">
                  <i className="fab fa-twitter fontsz-15" />
                </a>
                <a href="https://github.com/vanshkapoor" target="_blank" className="social-icons primary-text animateShow showOnMobile">
                  <i className="fab fa-github pl-4 fontsz-15" />
                </a>
                <a href="https://www.linkedin.com/in/vansh-kapoor-62a938169/"
                  target="_blank"
                  className="social-icons primary-text animateShow showOnMobile"
                >
                  <i className="fab fa-linkedin pl-4 fontsz-15" />
                </a>
                <a href="mailto:vanshkapoorvk7@gmail.com?subject=To Hire" className="social-icons primary-text animateShow showOnMobile">
                  <i class="fas fa-envelope pl-4 fontsz-15"></i>
                </a>
              </div>
            </div>

            <div
              className="col-lg-6 col-md-6 col-sm-12 col-xs-12"
              style={{ textAlign: "center", position: "relative" }}
            >
              <img
                width="50%"
                className="myimg"
                alt="me"
                src={require("../../profile.jpg")}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;
