import React from 'react';
import Card from '../components/Card';
import Button from '../components/Button';
import { FaClock, FaGraduationCap, FaBriefcase } from 'react-icons/fa';
import './Courses.css';

const coursesData = [
  {
    id: 1,
    title: 'Diploma in Cabin Crew Training',
    duration: '11 Months',
    eligibility: '12th Pass / Graduate',
    outcome: 'Flight Attendant, In-flight Services',
    description: 'Master the art of in-flight services, safety procedures, and passenger handling to become a world-class cabin crew member.'
  },
  {
    id: 2,
    title: 'Airport Ground Staff Services',
    duration: '6 Months',
    eligibility: '12th Pass (Any Stream)',
    outcome: 'Check-in Agent, Customer Service Executive',
    description: 'Learn the intricacies of airport operations, from check-in procedures to ramp handling and passenger assistance.'
  },
  {
    id: 3,
    title: 'Aviation Hospitality & Management',
    duration: '12 Months',
    eligibility: '12th Pass / Graduate',
    outcome: 'Airport Manager, Lounge Host, VIP Handling',
    description: 'A comprehensive course covering aviation management, hospitality, and luxury service standards.'
  },
  {
    id: 4,
    title: 'Travel & Tourism Management',
    duration: '6 Months',
    eligibility: '10th / 12th Pass',
    outcome: 'Travel Consultant, Tour Operator',
    description: 'Explore the travel industry with training in ticketing, itinerary planning, and global tourism.'
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
