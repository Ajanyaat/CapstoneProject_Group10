import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <header className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="navbar-logo">FABFoods</div>
      <ul className="navbar-nav">
        <li className="nav-item"><Link to="/" className="nav-link">Home</Link></li>
        
        <select>
          <option>Location</option>
          <option>Hyd</option>
          <option>Hyd</option>
          <option>Hyd</option>
          <option>Hyd</option>
        </select>
        
        <div className='search'>
          <form action="/" method="get">
            <label className="searchbar"></label>
            <input type="text" id="header-search" placeholder="Search for dishes" name="s"/>
          </form>
        </div>
    
        <li>
          <Link to="/login">
            <button className="login-button">Login</button>
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default Navbar;
