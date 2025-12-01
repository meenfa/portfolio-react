import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from './pages/Portfolio';
import PoetryPage from './components/PoetryPage';
import './App.css';
import Projects from './components/Projects';
import Blogs from './components/Blogs';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/poetry" element={<PoetryPage />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="*" element={<div>Page not found</div>} />
    </Routes>
  );
};

export default App;