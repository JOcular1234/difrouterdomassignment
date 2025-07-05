import React from 'react';
import { Link } from 'react-router';

function LandingPage() {
  return (
    <div className="landing-page">
      <div className="content">
        <h1>Quality Trust: <br /> Direct to the Farm</h1>
        <p>We need a little space to grow. Give yourself the space you need to find your inner you.</p>
        
        <Link to="/contactUs" className="btn contact-btn btn-primary">
          Contact Us
        </Link>

      </div>
    </div>
  );
}

export default LandingPage;