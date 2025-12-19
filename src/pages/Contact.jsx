import React from 'react';
import Button from '../components/Button';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaWhatsapp } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-page">
       <div className="contact-header">
        <div className="container">
          <h1 style={{color:"white"}}>Contact Us</h1>
          <p>We'd love to hear from you</p>
        </div>
      </div>

      <div className="container section contact-content">
        <div className="contact-info">
            <h2>Get in Touch</h2>
            <p className="contact-desc">
                Have questions about our courses or admissions? Reach out to us directly or fill the form.
            </p>
            
            <div className="info-item">
                <FaMapMarkerAlt className="info-icon" />
                <div>
                    <h3>Visit Us</h3>
                    <p>14-4C, Thattan Vilai Rd, Udhayamarthandam, Nagercoil, Tamil Nadu 629004</p>
                </div>
            </div>

            <div className="info-item">
                <FaPhoneAlt className="info-icon" />
                <div>
                    <h3>Call Us</h3>
                    <p>+91 94878 06735,</p>
                    <p>+91 94871 87384</p>
                </div>
            </div>

            <div className="info-item">
                <FaEnvelope className="info-icon" />
                <div>
                    <h3>Email Us</h3>
                    <p>vikasaviationacademy@gmail.com</p>
                </div>
            </div>

            {/* <div className="info-item">
                <FaWhatsapp className="info-icon" />
                <div>
                    <h3>WhatsApp</h3>
                    <p>+91 98765 43210</p>
                </div>
            </div> */}
        </div>

        <div className="contact-form-wrapper">
             <form className="contact-form">
                <h3>Send Message</h3>
                <div className="form-group">
                    <label>Name</label>
                    <input type="text" placeholder="Your Name" required />
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input type="email" placeholder="Your Email" required />
                </div>
                 <div className="form-group">
                    <label>Phone</label>
                    <input type="tel" placeholder="Your Phone" required />
                </div>
                <div className="form-group">
                    <label>Message</label>
                    <textarea rows="5" placeholder="How can we help you?" required></textarea>
                </div>
                <Button className="contact-btn">Send Message</Button>
            </form>
        </div>
      </div>

      <div className="map-section">
        {/* Google Map Embed Placeholder */}
        <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3753.909023789869!2d77.4240478!3d8.1706843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e78a7f9bfd87461%3A0x85d90f80b46dc1f5!2sVikas%20Aviation%20Academy!5e1!3m2!1sen!2sin!4v1766055400611!5m2!1sen!2sin" 
            width="100%" 
            height="450" 
            frameBorder="0" 
            style={{border:0}} 
            allowFullScreen="" 
            aria-hidden="false" 
            tabIndex="0"
            title="Location Map"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
