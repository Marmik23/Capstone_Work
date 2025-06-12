import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/index.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">InvestRed</div>
      <div className="nav-links">
        <span>Investments</span>
        <Link to="/loan">Loans</Link> 
        <Link to="/insurance">Insurance</Link>
        {/* <span>Mortgage</span> */}
        <span>Blogs</span>
        <span>Account</span>
      </div>
    </nav>
  );
}

export default Navbar;
