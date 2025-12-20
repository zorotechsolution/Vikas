import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>About Us</h2>
            <Link to="/about">How it works</Link>
            
            <Link to="/about">Careers</Link>
            <Link to="/about">Terms of Service</Link>
          </div>
          <div className="footer-link-items">
            <h2>Contact Us</h2>
            <Link to="/contact">Contact</Link>
            <Link to="/contact">Support</Link>
            <Link to="/contact">Destinations</Link>
            
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>Courses</h2>
            <Link to="/courses">Airport Ground</Link>
            <Link to="/courses">Air Fares & Ticketing</Link>
            <Link to="/courses">Aviation Management</Link>
            
            
          </div>
          <div className="footer-link-items">
            <h2  >Social  Media</h2>
            <Link to="https://www.instagram.com/vikasaviationacademy/">Instagram</Link>
            <Link to="https://www.facebook.com/profile.php?id=61573876600883">Facebook</Link>
            <Link to="https://www.linkedin.com/in/vikas-aviation-academy-759049357/">X</Link>
           
          </div>
        </div>
      </div>
      <div className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to="/" className="social-logo">
              Vikas Aviation
            </Link>
          </div>
          <small className="website-rights">Zoro-Tech. All rights reserved. © {new Date().getFullYear()}</small>
          <div className="social-icons">
            <Link className="social-icon-link facebook" to="https://www.facebook.com/profile.php?id=61573876600883" target="_blank" aria-label="Facebook">
              <FaFacebook />
            </Link>
            <Link className="social-icon-link instagram" to="https://www.instagram.com/vikasaviationacademy/" target="_blank" aria-label="Instagram">
              <FaInstagram />
            </Link>
           
            <Link className="social-icon-link twitter" to="https://www.linkedin.com/in/vikas-aviation-academy-759049357/" target="_blank" aria-label="Twitter">
              <FaLinkedin />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
