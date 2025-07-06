import React from 'react';

function ContactUs() {
  return (
    <div className="contact-us-page">
      <div className="header-section">
        <h1>Contact Us</h1>
        <p>AGRIMO - CONTACT US</p>
      </div>
      <div className="content-section">
        <div className="image-section">
          <img src="/assets/9.png" alt="Contact Farm" />
        </div>
        <div className="text-section">
          <h2>Get in Touch</h2>
          <h3>Reach Out for Support or Queries</h3>
          <p>We are here to assist you with any questions or collaboration opportunities. Feel free to contact us via phone or email for prompt assistance.</p>
          <div className="stats">
            <div className="stat-item">
              <span>📞</span>
              <p>Phone Support</p>
            </div>
            <div className="stat-item">
              <span>✉️</span>
              <p>Email Assistance</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;