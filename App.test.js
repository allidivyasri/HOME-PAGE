// src/pages/ContactUs.jsx
import React, { useState } from 'react';
import './ContactUs.css';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    topic: '',
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="contact-page">
      <div className="contact-left">
        <h2>Contact Us, We're Ready to Help!</h2>
        <p>We strive to provide you with the best experience...</p>
        <p>📞 +91 9876543210</p>
        <p>💬 Chat with us: toletglobe@gmail.com</p>
      </div>
      <div className="contact-right">
        <form>
          <select name="topic" onChange={handleChange} value={formData.topic}>
            <option value="">Select a topic</option>
            <option value="service">Service</option>
            <option value="feedback">Feedback</option>
            <option value="other">Other</option>
          </select>
          <input type="text" name="name" placeholder="Your Name" onChange={handleChange} />
          <input type="email" name="email" placeholder="Your Email" onChange={handleChange} />
          <textarea name="message" placeholder="Your Message" onChange={handleChange}></textarea>
          <button type="submit">Submit Query</button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;