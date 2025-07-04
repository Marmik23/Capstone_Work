import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import AboutUs from './sections/AboutUs';
import Blogs from './sections/Blogs';
import BusinessLoan from './sections/BusinessLoan';
import CarLoan from './sections/CarLoan';
import ContactUs from './sections/ContactUs';
import EducationLoan from './sections/EducationLoan';
import Home from './sections/Home';
import HomeLoan from './sections/HomeLoan';
import Insurance from './sections/Insurance';
import Investment from './sections/Investments';
import Crypto from './sections/investments/crypto';
import FHSA from './sections/investments/fhsa';
import GIC from './sections/investments/gic';
import MutualFunds from './sections/investments/mutualfunds';
import RESP from './sections/investments/resp';
import RRSP from './sections/investments/rrsp';
import Stocks from './sections/investments/stocks';
import TFSA from './sections/investments/tfsa';
import Loan from './sections/Loan';
import PersonalLoan from './sections/PersonalLoan';
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
          <Route path="/investments" element={<Investment />} /> 
          <Route path="/investment/tfsa" element={<TFSA />} />
          <Route path="/investment/rrsp" element={<RRSP />} />
          <Route path="/investment/resp" element={<RESP />} />
          <Route path="/investment/fhsa" element={<FHSA />} />
          <Route path="/investment/gic" element={<GIC />} />
          <Route path="/investment/crypto" element={<Crypto />} />
          <Route path="/investment/stocks" element={<Stocks />} />
          <Route path="/investment/mutual-funds" element={<MutualFunds />} />
          <Route path="/loan/personal" element={<PersonalLoan />} />
          <Route path="/loan/home" element={<HomeLoan />} />
          <Route path="/loan/business" element={<BusinessLoan />} />
          <Route path="/loan/car" element={<CarLoan />} />
          <Route path="/loan/education" element={<EducationLoan />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contactus" element={<ContactUs />} /> 
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
