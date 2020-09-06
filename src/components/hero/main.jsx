import React from "react";
import "./hero.css";

const Hero = () => {
  return (
    <div className="cont ">
      <h3 className="pt-4">
        <img width="50px" src={require("../../V1.png")} />
      </h3>

      <div className="makeitcentre">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <p className="mb-0" style={{ fontSize: "1.2rem" }}>
              Hii! I'm
            </p>
            <h1 className="mt-0 mb-2" style={{ fontSize: "4rem" }}>
              Vansh Kapoor
            </h1>
            <h3 style={{ color: "#616161" }} className="mt-0">
              A Full Stack Developer | Programmer
            </h3>
            <button className="mt-2 mb-2 pl-4 pr-4" style={{ fontSize: "1.2rem" }}>
              <a href={require("../../resume.pdf")} download="CV" style={{ color: "black" }}>
                Download Resume
              </a>
            </button>
            <div className="d-flex pt-2">
              <a href="https://twitter.com/vansh_Kapoor_" target="_blank" style={{ color: "grey" }}>
                <i className="fab fa-twitter fontsz-15" />
              </a>
              <a href="https://github.com/vanshkapoor" target="_blank" style={{ color: "grey" }}>
                <i className="fab fa-github pl-4 fontsz-15" />
              </a>
              <a
                href="https://www.linkedin.com/in/vansh-kapoor-62a938169/"
                target="_blank"
                style={{ color: "grey" }}
              >
                <i className="fab fa-linkedin pl-4 fontsz-15" />
              </a>
              <a href="mailto:vanshkapoorvk7@gmail.com?subject=To Hire" style={{ color: "grey" }}>
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
              src={require("../../me.jpeg")}
              // src="https://vanshkapoor.github.io/pic.jpg"
            />
            {/* <br /> */}
            <img src={require("../../boxes.png")} width="300px" className="boxesimg2" />
            <br />
            <img src={require("../../boxes.png")} width="100%" className="boxesimg" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;
