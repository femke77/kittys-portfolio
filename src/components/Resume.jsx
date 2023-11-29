import React, { useState } from "react";
import PDF from "../assets/fake-resume.pdf";
import { Document,Page } from 'react-pdf';

export default function Resume() {
  const [showPDF, setShowPDF] = useState(true);

  const handleClick = () => {
    setShowPDF(!showPDF);
  };

  return (
    <>
      <div className="pb-2 mx-5">
        <h3 className="pb-2 text-3xl">Resume</h3>
        <h6>
          Toggle here to print or download my{" "}
          <a href="#resume" onClick={handleClick} className="underline">
            resume
          </a>
        </h6>
      </div>
      {showPDF ? (
        <div className="mx-5 flex flex-row">
          <ul className="mx-5">
            <p className="font-bold"> Front-end Proficiencies</p>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>jQuery</li>
            <li>Responsive Design</li>
            <li>ReactJS</li>
            <li>Bootstrap</li>
            <li>MUI</li>
            <li>TailwindCSS</li>
          </ul>

          <ul className="mx-5 basis-50">
            <p className="font-bold"> Back-end Proficiencies</p>
            <li>Node</li>
            <li>Express</li>
            <li>MySQL & Sequelize</li>
            <li>MongoDB & Mongoose</li>
            <li>REST APIs</li>
            <li>GraphQL</li>
          </ul>
          <p>Also: being an awesome kitty. </p>
        </div>
        
      ) : (
        <div className="">
          <Document file={PDF}>
          <Page/>
          </Document>
          {/* <object
            aria-label="pdf resume"
            width="100%"
            height="800"
            data={PDF}
            type="application/pdf"
          /> */}
        </div>
      )}
    </>
  );
}
