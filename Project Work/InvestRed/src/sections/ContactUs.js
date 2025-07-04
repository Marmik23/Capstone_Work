// src/pages/ContactUs.js
import React, { useState } from 'react';
import '../styles/index.css';

const ContactUs = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message submitted! (Functionality can be connected to backend)');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="investment-page">
      <h1>Contact Us</h1>

      <section className="investment-overview">
        <p>If you have any questions, feedback, or need investment guidance, our team is here to help.</p>
      </section>

      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label>Name:</label>
          <input type="text" name="name" required value={formData.name} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label>Email:</label>
          <input type="email" name="email" required value={formData.email} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label>Message:</label>
          <textarea name="message" required value={formData.message} onChange={handleChange}></textarea>
        </div>

        <div className="cta-buttons">
          <button type="submit">Send Message</button>
        </div>
      </form>
    </div>
  );
};

export default ContactUs;
