import React from 'react'
import linkedIn from '../../media/icons/linkedIn.png'
import github from '../../media/icons/github.png'
import resume from '../../media/icons/resume.png'
import email from '../../media/icons/email.png'
import {openSite} from './helpers'

const Footer = () => {
  const buttonName = "</>"

  return (
    <>
      <div className="Footer-border"></div>
      <div className="Footer-main">
        <div className="Footer-nest">
          <img
            className="Footer-icon linkedin"
            src={linkedIn}
            alt="Linked in icon"
            id="Linkedin"
            onClick={openSite}
          />
          <img
            className="Footer-icon github"
            src={github}
            alt="Git hub Icon"
            id="Github"
            onClick={openSite}
          />
          <img
            className="Footer-icon resume"
            src={resume}
            alt="Resume Icon"
            id="Resume"
            onClick={openSite}
          />
          <img
            className="Footer-icon email"
            src={email}
            alt="Email Icon"
            id="Email"
            onClick={() =>
              (window.location = "mailto:davidturchetta@outlook.com")}
            />
        </div>
      </div>
    <div className = "Footer-view-code">
        <button id = "Code" onClick = {openSite}>{buttonName}</button>
    </div>
    </>
  );
}

export default React.memo(Footer)