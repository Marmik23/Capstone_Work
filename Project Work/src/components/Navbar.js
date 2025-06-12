import React from 'react';
import '../styles/index.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav className="navbar">
      <div className="logo">InvestRed</div>
      <div className="nav-links">
        <span>Investments</span>
        <span>Loans</span>
        <span>Insurance</span>
        <span>Mortgage</span>
         <Link to="/blogs" className="nav-link">Blogs</Link>
        <span>Account</span>
      </div>
    </nav>
  );
}

export default Header;
