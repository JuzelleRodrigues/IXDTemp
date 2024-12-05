import React from "react";
import { Link } from "react-router-dom";
import "./Blog.css";

const Blog: React.FC = () => {
  return (
    <>
      <div className="blog-header">
        <div className="image-container">
          <img
            className="background-image"
            src="fastfashion.jpg"
            alt="Background"
          />
        </div>
        <div className="overlay" />
        <div className="content-container">
          <div className="title">
            Insights about my personal and work life, and the in-betweens
          </div>
          <div className="subtitle">20 October 2024 - PERSONAL BLOG</div>
        </div>
      </div>

      <section>
        <div className="blog-page">
          {/* Project 1 */}
          <div className="project-section">
            <h2 className="project-title">01 / PROFESSIONAL HEADSHOT</h2>
            <img
              className="project-image"
              src="1_ThumbnailSize_ProfessionalHeadshot.jpg"
              alt="Description of the image"
            />
            <p className="project-description">As Professional as it gets</p>
            <p className="project-details">
              A Creative Thinker, Strategic Doer; Coffee-Fueled Problem Solver
            </p>
            <p className="project-link">
              <Link to="/Blog1">Technical Commentary ↗</Link>
            </p>
            <hr className="project-divider" />
          </div>

          {/* Project 2 */}
          <div className="project-section">
            <h2 className="project-title">02 / AN AESTHETIC/ DRAMATIC SHOT</h2>
            <img
              className="project-image"
              src="2_ThumbnailSize_Aesthetic_Dramatic.jpg"
              alt="Description of the image"
            />
            <p className="project-description">
              Dreamlike Escape; a Glimpse of Nature's Beauty
            </p>
            <p className="project-link">
              <Link to="/Blog2">Read More ↗</Link>
            </p>
            <hr className="project-divider" />
          </div>

          {/* Project 3 */}
          <div className="project-section">
            <h2 className="project-title">03 / A SHOT THAT DESRCIBES YOU </h2>
            <img
              className="project-image"
              src="3_ThumbnailSize_DescribesYou.jpg"
              alt="Description of the image"
            />
            <p className="project-description">
              A Visual Representation: Me, in a Nutshell (or a Frame)
            </p>
            <p className="project-link">
              <Link to="/Blog3">View Details ↗</Link>
            </p>
            <hr className="project-divider" />
          </div>

          {/* Project 4 */}
          <div className="project-section">
            <h2 className="project-title">
              04 / SPAGHETTTIN’ Things Done Right!{" "}
            </h2>
            <img
              className="project-image"
              src="Pasta.jpg"
              alt="Description of the image"
            />
            <p className="project-description">
              A Visual Representation: Me, in a Nutshell (or a Frame)
            </p>
            <p className="project-link">
              <Link to="/Blog4">View Video ↗</Link>
            </p>
            <hr className="project-divider" />
          </div>

          {/* Project 5 */}
          <div className="project-section">
            <h2 className="project-title">
              05 / SOME POPCORN, YOUR FUR BUDDY, AND YOU'RE READY TO GO!
            </h2>
            <img
              className="project-image"
              src="Dog Movies.jpg"
              alt="Description of the image"
            />
            <p className="project-description">
              A Visual Representation: Me, in a Nutshell (or a Frame)
            </p>
            <a
              href="https://elle.in/13-happy-dog-movies-to-watch/"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              View Details →
            </a>
            <hr className="project-divider" />
          </div>

          {/* Project 6 */}
          <div className="project-section">
            <h2 className="project-title">
              06 / HOW YOUR WARDROBE IS AFFECTING THE WORLD!
            </h2>
            <img
              className="project-image"
              src="fastfashion.jpg"
              alt="Description of the image"
            />
            <p className="project-description">
              A Visual Representation: Me, in a Nutshell (or a Frame)
            </p>
            <a
              href="https://elle.in/perils-of-fast-fashion-movies-and-documentaries/"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              View Details →
            </a>
            <hr className="project-divider" />
          </div>

          {/* Project 7 */}
          <div className="project-section">
            <h2 className="project-title">07 / HENNA FOR THE WIN</h2>
            <img
              className="project-image"
              src="Henna.jpg"
              alt="Description of the image"
            />
            <p className="project-description">
              A Visual Representation: Me, in a Nutshell (or a Frame)
            </p>
            <a
              href="https://elle.in/18-contemporary-mehndi-patterns-for-this-wedding-season/"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              View Details →
            </a>
            <hr className="project-divider" />
          </div>

          {/* Project 8 */}
          <div className="project-section">
            <h2 className="project-title">
              08 / DEVIL IN THE EYES, DEVIL IN DISGUISE
            </h2>
            <img
              className="project-image"
              src="Halloween.jpg"
              alt="Description of the image"
            />
            <p className="project-description">
              A Visual Representation: Me, in a Nutshell (or a Frame)
            </p>
            <a
              href="https://elle.in/glamorous-halloween-makeup-looks/"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              View Details →
            </a>
            <hr className="project-divider" />
          </div>
        </div>
      </section>
    </>
  );
};
export default Blog;
