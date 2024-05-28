import React, { useState } from "react";

const Skills = () => {

    const [currentSkill, setCurrentSkill] = useState("Frontend");

    const skillMap = {
        "Frontend": ["ReactJs", "React Native", "HTML/CSS", "UI/UX", "Javascript", "Typescript", "Figma"],
        "Backend": ["NodeJs", "Microservices", "Database Desgining", "REST", "GraphQL", "PostgresQL", "MongoDb", "Kafka", "EventHub"],
        "Testing": ["React Testing Library", "Jest", "Mocha", "Chai"],
        "Tools": ["Git", "Github Actions", "Jenkins", "CI/CD", "Static Code Analysis"],
        "Programming": ["Java", "OOPS", "DSA", "Problem Solving"],
        "Practices": ["Agile", "Sprint Planning", "Test Driven Development", "Domain Driven Development", "Clean Coding"],
        "":[]
    }

    return <>
          <div className="container" style={{paddingBottom: '5rem'}}>
          <br />
          <br />
          <br />

          <h1>Skills</h1>
          <br />
          <br />
          <div className="row">
            <div className="col-lg-6 col-sm-12">
                {
                    Object.keys(skillMap).map((skill, index) => <p className={ currentSkill === skill?"skillhead active-skill":"skillhead inactive-skill"} 
                    key={index} onClick={() => setCurrentSkill(skill)}> {skill} 
                    {<i className={currentSkill === skill?"skillarrowshow fas fa-arrow-right":"skillarrowhide fas fa-arrow-right"}></i>}</p>)
                }
            </div>
            <div className="col-lg-6 col-sm-12">
                <div className="d-flex" style={{flexWrap: "wrap", marginTop: '20px'}}>
                    {
                        Object.values(skillMap).flat().map((skill, index) => <p 
                            key={index} className={ skillMap[currentSkill].includes(skill)?"skill-set visibleskill":"skill-set hideskill"}>{skill}</p>)
                    }
                    {/* {skillMap[currentSkill].map((skill, index) => <p key={index} className="skill-set"> {skill} </p>)} */}
                </div>
            </div>
          </div>
      </div>
    </>
}

export default Skills;