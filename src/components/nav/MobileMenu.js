import { Link } from 'react-router-dom'
const MobileMenu = ({setShowMenu}) => {
   
  return (
    <div className = "Mobile-nav-menu">
      <ul className = "Mobile-nav-menu-list">
        <Link to = "about" className = "Link-style">
          <li 
            className = "Mobile-nav-menu-item"
            onClick = {()=>setShowMenu(false)}>About</li>
        </Link>
        <Link to = "work" className = "Link-style">
          <li 
            className = "Mobile-nav-menu-item"
            onClick = {()=>setShowMenu(false)}>Work</li>
        </Link>
        <Link to = "contact" className = "Link-style">
          <li 
            className = "Mobile-nav-menu-item"
            onClick = {()=>setShowMenu(false)}>Contact</li>
        </Link>
      </ul>
    </div>
  )
}

export default MobileMenu