import React, { useRef } from 'react';
import Button from '../components/Button';
import './Admissions.css';
import { FaFileAlt, FaUserTie, FaCheckCircle } from 'react-icons/fa';
import emailjs from "@emailjs/browser"

const Admissions = () => {

  const formRef = useRef();

  const sendEmail =async (e)=>{
    e.preventDefault();

  try{
       await emailjs
       .sendForm(
      "service_2b06l3w",
      "template_gw4d6la",
      formRef.current,
      "7y3DmmJwMX1nxV6YL",
    )
    alert("Successfully send")
    }
    catch(err){

       alert(err);
    
    }
    finally{
         console.log("EmailJS request completed");
         formRef.current.reset();
    }
  }

  return (
    <div className="admissions-page">

      {/* Header */}
      <div className="courses-header">
        <div className="container">
          <h1 style={{color:'whitesmoke'}}>Admission</h1>
          <p style={{color:"whitesmoke"}}>Begin your journey towards a professional aviation career</p>
        </div>
      </div>

      {/* Admission Process */}
      <div className="section container">
        <h2 className="page-title center">Admission Process</h2>

        <div className="steps-container">
          <div className="step-item">
            <div className="step-icon-wrapper"><FaFileAlt /></div>
            <h3>Apply Online</h3>
            <p>Submit your application form with basic personal and academic details.</p>
          </div>

          <div className="step-line"></div>

          <div className="step-item">
            <div className="step-icon-wrapper"><FaUserTie /></div>
            <h3>Counseling Session</h3>
            <p>Attend a free counseling session to understand course structure and career scope.</p>
          </div>

          <div className="step-line"></div>

          <div className="step-item">
            <div className="step-icon-wrapper"><FaCheckCircle /></div>
            <h3>Confirm Admission</h3>
            <p>Complete documentation and confirm your seat for the upcoming batch.</p>
          </div>
        </div>
        
      </div>
      <div className="" style={{width: "90%",margin:"auto"}}>
        <hr />
      </div>
      

      {/* Eligibility */}
      <div className="section bg-light">
        <div className="container eligibility-section">
          <h2 className="section-title">Eligibility Criteria</h2>
          <ul className="eligibility-list">
            <li>Minimum qualification: 10+2 (Any Stream)</li>
            <li>Age requirement: 18 years and above</li>
            <li>Good communication skills preferred</li>
            <li>Passion for aviation and customer service</li>
          </ul>
        </div>
      </div>
      <div className="" style={{width: "90%",margin:"auto"}}>
        <hr />
      </div>

      {/* Application Form */}
      <div className="section container">
        <div className="admission-form-container">
          <h2>Application Form</h2>

          <p className="form-intro">
            Fill in the details below and our admission team will contact you shortly.
          </p>

          <form className="admission-form" onSubmit={sendEmail} ref={formRef}>
            <div className="form-group">
              <label>Full Name</label>
              <input type="text" name='full_name' placeholder="Enter your name" required />
            </div>

            <div className="form-group">
              <label>Email Address</label>
              <input type="email" name='email' placeholder="Enter your email" required />
            </div>

            <div className="form-group">
              <label>Phone Number</label>
              <input type="tel" name="phone" placeholder="Enter your phone number" required />
            </div>

            <div className="form-group">
              <label>Interested Course</label>
              <select name="course" required defaultValue="">
                <option value="" disabled>Select a course</option>
                <option value="Airport Ground Staff">Airport Ground Staff</option>
                <option value="Air Fares & Ticketing">Air Fares & Ticketing</option>
                <option value="aviation-management">Aviation Management</option>
              </select>
            </div>

            <div className="form-group">
              <label>Educational Qualification</label>
              <select name="qualification" required defaultValue="">
                <option value="" disabled>Select qualification</option>
                <option value="12th">12th Pass</option>
                <option value="graduate">Graduate</option>
                <option value="post-graduate">Post Graduate</option>
              </select>
            </div>

            <Button type="primary" className="submit-btn">Submit Application</Button>
          </form>
        </div>
      </div>

    </div>
  );
};

export default Admissions;
