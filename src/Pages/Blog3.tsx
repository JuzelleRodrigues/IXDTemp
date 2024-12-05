import React from "react";
import "./Blog3.css";

const Blog3: React.FC = () => {
  return (
    <div className="blog-page">
      <div className="blog-item">
        <div className="blog-image-container">
          <img
            className="blog-image"
            src="3_ThumbnailSize_DescribesYou.jpg"
            alt="Blog Illustration"
          />
        </div>
        <div className="blog-content">
          <h2 className="blog-title">Blog Title Goes Here</h2>
          <p className="blog-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod
            malesuada.
          </p>
          <a href="/blog-details" className="blog-link">
            Read More →
          </a>
        </div>
      </div>
    </div>
  );
};

export default Blog3;
