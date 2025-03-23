// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './Components/Header';
import Dashboard from './Components/Dashboard';
import LoginSignup from './Components/LoginSignup';
import events from './events';

const AppContent = () => {
  const location = useLocation();

  return (
    <div className="bg-[#EEF5DB] min-h-screen">
      {location.pathname !== '/login' && <Header />}
      <Routes>
        <Route path="/" element={<Dashboard events={events} />} />
        <Route path="/login" element={<LoginSignup />} />
      </Routes>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;