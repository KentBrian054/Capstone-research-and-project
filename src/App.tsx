import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import LoginPage from './components/LoginPage';
import StaffLoginPage from './components/StaffLoginPage';
import CreateAccount from './components/CreateAccount';
import Dashboard from './components/Dashboard';
import StaffDashboard from './components/StaffDashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/staff-login" element={<StaffLoginPage />} />
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/staff-dashboard" element={<StaffDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;