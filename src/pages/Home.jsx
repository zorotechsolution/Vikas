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
    <div className="hero-btns" >
      <Button to="/admissions" className="hero-btn-primary">
        Apply Now
      </Button>
      <Button to="/contact" type="outline" className="hero-btn-outline" >
        Enquire Today
      </Button>
    </div>
  </div>
</div>

<div class="feature-box-wrapper">
  <div class="feature-box">
    <div class="icon"><i class="fa-solid fa-plane-departure"></i></div>
    <h3>Flight Simulator</h3>
    <p>Advanced flight simulator training for real scenarios.</p>
  </div>

  <div class="feature-box">
    <div class="icon"><i class="fa-solid fa-suitcase-rolling"></i></div>
    <h3>Ground Staff training</h3>
    <p>Professional Ground Staff Training for Aviation Careers.</p>
  </div>

  <div class="feature-box">
    <div class="icon"><i class="fa-brands fa-space-awesome"></i></div>
    <h3>Cockpit Trainings</h3>
    <p>Professional cockpit training for real flight operations.</p>
  </div>
</div>



      {/* Highlights Section */}
      <section className="section " style={{padding:"40px", marginTop:"150px"}}>
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

<section class="about-section">
  <div class="about-container">

    <div class="about-text">
      <span class="tagline">WELCOME TO AVIATIONLY</span>
      <h2>Your trusted academy for aviation and flight training.</h2>
      <p>
       We provide industry focused aviation training with experienced instructors, modern simulators, and global standards, helping students build confidence, safety awareness, and professional skills for successful airline careers worldwide today professionally.
      </p>
      <a href="/about" class="about-btn">About Us</a>
    </div>

    <div class="about-image-box">
      <img src="https://flightwingsaviationglobal.com/wp-content/uploads/2021/09/fhjkjlk-300x188.jpg" alt="Cabin Crew" />
    </div>

  </div>

  <div class="stats-container">
    <div class="stat">
      <h3>1<span>+</span></h3>
      <p>Training Locations</p>
    </div>
    <div class="stat">
      <h3>3<span>+</span></h3>
      <p>Courses</p>
    </div>
    <div class="stat">
      <h3>25<span>+</span></h3>
      <p>Testimonials</p>
    </div>
    <div class="stat">
      <h3>10<span>+</span></h3>
      <p>Graduates </p>
    </div>
  </div>
</section>
<section class="why-choose-section">
  <div class="why-container">

    {/*  Image Box  */}
    <div class="image-stack">
      <div class="img-back">
        <img src="https://ik.imagekit.io/zorotech/vikas/DSC_5195.JPG" alt="Pilot Training"/>
      </div>
      <div class="img-front">
        <img src="https://ik.imagekit.io/zorotech/vikas/DSC_5183.JPG" alt="Cabin Crew"/>
      </div>
    </div>

    {/* Content */}
    <div class="why-content">
      <span class="subtitle">WHY CHOOSE US</span>
      <h2>Student about the<br/>training team</h2>
      <p>
        This also meant we needed to provide a learning environment run by
        experienced and successful coaches.
      </p>

      <div class="features">
        <ul>
          <li>Professional teacher</li>
          <li>Have been certified</li>
          <li>Quality of our research</li>
          <li>Breadth of our capabilities</li>
        </ul>
        <ul>
          <li>Trustworthy</li>
          <li>High integrity</li>
          <li>Providing the best courses</li>
          <li>Providing the best courses</li>
        </ul>
      </div>
    </div>

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
      <Button to="/courses" className="">View Courses</Button>
      <p className="cta-note">Limited seats available. Early applicants get priority.</p>
    </div>
  </div>
</section>

<section className="training-section"> 
  <div className="container">
    <h2 className="section-title" style={{color:"whitesmoke"}}>Our Training Approach</h2>

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

<section class="programs-section">
  <div class="programs-header">
    <div>
      <span class="tag">OUR PROGRAMS</span>
      <h2>Great programs</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Ut elit tellus, luctus nec ullamcorper mattis.
      </p>
    </div>

    <a href="/courses" class="view-btn">View All Programs</a>
  </div>

  <div class="programs-grid">
    <div class="program-card">
      <img src="https://ik.imagekit.io/zorotech/vikas/image.png" alt="Flight Instructor" />
      <h3>NCVTE Diploma in Airport Ground Staff Training</h3>
      <p>Airport operations training with passenger handling, safety, grooming.</p>
      <a href="/courses">Learn More →</a>
    </div>

    <div class="program-card">
      <img src="https://ik.imagekit.io/zorotech/vikas/image2.png" alt="Commercial Pilot" />
      <h3>NCVTE Certificate in Air Fares & Ticketing</h3>
      <p>Airline fare, ticketing, reservation systems, airport codes, and travel documentation training.</p>
      <a href="/courses">Learn More →</a>
    </div>

    <div class="program-card">
      <img src="https://ik.imagekit.io/zorotech/vikas/image1.png" alt="Multi Engine" />
      <h3>Diploma in Aviation Management Staff Training</h3>
      <p>Aviation management training covering operations, leadership, safety, and customer service.</p>
      <a href="/courses">Learn More →</a>
    </div>
  </div>
</section>



    </div>
  );
};

export default Home;
