import React from 'react';
import Card from '../components/Card';
import './Placements.css';

const placementsData = [
  { id: 1, name: 'Anjali Singh', airline: 'IndiGo', role: 'Cabin Crew', quote: 'Vikas gave me the confidence to fly high!' },
  { id: 2, name: 'Rahul Sharma', airline: 'Air India', role: 'Ground Staff', quote: 'The training infrastructure is world-class.' },
  { id: 3, name: 'Priya Patel', airline: 'Emirates', role: 'Cabin Crew', quote: 'I am living my dream thanks to the expert faculty.' },
];

const partners = ['IndiGo', 'SpiceJet', 'Air India', 'Vistara', 'Emirates', 'Qatar Airways', 'Lufthansa', 'British Airways'];

const Placements = () => {
  return (
    <div className="placements-page">
       <div className="placements-header">
        <div className="container">
          <h1>Placements</h1>
          <p>Our Success Stories</p>
        </div>
      </div>

      <div className="section container">
        <h2 className="section-header-text">Our Recruiting Partners</h2>
        <div className="partners-grid">
           {partners.map((partner, index) => (
               <div key={index} className="partner-logo">
                   {/* Placeholder for Logos */}
                   <span>{partner}</span>
               </div>
           ))}
        </div>
      </div>

       <div className="section container bg-light">
        <h2 className="section-header-text">Student Testimonials</h2>
        <div className="testimonials-grid">
            {placementsData.map((student) => (
                <Card key={student.id} className="testimonial-card">
                    <p className="quote">"{student.quote}"</p>
                    <div className="student-info">
                        <div className="student-avatar">{student.name.charAt(0)}</div>
                        <div>
                            <h4>{student.name}</h4>
                            <p>{student.role}, {student.airline}</p>
                        </div>
                    </div>
                </Card>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Placements;
