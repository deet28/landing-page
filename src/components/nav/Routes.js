import React from 'react';
import { Link } from 'react-router-dom';
const Routes = () => {
  return (
    <ul className = "Nav-list">
        <Link to = "/about" className = "Link-style">
          <li className = "Nav-item">
            About
          </li>
        </Link>
        <Link to = "/work" className = "Link-style">
          <li className = "Nav-item">
            Work
          </li>
        </Link>
        <Link to = "/contact" className = "Link-style">
          <li className = "Nav-item">
            Contact
          </li>
        </Link>
      </ul>
  )
}

export default React.memo(Routes);