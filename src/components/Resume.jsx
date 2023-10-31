import React, { useState } from "react";
import PDF from "../assets/fake-resume.pdf";

export default function Resume() {
  const [showPDF, setShowPDF] = useState(true);

  const handleClick = () => {
    setShowPDF(!showPDF);
  };

  return (
  <>
      <div className="pb-2 ">
        <h3 className="pb-2 text-3xl">Resume</h3>
        <h6>
          Toggle here to print or download my{" "}
          <a href="#resumePDF" onClick={handleClick} className="underline">
            resume
          </a>
        </h6>
      </div>
      {showPDF ? (
        <div>
          <ul>
            Front-end Proficiencies
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>jQuery</li>
            <li>Responsive Design</li>
            <li>ReactJS</li>
            <li>Bootstrap</li>
          </ul>
          <ul>
            Back-end Proficiencies
            <li>APIs</li>
            <li>Node</li>
            <li>Express</li>
            <li>MySQL & Sequelize</li>
            <li>MongoDB & Mongoose</li>
            <li>REST APIs</li>
            <li>GraphQL</li>
          </ul>
        </div>
      ) : (
        <div className="w-100">
          <object aria-label="pdf resume" width="100%" height="800" data={PDF} type="application/pdf" />
        </div>
      )}
    </>
  );
}
