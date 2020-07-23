import React, { useState } from "react";
import "./detail.css";
import Footer from "../Footer/footer";

const Detailer = () => {
  const [section, setSection] = useState("4");

  const changeSection = (id) => {
    setSection(id);
  };

  return (
    <div>
      <br />
      <div className="d-flex mx-auto mt-4 sticknav">
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
          <p style={{ border: "2px solid #efefef", padding: "25px 20px 10px 24px" }}>
            <div>
              <h3>
                <b>
                  <i class="ic fas fa-info-circle pr-2"></i>Basic Info{" "}
                </b>
              </h3>
              <div className="dash"></div>
            </div>
            <br />
            <p>
              <span className="font-weight-bold pr-2">AGE:</span> 21{" "}
            </p>
            <p>
              {" "}
              <span className="font-weight-bold pr-2">CONTACT:</span> 9582347770{" "}
            </p>
            <p>
              <span className="font-weight-bold pr-2">EMAIL:</span>{" "}
              vanshkapoor3118@gmail.com{" "}
            </p>
            <p>
              <span className="font-weight-bold pr-2"> ADDRESS:</span>TP-53, PitamPura,
              Delhi{" "}
            </p>
          </p>
          <p className="aboutpara2">
            <div>
              <h3>
                <b>
                  <i class="ic fas fa-spa pr-2"></i>Hobbies
                </b>
              </h3>
              <div className="dash"></div>
            </div>
            <br />
            <p>
              <ul>
                <li>
                  Sports:Actively takes part in football.Participated in many inter-school
                  football competitions and zonal level.recently won first prize in
                  college sports meet
                </li>
                <li>
                  Dance:Was in the school dance team and have won many inter-house and
                  inter-school competitions and was 3rd in zonal level dance competition.
                </li>
                <li>Ocassionaly blogging on my platform</li>
              </ul>
            </p>
          </p>
        </div>
        <div className="col-lg-6">
          <p className="aboutpara">
            <span className="font-weight-bold text-muted" style={{ fontSize: "2rem" }}>
              {" "}
              Hii!
            </span>{" "}
            I am Vansh kapoor and am currently pursuing B.Tech from Bharati VidyaPeeth's
            College of Engineering under GGSIPU.I am a web developer by passion and
            profession and have an urge or madness to learn to explore each and everything
            language. I have heard a lot from my colleague that it's impossible to learn
            everything and all I want is to to prove them wrong.I like to meet people and
            gain experience and loves to work in a professional environment
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
        <div className="col-lg-6">
          <div id="education">
            <h3>
              <b>
                <i class="ic fas fa-university pr-2"></i>Education
              </b>
            </h3>
            <div className="dash"></div>
            <br />
            <div className="container education">
              <div className="col-md-6">
                <ul className="timeline" style={{ marginTop: "50px" }}>
                  <li>
                    <p className="text-muted">
                      <i class="far fa-clock pr-1"></i> year: 2014-15
                    </p>
                    <h4>X CLASS</h4>
                    <h5>Lancer's Convent School</h5>
                    <p>CBSE BOARDS CGPA: 9.6</p>
                  </li>
                  <li>
                    <p className="text-muted">
                      <i class="far fa-clock pr-1"></i> year: 2016-17
                    </p>
                    <h4>XII CLASS</h4>
                    <h5>Lancer's Convent Sr. Secondary School</h5>
                    <p>CBSE BOARDS : 94%</p>
                  </li>
                  <li>
                    <p className="text-muted">
                      <i class="far fa-clock pr-1"></i> year: 2017-2021
                    </p>
                    <h4>COLLEGE</h4>
                    <h5>I.P UNIVERSITY : Bharati Vidhyapeeth's College of Engineering</h5>
                    <p>Cummilative CGPA:8.8</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-1"></div>
        <div className="col-lg-5">
          <h3>
            <b>
              <i class="ic fas fa-code pr-2"></i>Skills
            </b>
          </h3>
          <div className="dash"></div>
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
            <p className="skills mr-2">Github</p>
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
      <h3>
        <b>
          <i class="fas fa-project-diagram pr-2 ic"></i>Live Projects
        </b>
      </h3>
      <div className="dash"></div>
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
            <h3>
              <b>
                <i class="fas fa-pen-nib pr-2 ic"></i>Publications
              </b>
            </h3>
            <div className="dash"></div>
            <br />
            <ProjectCard />
          </div>
          <div className="col-lg-2"></div>
          <div className="col-lg-5">
            <h3>
              <b>
                <i class="fas fa-tasks pr-2 ic"></i>Current side projects
              </b>
            </h3>
            <div className="dash"></div>

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
    <div className="projects mb-4 mt-2">
      <div className="row">
        <div className="col-3">
          <img
            className="projectimg"
            src="https://www.geniussheets.com/static/media/GS.28fa20c8.png"
            width="100%"
          />
        </div>
        <div className="col-9">
          <h4>GeniusSheets</h4>
          <p className="text-muted">
            Financial modeling made faster and easier with our built in formulas directly
            from your Quickbooks Software
          </p>
          <button className="blackbutton">
            View on
            <i className="fab fa-github pl-2 " />
          </button>
          <button className="ml-2">
            View on <i class="fab fa-internet-explorer pl-2"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

const Sideprojects = () => {
  return (
    <div style={{ background: "whitesmoke", padding: "15px" }}>
      <div>
        <h4>Name</h4>
        <p className="text-muted">Description</p>
      </div>
      <hr />
      <div>
        <h4>Name</h4>
        <p className="text-muted">Description</p>
      </div>
      <hr />
      <div>
        <h4>Name</h4>
        <p className="text-muted">Description</p>
      </div>
      <hr />
      <div>
        <h4>Name</h4>
        <p className="text-muted">Description</p>
      </div>
    </div>
  );
};

const Experience = () => {
  return (
    <div className="container">
      <div id="experience">
        <div className="row">
          <div className="col-lg-6">
            <h3>
              <b>
                <i class="fas fa-briefcase pr-2 ic"></i>Experience
              </b>
            </h3>
            <div className="dash"></div>
            <Exptimeline />
          </div>
          <div className="col-lg-1"></div>
          <div className="col-lg-5">
            <h3>
              <b>
                <i class="fas fa-briefcase pr-2 ic"></i>Society
              </b>
            </h3>
            <div className="dash"></div>
            <br />
            <div>
              <div style={{ background: "whitesmoke", padding: "15px" }}>
                <h4>Name</h4>
                <p className="text-muted">Description</p>
              </div>
              {/* <hr /> */}
              <div className="mt-2" style={{ background: "whitesmoke", padding: "15px" }}>
                <h4>Name</h4>
                <p className="text-muted">Description</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Exptimeline = () => {
  return (
    <div className="container">
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
  );
};

export default Detailer;
