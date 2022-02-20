import React from 'react';

function Resume() {
    return (
        <div className="columns">
            <div className="column">
                <p id="resume" className="content">Resume</p>
                <br />

                <a className="button is-primary"
                   href={process.env.PUBLIC_URL + "/jason-libertelli-resume.pdf"}
                   target="_blank" rel="noreferrer">
                       <span className="icon">
                           <i className="fas fa-download"></i>
                       </span>
                       <span id="download">Download My Resume</span>
                   </a>
            </div>
            <div  className="column">
                <p id="skill-title" className="content">Skills</p>
               
                <ul id="skills">
                    <li>HTML, CSS, Javascript</li>
                    <li>Web Apis, Server-Side Apis</li>
                    <li>MongoDb, Express.js, React, Node</li>
                    <li>SQL, NoSql</li>
                    <li>Markdown, Git, Github Repo</li>
                </ul>

            </div>
        </div>
    );
}

export default Resume;