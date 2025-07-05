import React from 'react';

function Services() {
  return (
    <div className="services-page">
      <div className="header-section">
        <h1>Our Services</h1>
        <p>AGRIMO - SERVICES</p>
      </div>
      <div className="content-section">
        <div className="image-section">
          <img src="src/assets/Container.png" alt="Farming Services" />
        </div>
        <div className="text-section">
          <h2>What We Offer</h2>
          <h3>Providing Top-Quality Agricultural Services</h3>
          <p>We offer a range of services including organic farming consultation, crop management, and sustainable farming practices to ensure the best yield and eco-friendly solutions.</p>
          <div className="stats">
            <div className="stat-item">
              <span>🌱</span>
              <p>Organic Farming</p>
            </div>
            <div className="stat-item">
              <span>🚜</span>
              <p>Equipment Support</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;