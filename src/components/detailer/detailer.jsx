import React, { useState } from "react";
import "./detail.css";

const Detailer = () => {
  const [section, setSection] = useState("1");

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
      <div className="cont">
        {section === "1" ? (
          <p>About me</p>
        ) : section === "2" ? (
          <p>Edu</p>
        ) : section === "3" ? (
          <p>Projects</p>
        ) : section === "4" ? (
          <p>experience</p>
        ) : (
          <p>how did you get here</p>
        )}
      </div>
    </div>
  );
};

export default Detailer;
