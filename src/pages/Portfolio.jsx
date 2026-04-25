import React, { useState, useEffect } from 'react';
import Hero from '../components/Hero';
import Skills from '../components/Skills';
import Contact from '../components/Contact';
import Experience from '../components/Experience';
import Footer from '../components/Footer';
import Blogs from '../components/Blogs';
import About from '../components/About';
import { useNavigate } from 'react-router-dom';
import UpcomingProjects from '../components/UpcomingProjects';
import Navbar from '../components/Navbar';
import ProjectsSection from '../components/ProjectsSection';

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900 ">

      <div className="pt-16">
        <Navbar />
        <Hero />
        <Experience />
        <ProjectsSection />
        {/* <UpcomingProjects /> */}
        <Blogs />
        <Skills />
        <Contact />
        <Footer />
      </div>

    </div>
  );
};

export default Portfolio;
