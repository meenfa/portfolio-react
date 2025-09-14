import React, { useState, useEffect } from 'react';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Education from '../components/Education';
import Contact from '../components/Contact';
import Experience from '../components/Experience';
import Blog from '../components/Blog';

const Portfolio = () => {
    const [activeSection, setActiveSection] = useState('about');
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    // Handle URL hash changes
    useEffect(() => {
        const handleHashChange = () => {
            const hash = window.location.hash.replace('#', '');
            if (hash && ['about', 'skills', 'experience', 'projects', 'education', 'contact','blog'].includes(hash)) {
                setActiveSection(hash);
                scrollToSection(hash);
            }
        };

        // Initial load
        const hash = window.location.hash.replace('#', '');
        if (hash) {
            setActiveSection(hash);
            setTimeout(() => scrollToSection(hash), 100);
        }

        window.addEventListener('hashchange', handleHashChange);
        return () => window.removeEventListener('hashchange', handleHashChange);
    }, []);

    const scrollToSection = (sectionId) => {
        setActiveSection(sectionId);
        const element = document.getElementById(sectionId);
        if (element) {
            const offset = 80;
            const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });

            // Update URL hash without scrolling
            window.history.replaceState(null, null, `#${sectionId}`);
        }
        setMobileMenuOpen(false);
    };

    const handleNavClick = (sectionId) => {
        // Update URL for direct navigation
        window.location.hash = sectionId;
        scrollToSection(sectionId);
    };

    return (
        <div className="min-h-screen bg-white/80 text-gray-800 ">
            <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 h-16 ">
                <div className="mx-auto px-2 max-w-3xl h-full">
                    <div className="flex justify-between items-center h-full">
                        <div
                            className="flex items-center cursor-pointer"
                            onClick={() => handleNavClick('about')}
                        >
                            <span className="text-xl font-bold text-black">अंकित.</span>
                        </div>

                        <div className="hidden md:flex items-center space-x-6">
                            {['about',  'skills', 'experience','projects', 'education', 'contact','blog'].map((section) => (
                                <button
                                    key={section}
                                    onClick={() => handleNavClick(section)}
                                    className={`text-sm font-medium cursor-pointer transition-colors ${activeSection === section ? 'text-black' : 'text-gray-500 hover:text-black'}`}
                                >
                                    {section.charAt(0).toUpperCase() + section.slice(1)}
                                </button>
                            ))}
                        </div>

                        <div className="md:hidden">
                            <button
                                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                                className="text-black hover:text-black focus:outline-none"
                            >
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    {mobileMenuOpen ? (
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    ) : (
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                    )}
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                {mobileMenuOpen && (
                    <div className="md:hidden bg-white absolute top-16 w-full border-b border-gray-200">
                        <div className="px-6 py-2 space-y-2">
                            {['about', 'experience', 'skills', 'projects', 'education', 'contact','blogs'].map((section) => (
                                <button
                                    key={section}
                                    onClick={() => handleNavClick(section)}
                                    className={`block w-full text-left py-2 text-sm font-medium ${activeSection === section ? 'text-black' : 'text-gray-500 hover:text-black'}`}
                                >
                                    {section.charAt(0).toUpperCase() + section.slice(1)}
                                </button>
                            ))}
                        </div>
                    </div>
                )}
            </nav>

            <div className="pt-12">
                <About />
                <Skills />
                <Experience />
                <Projects />
                <Education />
                <Blog />
                <Contact />
                
            </div>

            <footer className="border-t border-gray-300 py-4 text-gray-500 bg-white">
                <div className="mx-auto px-6 text-center text-xs max-w-3xl">
                    © {new Date().getFullYear()} Ankit Karki. All rights reserved.
                </div>
            </footer>
        </div>
    );
};

export default Portfolio;