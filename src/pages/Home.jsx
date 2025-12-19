import React from 'react';
import Button from '../components/Button';
import Card from '../components/Card';
import { FaPlane, FaUserGraduate, FaBriefcase, FaGlobe } from 'react-icons/fa';
import './Home.css';
import bgVedio from "../assets/bg.mp4" 
import { color } from 'framer-motion';

const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <div className="hero-section">
  <video
    className="hero-video"
    autoPlay
    loop
    muted
    playsInline
  >
    <source src={bgVedio} type="video/mp4" />
    Your browser does not support the video tag.
  </video>

  <div className="hero-overlay"></div>

  <div className="hero-content container">
    <h1 className="hero-title" style={{ color: "whitesmoke" }}>
      Launch Your Career with Vikas Aviation Academy
    </h1>
    <p className="hero-subtitle">
      Premium training for Cabin Crew, Ground Staff, and Aviation Management.
      Your runway to success starts here.
    </p>
    <div className="hero-btns">
      <Button to="/admissions" className="hero-btn-primary">
        Apply Now
      </Button>
      <Button to="/contact" type="outline" className="hero-btn-outline" >
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
  <div className="container cta-content">
    <h2 className="cta-title">Ready to Fly Your Career?</h2>

    <p className="cta-text">
      Admissions are now open for the upcoming batch at Vikas Aviation Academy.
      Get industry-focused training, expert mentorship, and strong placement support
      to begin your aviation journey with confidence.
    </p>

    <div className="cta-actions">
      <Button to="/courses" className="cta-btn">View Courses</Button>
      <p className="cta-note">Limited seats available. Early applicants get priority.</p>
    </div>
  </div>
</section>

<section className="training-section"> 
  <div className="container">
    <h2 className="section-title">Our Training Approach</h2>

    <p className="training-intro">
      At Vikas Aviation Academy, we focus on practical learning, confidence building,
      and industry readiness through a structured training process.
    </p>

    <div className="training-grid">
      <div className="training-item">
        <h3>Classroom & Practical Training</h3>
        <p>
          Structured sessions covering aviation knowledge, safety procedures,
          and real-world airline operations.
        </p>
      </div>

      <div className="training-item">
        <h3>Grooming & Communication</h3>
        <p>
          International grooming standards, body language, and professional
          communication skills.
        </p>
      </div>

      <div className="training-item">
        <h3>Mock Interviews</h3>
        <p>
          Regular interview simulations to prepare students for airline selection
          processes.
        </p>
      </div>

      <div className="training-item">
        <h3>Personality Development</h3>
        <p>
          Confidence building, teamwork skills, and customer handling training.
        </p>
      </div>
    </div>
  </div>
</section>


    </div>
  );
};

export default Home;
