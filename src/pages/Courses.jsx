import React from 'react';
import Card from '../components/Card';
import Button from '../components/Button';
import { FaClock, FaGraduationCap, FaBriefcase } from 'react-icons/fa';
import './Courses.css';

const coursesData = [
 {
  id: 1,
  title: 'NCVTE Diploma in Airport Ground Staff Training',
  duration: '6 Months',
  eligibility: '10+2 Pass ',
  outcome: 'Placement assistance in airlines, airports, and aviation service companies',
description: 'Airport operations training with passenger handling, safety, grooming.'


},
 {
  id: 2,
  title: 'NCVTE Certificate in Air Fares & Ticketing',
  duration: '3 Months',
  eligibility: '10+2 Pass , Basic Computer Knowledge',
  outcome: 'Career opportunities in airline ticketing, travel agencies, and airport reservation departments',
  description: 'Airline fare, ticketing, reservation systems, airport codes, and travel documentation training.'
},
{
  id: 3,
  title: 'Diploma in Aviation Management',
  duration: '12 Months',
  eligibility: '10+2 Pass or Graduation ',
  outcome: 'Management roles in airlines, airports, aviation services, and ground operations',
  description: 'Aviation management training covering operations, leadership, safety, and customer service.'


}

  
];

const Courses = () => {
  return (
    <div className="courses-page">
      <div className="courses-header">
        <div className="container">
          <h1>Our Courses</h1>
          <p>Choose the path that leads to your dream career</p>
        </div>
      </div>

      <div className="container section">
        <div className="courses-grid">
          {coursesData.map((course) => (
            <Card key={course.id} className="course-card">
              <div className="course-content">
                <h2>{course.title}</h2>
                <p className="course-desc">{course.description}</p>
                
                <div className="course-details">
                  <div className="detail-item">
                    <FaClock className="detail-icon" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="detail-item">
                    <FaGraduationCap className="detail-icon" />
                    <span>{course.eligibility}</span>
                  </div>
                  <div className="detail-item">
                    <FaBriefcase className="detail-icon" />
                    <span>{course.outcome}</span>
                  </div>
                </div>

                <Button to="/admissions" className="course-btn">
                  Apply Now
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;
