import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from './pages/Portfolio';
import PoetryPage from './components/PoetryPage';
import './App.css';
import Projects from './components/Projects';
import Blogs from './components/Blogs';
import ProjectsPage from './components/ProjectsPage';
import ExperiencePage from './components/ExperiencePage';
import BlogsPage from './components/BlogsPage';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/poetry" element={<PoetryPage />} />
      <Route path="/projects" element={<ProjectsPage />} />
      <Route path="/blogs" element={<BlogsPage />} />
      <Route path="/work-experience" element={<ExperiencePage />} />
      <Route path="*" element={<div>Page not found</div>} />
    </Routes>
  );
};

export default App;