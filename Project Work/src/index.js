import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import App from './App';
import Blogs from './sections/Blogs';
import './styles/index.css';

// Main landing page content
const HomePageContent = () => (
  <>
    <div className="section">
      <h2>Banner Area</h2>
    </div>

    <div className="section">
      <h2>Investments</h2>
      <p>Explore mutual funds, SIPs, and stocks to grow your wealth over time with our curated investment options.</p>
    </div>

    <div className="section">
      <h2>Insurance</h2>
      <p>Get coverage for life, health, and vehicles with our comprehensive insurance plans.</p>
    </div>

    <div className="section">
      <h2>Mortgage</h2>
      <p>Find the best home loan options with low interest rates and flexible payment terms.</p>
    </div>

    <div className="section">
      <h2>Financial Tools</h2>
      <p>Use our calculators and planners to better manage your budgeting, taxes, and savings goals.</p>
    </div>

    <div className="section">
      <h2>Retirement Planning Tool</h2>
      <p>Plan your retirement with confidence using our CPP, OAS, and RRSP analysis tools.</p>
    </div>

    <div className="section">
      <h2>NRI Investments</h2>
      <p>Specialized investment opportunities tailored for non-resident Indians across the globe.</p>
    </div>

    {/* 🔗 Wrap Blogs section in Link */}
    <div className="section">
      <Link to="/blogs" style={{ textDecoration: 'none', color: 'inherit' }}>
        <h2>Blogs</h2>
        <p>Stay updated with financial trends, tips, and guides from our expert-written blog articles.</p>
      </Link>
    </div>

    <div className="section">
      <h2>Startup Investments</h2>
      <p>Support emerging businesses and diversify your portfolio with startup investment options.</p>
    </div>

    <div className="section">
      <h2>Contact</h2>
      <p>Have questions? Reach out to our support team for help with any of your financial needs.</p>
    </div>
  </>
);

// Mount App with routing
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App children={<HomePageContent />} />} />
      <Route path="/blogs" element={<App children={<Blogs />} />} />
    </Routes>
  </BrowserRouter>
);
