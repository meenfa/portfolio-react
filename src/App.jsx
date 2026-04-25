import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from './pages/Portfolio';

import './App.css';

import PoetryPage from './components/Page/PoetryPage';
import ProjectsPage from './components/Page/ProjectsPage';
import ExperiencePage from './components/Page/ExperiencePage';
import BlogsPage from './components/Page/BlogsPage';
import PageNotFound from "./components/Page/PageNotFound";
import BlogPostPage from './components/Page/BlogPostPage';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/poetry" element={<PoetryPage />} />
      <Route path="/projects" element={<ProjectsPage />} />
      <Route path="/blogs" element={<BlogsPage />} />
      <Route path="/work" element={<ExperiencePage />} />
      <Route path="/blog/:slug" element={<BlogPostPage />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default App;