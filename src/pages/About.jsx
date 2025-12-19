import React from "react";
import Card from "../components/Card";
import {
  FaBullseye,
  FaEye,
  FaAward,
  FaUsers,
  FaPlaneDeparture,
  FaChalkboardTeacher,
  FaUserTie
} from "react-icons/fa";
import "./About.css";

const About = () => {
  return (
    <div className="about-page">

      {/* Hero */}
      <div className="about-header">
        <div className="container">
          <h1 style={{color:"whitesmoke"}}>About Vikas Aviation Academy</h1>
          <p className="about-subtitle">
            Shaping confident aviation professionals for global careers
          </p>
        </div>
      </div>

      {/* Overview */}
      <div className="container section about-content">
        <div className="about-text">
          <h2>Who We Are</h2>
          <p>
            Vikas Aviation Academy is a professional training institute dedicated to
            preparing students for successful careers in the aviation industry.
            Our programs focus on discipline, communication, grooming, and real-world
            airline standards.
          </p>
          <p>
            We ensure every student is industry-ready through structured training,
            expert mentorship, and continuous performance evaluation.
          </p>
        </div>

        {/* Stats */}
        <div className="about-stats">
          <div className="stat-item">
            <FaUsers className="stat-icon" />
            <h3>500+</h3>
            <p>Students Trained</p>
          </div>
          <div className="stat-item">
            <FaAward className="stat-icon" />
            <h3>50+</h3>
            <p>Airline Partners</p>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
<div className="container section">
  <h2 className="section-title">Why Choose Vikas Aviation Academy</h2>

  <div className="why-card-grid">
    <div className="why-card">
      <FaChalkboardTeacher className="why-card-icon" />
      <h3>Industry-Experienced Trainers</h3>
      <p>
        Training by professionals with real airline and airport experience,
        focused on practical skills and confidence.
      </p>
    </div>

    <div className="why-card">
      <FaUserTie className="why-card-icon" />
      <h3>International Grooming Standards</h3>
      <p>
        Structured grooming, communication skills, and personality development
        aligned with global airline expectations.
      </p>
    </div>

    <div className="why-card">
      <FaPlaneDeparture className="why-card-icon" />
      <h3>Strong Placement Support</h3>
      <p>
        Dedicated interview preparation, resume guidance, and continuous
        placement assistance with airline partners.
      </p>
    </div>
  </div>
</div>


      {/* Mission Vision */}
      <div className="mission-vision-section">
        <div className="container">
          <div className="mv-grid">
            <Card className="mv-card">
              <FaBullseye className="mv-icon" />
              <h3>Our Mission</h3>
              <p>
                To provide high-quality aviation training that builds confidence,
                professionalism, and career success.
              </p>
            </Card>
            <Card className="mv-card">
              <FaEye className="mv-icon" />
              <h3>Our Vision</h3>
              <p>
                To become a trusted aviation academy recognized for excellence and
                strong placement outcomes.
              </p>
            </Card>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="container section about-cta">
        <h2>Start Your Aviation Career Today</h2>
        <p>Join Vikas Aviation Academy and take your first step towards the skies.</p>
      </div>

    </div>
  );
};

export default About;
