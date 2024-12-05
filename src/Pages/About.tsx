import React from "react";
import "./About.css";

const About: React.FC = () => {
  return (
    <div className="about-page">
      <div className="image-container">
        <img className="image" src="Volar" alt="Placeholder" />
      </div>

      <div className="header-top">
        <div className="logo-section">
          <div className="logo-icon">
            <div className="logo-bar"></div>
            <div className="logo-bar offset"></div>
          </div>
          <div className="logo-text">
            <div className="logo-name">
              <span className="logo-bold">Juzelle </span>
              <span className="logo-medium">Rodrigues</span>
            </div>
            <div className="logo-symbol">®</div>
          </div>
        </div>
        <div className="menu-section">
          <span className="menu-text">MENU</span>
        </div>
      </div>
      <div className="header-title">
        <span className="title-bold">Juzelle Rodrigues</span>
        <br />
        <span className="title-light">Digital Design</span>
      </div>
      <div className="scroll-indicator">
        <div className="indicator-icon">
          <div className="indicator-line"></div>
          <div className="indicator-arrow"></div>
        </div>
      </div>

      <div className="about-container">
        {/* Left Section */}
        <div className="about-text">
          <span className="text-light">
            From art to technology, we transform visions into extraordinary{" "}
          </span>
          <span className="text-bold">digital experiences</span>
          <span className="text-light">
            {" "}
            - your design, our passion, an exceptional future
          </span>
        </div>
        {/* Right Section */}
        <div className="about-box">
          <div className="about-heading">About Me</div>
          <div className="icon-section">
            <div className="icon"></div>
            <div className="icon"></div>
            <div className="icon"></div>
            <div className="icon"></div>
          </div>
        </div>
      </div>

      <div className="container">
        <img className="image" src="/images/what-i-do.jpg" alt="What I Do" />
        <div className="content">
          <div className="title">What I do</div>
          <div className="services">
            <div className="service">
              <div className="service-header">
                <span className="service-id">01</span>
                <span className="service-title">Digital Design</span>
              </div>
              <div className="service-description">
                I craft captivating digital designs that captivate and motivate
                your audience. Allow me to breathe life into your brand with my
                expertise.
              </div>
            </div>
            <div className="divider"></div>
            <div className="service">
              <div className="service-header">
                <span className="service-id">02</span>
                <span className="service-title">Art Direction</span>
              </div>
              <div className="service-description">
                My proficiency in art direction guarantees that your project
                aligns with your brand, conveys your message effectively, and is
                visually striking. Let's collaborate to narrate your story.
              </div>
            </div>
            <div className="divider"></div>
            <div className="service">
              <div className="service-header">
                <span className="service-id">03</span>
                <span className="service-title">Interaction Design</span>
              </div>
              <div className="service-description">
                I have a specialization in creating user experiences that are
                not only functional but also aesthetically pleasing and
                user-friendly.
              </div>
            </div>
            <div className="divider"></div>
            <div className="service">
              <div className="service-header">
                <span className="service-id">04</span>
                <span className="service-title">Motion Design</span>
              </div>
              <div className="service-description">
                From dynamic logos to informative explainer videos, I infuse
                life into your message through visually mesmerizing motion
                design.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
