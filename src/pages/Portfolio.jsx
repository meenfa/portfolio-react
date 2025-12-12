import React, { useState, useEffect } from 'react';
import Hero from '../components/Hero';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Experience from '../components/Experience';
import Footer from '../components/Footer';
import Blogs from '../components/Blogs';
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
        <ProjectsSection />
        <UpcomingProjects />
        <Skills />
        <Experience />
        {/* <About /> */}
        <Blogs />
        <Contact />
        <Footer />
      </div>

    </div>
  );
};

export default Portfolio;
