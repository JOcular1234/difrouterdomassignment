import React from 'react';

function Blog() {
  return (
    <div className="blog-page">
      <div className="header-section">
        <h1>Our Blog</h1>
        <p>AGRIMO - BLOG</p>
      </div>
      <div className="content-section">
        <div className="image-section">
          <img src="src/assets/Container33.png" alt="Farming Blog" />
        </div>
        <div className="text-section">
          <h2>Latest Updates</h2>
          <h3>Insights on Organic Farming</h3>
          <p>Stay updated with our latest articles on organic farming techniques, seasonal tips, and industry news to help you grow your farm sustainably.</p>
          <div className="stats">
            <div className="stat-item">
              <span>📝</span>
              <p>Articles Published</p>
            </div>
            <div className="stat-item">
              <span>👥</span>
              <p>Community Readers</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;