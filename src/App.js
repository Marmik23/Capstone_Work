import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Insurance from './sections/Insurance';
import Home from './sections/Home';
import Loan from './sections/Loan'; // Make sure this import is here
import './styles/index.css';
import './styles/Insurance.css';

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
