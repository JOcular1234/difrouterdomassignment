import React from 'react';

function Portfolio() {
  return (
    <div className="portfolio-page">
      <div className="header-section">
        <h1>Our Portfolio</h1>
        <p>AGRIMO - PORTFOLIO</p>
      </div>
      <div className="content-section">
        <div className="image-section">
          <img src="src/assets/Container2.png" alt="Farm Portfolio" />
        </div>
        <div className="text-section">
          <h2>Our Projects</h2>
          <h3>Showcasing Our Successful Farms</h3>
          <p>Explore our portfolio of successful organic farms and agricultural projects that highlight our commitment to sustainable growth and high-quality produce.</p>
          <div className="stats">
            <div className="stat-item">
              <span>🌾</span>
              <p>Completed Projects</p>
            </div>
            <div className="stat-item">
              <span>📸</span>
              <p>Photo Gallery</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;