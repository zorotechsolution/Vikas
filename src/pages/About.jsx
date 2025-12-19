import React from 'react';
import Card from '../components/Card';
import { FaBullseye, FaEye, FaAward, FaUsers } from 'react-icons/fa';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <div className="about-header">
        <div className="container">
          <h1>About Vikas Aviation Academy</h1>
        </div>
      </div>

      <div className="container section about-content">
        <div className="about-text">
          <h2>Welcome to the Sky</h2>
          <p>
            Vikas Aviation Academy is a premier institute dedicated to shaping the future of aviation professionals. 
            With a focus on excellence, safety, and Service, we provide world-class training for Cabin Crew, 
            Ground Staff, and Aviation Management.
          </p>
          <p>
            Our curriculum is designed by industry experts to bridge the gap between academic learning and 
            real-world aviation requirements. We believe in holistic development, ensuring our students are not 
            just job-ready but career-ready.
          </p>
        </div>
        <div className="about-stats">
          <div className="stat-item">
            <FaUsers className="stat-icon"/>
            <h3>500+</h3>
            <p>Students Trained</p>
          </div>
          <div className="stat-item">
            <FaAward className="stat-icon"/>
            <h3>50+</h3>
            <p>Airline Partners</p>
          </div>
        </div>
      </div>

      <div className="mission-vision-section">
        <div className="container">
          <div className="mv-grid">
            <Card className="mv-card">
              <FaBullseye className="mv-icon" />
              <h3>Our Mission</h3>
              <p>
                To empower aspiring aviation professionals with top-tier training, skills, and confidence to 
                succeed in the global aviation industry.
              </p>
            </Card>
            <Card className="mv-card">
              <FaEye className="mv-icon" />
              <h3>Our Vision</h3>
              <p>
                To be the most trusted and preferred aviation academy, known for excellence in training 
                and exceptional placement records.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
