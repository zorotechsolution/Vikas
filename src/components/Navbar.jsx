import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaBars, FaTimes, FaPlane } from 'react-icons/fa';
import './Navbar.css';

import img from "../assets/log-2.png"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container container">
        {/* <Link to="/" className="navbar-logo" onClick={closeMenu}>
          <img src="" alt="" />
          Vikas <span className="logo-accent"> Aviation  Academy</span>
          
        </Link> */}
        <img src={img } width={150} alt="" />
        
        <div className="menu-icon" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>

        <ul className={isOpen ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <NavLink to="/" className={({ isActive }) => "nav-links" + (isActive ? " activated" : "")} onClick={closeMenu}>
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/about" className={({ isActive }) => "nav-links" + (isActive ? " activated" : "")} onClick={closeMenu}>
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/courses" className={({ isActive }) => "nav-links" + (isActive ? " activated" : "")} onClick={closeMenu}>
              Courses
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/admissions" className={({ isActive }) => "nav-links" + (isActive ? " activated" : "")} onClick={closeMenu}>
              Admissions
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/placements" className={({ isActive }) => "nav-links" + (isActive ? " activated" : "")} onClick={closeMenu}>
              Placements
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/gallery" className={({ isActive }) => "nav-links" + (isActive ? " activated" : "")} onClick={closeMenu}>
              Gallery
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/contact" className={({ isActive }) => "nav-links" + (isActive ? " activated" : "")} onClick={closeMenu}>
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
