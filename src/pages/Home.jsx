import React from 'react';
import Button from '../components/Button';
import Card from '../components/Card';
import { FaPlane, FaUserGraduate, FaBriefcase, FaGlobe } from 'react-icons/fa';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-content container">
          <h1 className="hero-title" style={{color:"whitesmoke"}}>Launch Your Career with Vikas Aviation Academy</h1>
          <p className="hero-subtitle">
            Premium training for Cabin Crew, Ground Staff, and Aviation Management. 
            Your runway to success starts here.
          </p>
          <div className="hero-btns">
            <Button to="/admissions" className="hero-btn-primary">
              Apply Now
            </Button>
            <Button to="/contact" type="outline" className="hero-btn-outline">
              Enquire Today
            </Button>
          </div>
        </div>
      </div>

      {/* Highlights Section */}
      <section className="section " style={{padding:"40px"}}>
        <h2 className="section-title">Why Choose Vikas?</h2>
        <div className="features-grid">
          <Card className="feature-card">
            <div className="icon-wrapper">
              <FaPlane className="feature-icon" />
            </div>
            <h3>Expert Training</h3>
            <p>Learn from industry veterans with years of aviation experience.</p>
          </Card>
          
          <Card className="feature-card">
            <div className="icon-wrapper">
              <FaBriefcase className="feature-icon" />
            </div>
            <h3>100% Placement Support</h3>
            <p>Our dedicated placement cell helps you land jobs with top airlines.</p>
          </Card>

          <Card className="feature-card">
            <div className="icon-wrapper">
              <FaUserGraduate className="feature-icon" />
            </div>
            <h3>Grooming & Skills</h3>
            <p>Comprehensive grooming, communication, and personality development.</p>
          </Card>
          
           <Card className="feature-card">
            <div className="icon-wrapper">
              <FaGlobe className="feature-icon" />
            </div>
            <h3>Global Opportunities</h3>
            <p>Prepare for a career that takes you around the world.</p>
          </Card>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section">
        <div className="container">
          <h2 className="cta-title">Ready to Fly?</h2>
          <p className="cta-text">Admissions are open for the upcoming batch. Secure your seat today.</p>
          <Button to="/courses" className="cta-btn">View Courses</Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
