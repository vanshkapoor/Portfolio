import React from "react"
import { projectData } from "../assets/projectData"

const ProjectSection = () => {

    return  <div className="row">
        {
            projectData.map((project, index) => <div key={index} className="col-lg-4">
                <Project
                    name={project.name}
                    skills={project.skills}
                    description={project.description}
                    websiteURL={project.websiteURL??undefined}
                    videoURL={project.videoURL??undefined}
                    bannerImg={project.bannerImg}
                 />
              </div>)
        }
        </div>
}

const Project = (props) => {
  return <div className="mx-2 my-4 projectCards">
        <img src={props.bannerImg} width={'100%'} height={100} alt={"app icon"} 
          style={{objectFit: "cover", borderRadius: "10px"}}/>
        <div>
          <div className="d-flex mt-2" style={{flexWrap: "wrap"}}>
            {
                props.skills.map((skill, index) => <p key={index} className="project-skill mt-0 mb-1">{skill}</p>)
            }
          </div>
          <p className="project-head mt-2">{props.name}</p>
          <p className="project-desc">{props.description}</p>
          <div className="d-flex" style={{flexWrap: "wrap"}}>
            {props.websiteURL?<a href={props.websiteURL} target="_blank" style={{textDecoration: "none"}}>
                <p className="projectcard-link mr-4">Visit Website <i class="fas fa-arrow-right"></i></p></a>:null}
            {props.videoURL?<a href={props.videoURL} target="_blank" style={{textDecoration: "none"}}>
                <p className="projectcard-link">See Video <i class="fas fa-video"></i></p></a>:null}
          </div>
        </div>
  </div>
}

export default ProjectSection;