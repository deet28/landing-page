import React from 'react'
import linkedIn from '../../media/icons/linkedIn.png'
import github from '../../media/icons/github.png'
import resume from '../../media/icons/resume.png'
import email from '../../media/icons/email.png'

const Footer = () => {

  return (
    <>
      <div className="Footer-border"></div>
      <div className="Footer-main">
        <div className="Footer-nest">
          <img
            className="Footer-icon linkedin"
            src={linkedIn}
            alt="Linked in icon"
          />
          <img className="Footer-icon github" src={github} alt="Git hub  Icon" />
          <img className="Footer-icon resume" src={resume} alt="Resume Icon" />
          <img className="Footer-icon email" src={email} alt="Email Icon" />
        </div>
      </div>
    </>
  );
}

export default React.memo(Footer)