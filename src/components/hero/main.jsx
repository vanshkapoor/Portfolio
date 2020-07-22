import React from "react";
import "./hero.css";

const Hero = () => {
  return (
    <div className="cont ">
      <h3 className="pt-4">
        <img width="50px" src={require("../../V1.png")} />
      </h3>

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
            <p className="mb-0" style={{ fontSize: "1.2rem" }}>
              Hii! I'm
            </p>
            <h1 className="mt-0 mb-2" style={{ fontSize: "4rem" }}>
              Vansh Kapoor
            </h1>
            <h3 style={{ color: "#616161" }} className="mt-0">
              A Full Stack Developer | Programmer
            </h3>
            <button
              href="#detailer"
              className="mt-2 mb-2 pl-4 pr-4"
              style={{ fontSize: "1.2rem" }}
            >
              Download Resume
            </button>
            <div className="d-flex pt-2" style={{ color: "grey" }}>
              <i className="fab fa-twitter fontsz-15" />
              <i className="fab fa-github pl-4 fontsz-15" />
              <i className="fab fa-linkedin pl-4 fontsz-15" />
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
              src="https://vanshkapoor.github.io/pic.jpg"
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
