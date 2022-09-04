import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Routes from './Routes'
import MobileNav from './MobileNav'

const Nav = () => {
  
  const [mobile, setMobile] = useState(
    window.innerWidth<800 ? true : false
  );

  useEffect(()=>{
  window.addEventListener('resize',()=>{
    if(window.innerWidth<800){
      setMobile(true)
      } else {
      setMobile(false);
      }
    })
  },[])

  return (
  <nav className = "Nav-main">
    <div className = "Nav-home-button-div">
        <Link to = "/" className = "Link-style">
          <button className = "Nav-home-button">Home</button>
        </Link>
      </div>
      {mobile  ? <MobileNav /> :<Routes/>}
  </nav>
  )
}

export default Nav;