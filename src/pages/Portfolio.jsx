import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import Hero from '../components/landing/Hero';
import Experience from '../components/landing/Experience';
import ProjectsSection from '../components/landing/ProjectsSection';
import Blogs from '../components/landing/Blogs';
import Skills from '../components/landing/Skills';
import Contact from '../components/landing/Contact';
import UpcomingProjects from '../components/landing/UpcomingProjects';

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
