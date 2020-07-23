import React, { useState } from "react";
import "./detail.css";
import Footer from "../Footer/footer";

const Detailer = () => {
  const [section, setSection] = useState("3");

  const changeSection = (id) => {
    setSection(id);
  };

  return (
    <div>
      <br />
      <div className="d-flex mx-auto mt-4" style={{ width: "fit-content" }}>
        <p
          onClick={() => changeSection("1")}
          className={
            section === "1"
              ? "pl-2 pt-2 pb-2 fz-13 active"
              : "pl-2 pt-2 pb-2 fz-13 nactive"
          }
        >
          ABOUT ME
        </p>
        <p
          onClick={() => changeSection("2")}
          className={
            section === "2"
              ? "pl-2 pt-2 pb-2 fz-13 active"
              : "pl-2 pt-2 pb-2 fz-13 nactive"
          }
        >
          EDU & SKILLS
        </p>
        <p
          onClick={() => changeSection("3")}
          className={
            section === "3"
              ? "pl-2 pt-2 pb-2 fz-13 active"
              : "pl-2 pt-2 pb-2 fz-13 nactive"
          }
        >
          PROJECTS
        </p>
        <p
          onClick={() => changeSection("4")}
          className={
            section === "4"
              ? "pl-2 pt-2 pb-2 fz-13 active"
              : "pl-2 pt-2 pb-2 fz-13 nactive"
          }
        >
          EXPERIENCE
        </p>
      </div>
      <br />
      <br />
      <br />

      <div className="cont">
        {section === "1" ? (
          <Aboutme />
        ) : section === "2" ? (
          <Edu />
        ) : section === "3" ? (
          <Projects />
        ) : section === "4" ? (
          <Experience />
        ) : (
          <p>how did you get here</p>
        )}
      </div>
      <br />
      <br />
    </div>
  );
};

const Aboutme = () => {
  return (
    <div>
      <div className="row">
        <div className="col-lg-6">
          <p>
            <h3>Basic Info :</h3>
            <p>
              AGE: 19 <br /> CONTACT: 9582347770 <br /> EMAIL: vanshkapoor3118@gmail.com{" "}
              <br /> ADDRESS: PitamPura,Delhi
            </p>
          </p>
          <p>
            <h3>Hobbies</h3>
            <p>
              Sports:Actively takes part in football.Participated in many inter-school
              football competitions and zonal level.recently won first prize in college
              sports meet
              <br />
              Dance:Was in the school dance team and have won many inter-house and
              inter-school competitions and was 3rd in zonal level dance competition.
              <br />
              Ocassionaly blogging on my platform
            </p>
          </p>
        </div>
        <div className="col-lg-6">
          <p>
            Hii! I am Vansh kapoor and am currently pursuing B.Tech from Bharati
            VidyaPeeth's College of Engineering under GGSIPU.I am a web developer by
            passion and profession and have an urge or madness to learn to explore each
            and everything language. I have heard a lot from my colleague that it's
            impossible to learn everything and all I want is to to prove them wrong.I like
            to meet people and gain experience and loves to work in a professional
            environment
          </p>
        </div>
      </div>
    </div>
  );
};

