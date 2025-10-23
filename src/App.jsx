import React from 'react';
import { Routes, Route } from 'react-router-dom'; 
import Main from './pages/Portfolio';
import PoetryPage from './components/PoetryPage';
import './App.css';

const App = () => {
  return (
    // Remove <Router> wrapper here since it's already in main.jsx
    <Routes>
      {/* portfolio page */}
      <Route path="/" element={<Main />} />

      {/* Poetry page */}
      <Route path="/poetry" element={<PoetryPage />} />
      
      {/* Add a catch-all route for 404 */}
      <Route path="*" element={<div>Page not found</div>} />
    </Routes>
  );
};

export default App;