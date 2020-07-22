import React from "react";
import "./hero.css";

const Hero = () => {
  return (
    <div className="cont ">
      <h3 className="pt-4">Vansh</h3>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <div>
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <p className="mb-0">Hii! I'm</p>
            <h1 className="mt-0 mb-2" style={{ fontSize: "4rem" }}>
              Vansh Kapoor
            </h1>
            <h3 className="mt-0">A Full Stack Developer | Programmer</h3>
            <button href="#detailer" className="mt-2 mb-2" style={{ fontSize: "1.2rem" }}>
              Download Resume
            </button>
            <div className="d-flex pt-2">
              <i className="fab fa-twitter fontsz-15" />
              <i className="fab fa-github pl-2 fontsz-15" />
              <i className="fab fa-linkedin pl-2 fontsz-15" />
            </div>
          </div>

          <div
            className="col-lg-6 col-md-6 col-sm-12 col-xs-12"
            style={{ textAlign: "center" }}
          >
            <img
              width="50%"
              className="myimg"
              alt="me"
              src="https://vanshkapoor.github.io/pic.jpg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;
