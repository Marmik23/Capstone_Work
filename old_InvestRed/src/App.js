import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './shared/Footer';
import Navbar from './shared/Navbar';
import Insurance from './features/Insurance/Insurance';
import Home from './features/Home/Home';
import Loan from './features/Loans/Loan';
import './index.css';
import './features/Insurance/Insurance.css';

function App() {
  return (
    <Router>
      <div className="dashboard-page">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/insurance" element={<Insurance />} />
          <Route path="/loan" element={<Loan />} /> 
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
