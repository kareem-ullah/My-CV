import React from "react";

const CV = () => {
  return (
    <div className="cv-container">
      <header className="cv-header">
        <h1>KAREEM ULLAH</h1>
        <h4>Address:House No K-735 street 11 sector 16 Orangi town Karachi:</h4>
      </header>

      <section className="education">
        <h2>Education</h2>
        <ul>
          <li>
            <li>matric Science</li>
            <li>Electrical Deploma Continue</li>
            <li>Saylani Welfare IT Course</li>
          </li>
        </ul>
      </section>

      <section className="experience">
        <h2>Work Experience</h2>
        <ul>
          <li>
            <strong>Job Title</strong>
            <li>Toyota Indes Motar 2 Year </li>
            <li>Feroze textile 1888 Limited 4 Year</li>
          </li>
        </ul>
      </section>

      <section className="skills">
        <h2>Skills</h2>
        <ul>
          <li>Programming Languages: HTML, CSS, JavaScript</li>
          <li>Frameworks & Libraries: React, Bootstrap </li>
          <li>Version Control: GitHub,</li>
        </ul>
      </section>

      <section className="contact">
        <h2>Contact Information</h2>
        <ul>
          <li>Email: kareemullah.ayub@gmail.com</li>
          <li>Phone: 0333-3352375 \ 0334-2054229</li>
          <li>LinkedIn: https://www.linkedin.com/feed/</li>
        </ul>
      </section>
    </div>
  );
};

export default CV;
