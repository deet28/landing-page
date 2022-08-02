import { Link } from 'react-router-dom';
import Routes from './Routes';

const Nav = () => {
  return (
    <nav className = "Nav-main">
      
      <div className = "Nav-home-button-div">
        <Link to = "/" className = "Link-style">
          <button className = "Nav-home-button">Home</button>
        </Link>
      </div>
      <Routes/>
    
    </nav>
  )
}

export default Nav;