const Edu = () => {
  return (
    <div>
      <div className="row">
        <div className="col-lg-8">
          <div id="education">
            <h3>Education</h3>
            <div className="container">
              <div className="col-md-6">
                <ul className="timeline" style={{ marginTop: "50px" }}>
                  <li>
                    <p>year:2014-15</p>
                    <h4>X CLASS</h4>
                    <h5>Lancer's Convent School</h5>
                    <p>CBSE BOARDS CGPA: 9.6</p>
                  </li>
                  <li>
                    <p>year:2016-17</p>
                    <h4>XII CLASS</h4>
                    <h5>Lancer's Convent Sr. Secondary School</h5>
                    <p>CBSE BOARDS : 94%</p>
                  </li>
                  <li>
                    <p>year:2017-2021</p>
                    <h4>COLLEGE</h4>
                    <h5>I.P UNIVERSITY : Bharati Vidhyapeeth's College of Engineering</h5>
                    <p>freshmen year CGPA:8.6</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <h3>Skills</h3>
          <div
            className="mt-0 pt-4 pl-2 d-flex"
            style={{ position: "relative", top: "18px", flexWrap: "wrap" }}
          >
            <p className="skills mr-2">Competitive coding</p>
            <p className="skills mr-2">Data structures</p>
            <p className="skills mr-2">Javascript</p>
            <p className="skills mr-2">ReactJS</p>
            <p className="skills mr-2">NodeJS</p>
            <p className="skills mr-2">MySQL</p>
            <p className="skills mr-2">MongoDB</p>
            <p className="skills mr-2">Appscripts</p>
            <p className="skills mr-2">Python</p>
            <p className="skills mr-2">Machine Learning</p>
            <p className="skills mr-2">GCP</p>
            <p className="skills mr-2">DNS</p>
            <p className="skills mr-2">Flutter UI</p>
            <p className="skills mr-2">UI/UX</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <div>
      <h3>Live Projects</h3>
      <br />
      <div className="row">
        <div className="col-lg-4">
          <ProjectCard />
        </div>
        <div className="col-lg-4">
          <ProjectCard />
        </div>
        <div className="col-lg-4">
          <ProjectCard />
        </div>
        <div className="col-lg-4">
          <ProjectCard />
        </div>
        <div className="col-lg-4">
          <ProjectCard />
        </div>
        <div className="col-lg-4">
          <ProjectCard />
        </div>
      </div>
      <br />
      <br />

      <div>
        <div className="row">
          <div className="col-lg-5">
            <h3>Publications</h3>
            <br />
            <ProjectCard />
          </div>
          <div className="col-lg-2"></div>
          <div className="col-lg-5">
            <h3>Current side projects</h3>
            <br />
            <div>
              <Sideprojects />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProjectCard = () => {
  return (
    <div>
      <div className="row">
        <div className="col-3">
          <img
            src="https://www.geniussheets.com/static/media/GS.28fa20c8.png"
            width="80%"
          />
        </div>
        <div className="col-9">
          <h4>GeniusSheets</h4>
          <p>
            Financial modeling made faster and easier with our built in formulas directly
            from your Quickbooks Software
          </p>
        </div>
      </div>
    </div>
  );
};

const Sideprojects = () => {
  return (
    <div>
      <h4>Name</h4>
      <p>Description</p>
    </div>
  );
};

const Experience = () => {
  return (
    <div className="container">
      <div id="experience">
        <h3>Experience</h3>
        <div className="container">
          <div className="col-md-6">
            <ul className="timeline" style={{ marginTop: "50px" }}>
              <li>
                <p>year:2014-15</p>
                <h4>X CLASS</h4>
                <h5>Lancer's Convent School</h5>
                <p>CBSE BOARDS CGPA: 9.6</p>
              </li>
              <li>
                <p>year:2016-17</p>
                <h4>XII CLASS</h4>
                <h5>Lancer's Convent Sr. Secondary School</h5>
                <p>CBSE BOARDS : 94%</p>
              </li>
              <li>
                <p>year:2017-2021</p>
                <h4>COLLEGE</h4>
                <h5>I.P UNIVERSITY : Bharati Vidhyapeeth's College of Engineering</h5>
                <p>freshmen year CGPA:8.6</p>
              </li>
              <li>
                <p>year:2017-2021</p>
                <h4>COLLEGE</h4>
                <h5>I.P UNIVERSITY : Bharati Vidhyapeeth's College of Engineering</h5>
                <p>freshmen year CGPA:8.6</p>
              </li>
              <li>
                <p>year:2017-2021</p>
                <h4>COLLEGE</h4>
                <h5>I.P UNIVERSITY : Bharati Vidhyapeeth's College of Engineering</h5>
                <p>freshmen year CGPA:8.6</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detailer;
