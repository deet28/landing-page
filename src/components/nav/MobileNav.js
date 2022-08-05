import React, { useState } from 'react'
import MobileMenu from './MobileMenu'

const MobileNav = () => {
  const [showMenu, setShowMenu] = useState(false);
  
  return(
    <>
    <div className = "Mobile-nav-main">
      <div 
        className="Mobile-nav-button"
        onClick = {()=>setShowMenu(!showMenu)}>
          <div 
          className={showMenu? "Button-line close" : "Button-line"}
          />
          <div 
          className={showMenu? "Button-line close" : "Button-line"}
          />
        <div
          className={showMenu ? "Button-line close" : "Button-line"}
          />
      </div>
    </div>
    {showMenu ? <MobileMenu /> : ''}
    </>
  )
}

export default MobileNav