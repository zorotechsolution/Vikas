import React from 'react';
import Button from '../components/Button';
import './Admissions.css';
import { FaFileAlt, FaUserTie, FaCheckCircle } from 'react-icons/fa';

const Admissions = () => {
  return (
    <div className="admissions-page">
      <div className="section container">
        <h1 className="page-title center">Admission Process</h1>
        
        <div className="steps-container">
            <div className="step-item">
                <div className="step-icon-wrapper"><FaFileAlt /></div>
                <h3>1. Apply Online</h3>
                <p>Fill out the admission form below with your details.</p>
            </div>
            <div className="step-line"></div>
            <div className="step-item">
                <div className="step-icon-wrapper"><FaUserTie /></div>
                <h3>2. Counseling</h3>
                <p>Attend a free counseling session with our experts.</p>
            </div>
            <div className="step-line"></div>
            <div className="step-item">
                <div className="step-icon-wrapper"><FaCheckCircle /></div>
                <h3>3. Admission</h3>
                <p>Submit documents and secure your seat.</p>
            </div>
        </div>

        <div className="admission-form-container">
            <h2>Application Form</h2>
            <form className="admission-form">
                <div className="form-group">
                    <label>Full Name</label>
                    <input type="text" placeholder="Enter your name" required />
                </div>
                <div className="form-group">
                    <label>Email Address</label>
                    <input type="email" placeholder="Enter your email" required />
                </div>
                <div className="form-group">
                    <label>Phone Number</label>
                    <input type="tel" placeholder="Enter your phone number" required />
                </div>
                <div className="form-group">
                    <label>Interested Course</label>
                    <select required defaultValue="">
                        <option value="" disabled>Select a course</option>
                        <option value="cabin-crew">Diploma in Cabin Crew Training</option>
                        <option value="ground-staff">Airport Ground Staff Services</option>
                        <option value="hospitality">Aviation Hospitality & Management</option>
                        <option value="travel">Travel & Tourism Management</option>
                    </select>
                </div>
                 <div className="form-group">
                    <label>Educational Qualification</label>
                    <select required defaultValue="">
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
