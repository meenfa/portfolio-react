import React from 'react';
import { Routes, Route } from 'react-router-dom'; 
import Main from './pages/Portfolio';
import PoetryPage from './components/PoetryPage';
import './App.css';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/poetry" element={<PoetryPage />} />
      <Route path="*" element={<div>Page not found</div>} />
    </Routes>
  );
};

export default App;