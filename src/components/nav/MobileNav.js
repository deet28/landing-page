import React, { useState } from 'react'

const MobileNav = () => {
  const [showMenu, setShowMenu] = useState(false);

  return(
    <div className = "Mobile-nav-main">
      <div 
        className="Mobile-nav-button"
        onClick = {()=>setShowMenu(!showMenu)}>
        <div 
          className=
          {showMenu? "Button-line close" : "Button-line"}>
        </div>
        <div 
          className=
          {showMenu? "Button-line close" : "Button-line"}>
        </div>
        <div 
          className=
          {showMenu ?"Button-line close" : "Button-line"}>
        </div>
      </div>
    </div>
  )
}

export default MobileNav