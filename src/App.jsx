import React from 'react';
import { Routes, Route } from 'react-router-dom';
// import Main from './pages/Port';
import Main from './pages/Main Portfolio';
import PoetryPage from './components/PoetryPage';
import './App.css';

const App = () => {
  return (
    <div>
      <Routes>
        {/* Main portfolio page */}
        <Route path="/" element={<Main />} />

        {/* Poetry page */}
        <Route path="/poetry" element={<PoetryPage />} />
      </Routes>
    </div>
  );
};

export default App;
