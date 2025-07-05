import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Pages from './components/Pages';
import Services from './components/Services';
import './index.css';
import Blog from './components/Blog';
import ContactUs from './components/ContactUs';
import Portfolio from './components/Portfolio';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <div className="nav-container">
          <div className="logo">
            <img src="/assets/farming logo.png" alt="Logo" />
          </div>
          <nav>
            <ul className="nav-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/pages">About Us</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/portfolio">Portfolio</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/contactus">Contact Us</Link></li>
            </ul>
          </nav>
          <div className="call-to-action">
            <p>Call us Now: +1(212)255-5511</p>
            <button className="get-in-touch-btn">Get in Touch</button>
          </div>
        </div>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/pages" element={<Pages />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/aboutus" element={<Pages />} />
          <Route path="*" element={<div>404 Not Found</div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;