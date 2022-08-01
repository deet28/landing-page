import React from 'react'
import linkedIn from '../../media/icons/linkedIn.png'
import github from '../../media/icons/github.png'
import resume from '../../media/icons/resume.png'
import email from '../../media/icons/email.png'

const Footer = () => {

  return (
    <>
    <div className = "Footer-border"></div>
    <div className = "Footer-main">
      <div className = "Footer-nest">
        <img className = "Footer-icon-social" src = {linkedIn}/>
        <img className = "Footer-icon-social" src = {github}/>
        <img className = "Footer-icon-contact" src = {resume}/>
        <img className = "Footer-icon-contact" src = {email}/>
      </div>
    </div>
    </>
  )
}

export default React.memo(Footer)