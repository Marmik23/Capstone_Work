import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Insurance from './sections/Insurance';
import Home from './sections/Home';
import Loan from './sections/Loan';
import Blogs from './sections/Blogs'; 
import PersonalLoan from './sections/PersonalLoan';
import HomeLoan from './sections/HomeLoan';
import BusinessLoan from './sections/BusinessLoan';
import CarLoan from './sections/CarLoan';
import EducationLoan from './sections/EducationLoan';

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
          <Route path="/blogs" element={<Blogs />} /> 
          <Route path="/loan/personal" element={<PersonalLoan />} />
          <Route path="/loan/home" element={<HomeLoan />} />
          <Route path="/loan/business" element={<BusinessLoan />} />
          <Route path="/loan/car" element={<CarLoan />} />
          <Route path="/loan/education" element={<EducationLoan />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
