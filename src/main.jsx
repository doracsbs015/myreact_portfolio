import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

// 👇 import BrowserRouter
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProjectDetail from './components/ProjectDetail.jsx'; // new detail page

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        {/* main app route */}
        <Route path="/" element={<App />} />

        {/* project detail route */}
        <Route path="/project/:id" element={<ProjectDetail />} />
      </Routes>
    </Router>
  </StrictMode>,
);
