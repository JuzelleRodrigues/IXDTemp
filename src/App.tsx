import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '../src/Components/Navbar';
import Footer from '../src/Components/Footer';
import Home from '../src/Pages/Home';
import About from '../src/Pages/About';
import Projects from '../src/Pages/Projects';
import Blog from '../src/Pages/Blog';
import Blog1 from '../src/Pages/Blog1';
import Blog2 from '../src/Pages/Blog2';
import Blog3 from "../src/Pages/Blog3";
import Blog4 from "../src/Pages/Blog4";
import Contact from '../src/Pages/Contact';

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog1" element={<Blog1 />} />
          <Route path="/blog2" element={<Blog2 />} />
          <Route path="/blog3" element={<Blog3 />} />
          <Route path="/blog4" element={<Blog4 />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
