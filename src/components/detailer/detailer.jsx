import React, { useState } from "react";
import "./detail.css";
import Footer from "../Footer/footer";

const Detailer = () => {
  const [section, setSection] = useState("1");

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
              <span className="font-weight-bold pr-2"> ADDRESS:</span>PitamPura, Delhi{" "}
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
                  <span className="text-muted">Sports:</span>Actively takes part in
                  football.Participated in many inter-school football competitions and
                  zonal level.recently won first prize in college sports meet
                </li>
                <li>
                  <span className="text-muted">Dance:</span>Was in the school dance team
                  and have won many inter-house and inter-school competitions and was 3rd
                  in zonal level dance competition.
                </li>
                <li>
                  Ocassionaly <span className="text-muted">blogging</span> on my platform
                  :{" "}
                  <a href="https://www.journaldev.netlify.com" style={{ color: "black" }}>
                    JournalDev
                  </a>
                </li>
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
            everything and all I want is to to prove them wrong. This thought drives me to
            explore everything from C++,web,ML,AI to AR and blockchain. I like to meet
            people and gain experience and loves to work in a professional environment
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
          <div id="education mt-2">
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
        <div className="col-lg-5 mt-2">
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
            <p className="skills mr-2">Sklearn</p>
            <p className="skills mr-2">GCP</p>
            <p className="skills mr-2">DNS</p>
            <p className="skills mr-2">Flutter UI</p>
            <p className="skills mr-2">UI/UX</p>
            <p className="skills mr-2">Decentralised Apps</p>
            <p className="skills mr-2">O.S basics</p>
            <p className="skills mr-2">UI/UX</p>
          </div>
          <div className="mt-4 mb-4">
            <h3>
              <b>
                <i class="fas fa-award  pl-2 pr-2 ic"></i>Achievements
              </b>
              <div className="dash"></div>
            </h3>
            <div className="mt-2" style={{ background: "whitesmoke", padding: "15px" }}>
              <h4>Fist Prize in app Money LEGOs Hack</h4>
              <p className="text-muted">
                <b>By Matic</b>
              </p>
              <p className="text-muted">
                Developed a decentralised Crypto-economic protocol to have better public
                communication tools. Was tweeted by Vitalik Buterin
              </p>
            </div>
            <div className="mt-2" style={{ background: "whitesmoke", padding: "15px" }}>
              <h4>SIH 2019 TOP 4</h4>
              <p className="text-muted">
                Developed a web based platform to prevent medicine wastage
              </p>
            </div>
            <div className="mt-2" style={{ background: "whitesmoke", padding: "15px" }}>
              <h4>NSUT Hack Top 10</h4>
              <p className="text-muted">
                Education platform AR based with dynamic AR hosting for teachers
              </p>
            </div>
            <div className="mt-2" style={{ background: "whitesmoke", padding: "15px" }}>
              <h4>Amity Talk</h4>
              <p className="text-muted">
                Was invited for talk on Web capabilities on their fest
              </p>
            </div>
            <div className="mt-2" style={{ background: "whitesmoke", padding: "15px" }}>
              <h4>HackerRank 5 Star</h4>
              <p className="text-muted">
                Did practive my competitive coding on it and achieved it in just 9 day.
              </p>
            </div>
            <div className="mt-2" style={{ background: "whitesmoke", padding: "15px" }}>
              <h4>InterviewBit rank 18k</h4>
              <p className="text-muted">
                Its an average rank but i achieved this rank withing 20 days along side
                working in a company and side projects.
              </p>
            </div>
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
      <i>
        <p className="text-muted mt-2 mb-2">There are a lot more projects on my github</p>
      </i>
      {/* <br /> */}
      <div className="row">
        <div className="col-lg-4">
          <ProjectCard
            name="GeniusSheets"
            info="Sheets Add and Web based platform to make Financial modeling faster and easier with our built in formulas directly
            from your Quickbooks Software."
            image="https://www.geniussheets.com/static/media/GS.28fa20c8.png"
          />
        </div>
        <div className="col-lg-4">
          <ProjectCard
            image="http://recruitingmonk.com/wp-content/uploads/2019/09/logo-recruitingmonk-vertical-color-transbg-e1568414193499.png"
            name="Recruiting Monk"
            info="Developed a react based Boolean and logic Chat app for recruiters and also handled DevOps on Azure for this wordpress app"
          />
        </div>
        <div className="col-lg-4">
          <ProjectCard
            name="TechKit"
            image="data:image/png;base64,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"
            info="Developed this site for Finance solutionn in US with awe-inspiring designs for mulitple pages"
          />
        </div>
        <div className="col-lg-4">
          <ProjectCard
            name="HashCash"
            image="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Ethereum-icon-purple.svg/1200px-Ethereum-icon-purple.svg.png"
            info="Developed a decentralised Crypto-economic protocol to have better public communication tools on NodeJs server for email service."
          />
        </div>
        <div className="col-lg-4">
          <ProjectCard
            name="TechnoFile"
            image={require("../../fa.jpeg")}
            info="Developed an addon to highlight technical words(from our DB) on any page on web and give the meaning and other info when hovered on them. It also shows the count of each word and also an inbuilt dictionary"
          />
        </div>
        <div className="col-lg-4">
          <ProjectCard
            name="Connection Aid"
            image="https://connectionaid.netlify.app/static/media/MascotSVG1.384f9215.svg"
            info="Developed it under Delhi gov. Its a mobile only web platform to help addicts by connecting them to psychologists. Worked on implementing chat platform and one to one call feature on web only."
          />
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
            <PbCard
              name="Detection of ACL tears using Machine learning and Depp learning techniques"
              info="Visualised Knee MRI exams and optimised the dataset to perform DL techniques like ANN,CNN and RNN and also regression, HOG based Classfication to come up with the most optimal solution"
            />
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

const ProjectCard = (props) => {
  return (
    <div className="projects mb-4 mt-2">
      <div className="row">
        <div className="col-3">
          <img className="projectimg pt-2" src={props.image} width="100%" />
        </div>
        <div className="col-9">
          <h4>{props.name}</h4>
          <p className="text-muted">{props.info}</p>
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

const PbCard = (props) => {
  return (
    <div className="projects mb-4 mt-2">
      <h4>{props.name}</h4>
      <p className="text-muted">{props.info}</p>
      <a href="https://www.linkedin.com/posts/vansh-kapoor-62a938169_presented-my-first-research-paper-where-activity-6680138952168529920-jF7u">
        <button
          className="ml-2"
          // href="https://www.linkedin.com/posts/vansh-kapoor-62a938169_presented-my-first-research-paper-where-activity-6680138952168529920-jF7u"
        >
          View certificate
        </button>
      </a>
    </div>
  );
};

const Sideprojects = () => {
  return (
    <div style={{ background: "whitesmoke", padding: "15px" }}>
      <div>
        <h4>Dynamically Dockerised Nodejs</h4>
        <p className="text-muted">
          Creating a server based docker sanbpxed compiler using Nodejs and Shell
          scripting.
        </p>
      </div>
      <hr />
      <div>
        <h4>E-space </h4>
        <p className="text-muted">
          A Utility software for entrepreneurs, project managers.
        </p>
      </div>
      <hr />
      <div>
        <h4>E-space Node CLI tool</h4>
        <p className="text-muted">
          A tool for developers to update their log on Espace through terminal itself.
        </p>
      </div>
      <hr />
      <div>
        <h4>Serverless Nodejs</h4>
        <p className="text-muted">Understanding its use and how to build it.</p>
      </div>
      <hr />
      <div>
        <h4>Clean UI</h4>
        <p className="text-muted">
          UI framework over bootstrap with vscode extnsn for easy use.
        </p>
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
                <h4>DSC: WEB HEAD</h4>
                <p>
                  <i>August 2019-August 2020</i>
                </p>
                <p className="text-muted">
                  Developed the registration app to handle collection amount of more than
                  1lakh with highest registration of all time in the college. Conducted
                  various sessions and managed the web team and worked on unique ideas.
                </p>
              </div>
              {/* <hr /> */}
              <div className="mt-2" style={{ background: "whitesmoke", padding: "15px" }}>
                <h4>DSC: PR executve</h4>
                <p>
                  <i>August 2018- August 2019</i>
                </p>
                <p className="text-muted">
                  Worked as Publicity member by bringing unique publicity ideas to team
                  and also being on top 3 for max registrations.
                </p>
              </div>
              <div className="mt-2" style={{ background: "whitesmoke", padding: "15px" }}>
                <h4>IPU MUN</h4>
                <p>
                  <i>February 2018- August 2018</i>
                </p>
                <p className="text-muted">Participated in few MUNs.</p>
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
          <p className="text-muted">
            <i class="far fa-clock pr-1"></i> May 2019-Jan-2020
          </p>
          <h4>FellowApp</h4>
          <p>
            Worked as Full Stack developer on the hiring project. Also developed Add Ons
            and chat based services for recruiters. This was my first internship and
            worked virtually but also learned the most here. I also learned and managed
            cloud for their different projects.{" "}
          </p>
        </li>
        <li>
          <p className="text-muted">
            <i class="far fa-clock pr-1"></i> June-August,2019
          </p>
          <h4>Delhi Government- Health department</h4>
          <p>Developed mobile only platform connection aid for dependants.</p>
        </li>
        <li>
          <p className="text-muted">
            <i class="far fa-clock pr-1"></i> October -2019
          </p>
          <h4>Hack-Jaipuria</h4>
          <p>Organised a hackathon at jaipuria school for school students.</p>
        </li>
        <li>
          <p className="text-muted">
            <i class="far fa-clock pr-1"></i> November - December - 2019
          </p>
          <h4>AAP</h4>
          <p>Worked on mahila suraksha sadhan with Harshita kejriwal.</p>
        </li>
        <li>
          <p className="text-muted">
            <i class="far fa-clock pr-1"></i> January-March - 2020
          </p>
          <h4>MyWays</h4>
          <p>Worked as Full stack developer for IIT incubated startup.</p>
        </li>
        <li>
          <p className="text-muted">
            <i class="far fa-clock pr-1"></i> March-present
          </p>
          <h4>TechKit - US</h4>
          <p>Developing high end solutions for a US based company virtually.</p>
        </li>
      </ul>
    </div>
  );
};

export default Detailer;
