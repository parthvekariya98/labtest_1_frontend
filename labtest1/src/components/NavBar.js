import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar__list">
        <li className="navbar__item">
          <Link to="/" className="navbar__link">Notes</Link>
        </li>
        <li className="navbar__item">
          <Link to="/new" className="navbar__link">New Note</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
