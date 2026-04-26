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
import FadeUp from '../components/ui/motion/FadeUp';

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900 ">
      <div className="pt-16">
        <Navbar />
        <Hero />
         <FadeUp delay={0.1}>
        <Experience />
        </FadeUp>
          <FadeUp delay={0.15}>
          <ProjectsSection />
        </FadeUp>

        <FadeUp delay={0.2}>
          <Blogs />
        </FadeUp>

        <FadeUp delay={0.25}>
          <Skills />
        </FadeUp>

        <FadeUp delay={0.3}>
          <Contact />
        </FadeUp>

        <Footer />
      </div>

    </div>
  );
};

export default Portfolio;
