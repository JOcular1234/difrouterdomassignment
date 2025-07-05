import React from 'react';

function Pages() {
  return (
    <div className="about-us-page">
      <div className="header-section">
        <h1>About Us</h1>
        <p>AGRIMO - ABOUT US</p>
      </div>
      <div className="content-section">
        <div className="image-section">
          <img src="src/assets/womanfarming.png" alt="Farmer Woman" />
        </div>
        <div className="text-section">
          <h2>Who We Are</h2>
          <h3>Currently we are growing and selling organic food</h3>
          <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even.</p>
          <div className="stats">
            
            <div className="stat-item">
              <span>🌱</span>
              <p>Eco Farms Worldwide</p>
            </div>
            <div className="stat-item">
              <span>🚚</span>
              <p>Special Equipment</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pages;