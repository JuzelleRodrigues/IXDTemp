import React from "react";
import "./Blog1.css";

const Blog1: React.FC = () => {
  return (
    <div className="Blog-header">
        <div><h1> 01 / PROFESSIONAL HEADSHOT</h1> 
        <img src="1_ThumbnailSize_ProfessionalHeadshot.jpg"></img>
        <p> Commentary</p></div>
        <hr className="project-divider" />
        <img src="Image_2"></img>
        <p> More Commentary</p>
        <hr className="project-divider" />
        <img src="Image_1"></img>
        <p> More Commentary</p>
        <hr className="project-divider" />
    </div>
  );
};

export default Blog1;
