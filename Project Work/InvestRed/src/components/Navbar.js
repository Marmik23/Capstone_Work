import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/index.css';

function Navbar() {
  const navItemStyle = {
    marginRight: '1.5rem',
    color: 'white',
    textDecoration: 'none',
    fontWeight: 500,
  };

  return (
    <nav style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '0.5rem 2rem',
      backgroundColor: '#800000',
      position: 'sticky',
      top: 0,
      zIndex: 1000,
    }}>
      {/* Logo and text wrapped in Link */}
      <Link to="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
        <img
          src="/Investred_logo.jpg"
          alt="InvestRed Logo"
          style={{ width: '30px', height: '30px', marginRight: '0.5rem', borderRadius: '4px' }}
        />
        <span style={{ color: 'white', fontWeight: 'bold', fontSize: '1.2rem' }}>InvestRed</span>
      </Link>

      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Link to="/investments" style={navItemStyle}>Investments</Link>
        <Link to="/loan" style={navItemStyle}>Loans</Link>
        <Link to="/insurance" style={navItemStyle}>Insurance</Link>
        <Link to="/blogs" style={navItemStyle}>Blogs</Link>
        <Link to="/aboutuS" style={navItemStyle}>About</Link>
        <Link to="/contactus" style={navItemStyle}>Contact</Link>
        <span style={navItemStyle}>Account</span>
      </div>
    </nav>
  );
}

export default Navbar;
