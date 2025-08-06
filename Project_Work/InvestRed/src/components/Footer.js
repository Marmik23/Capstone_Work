import React from "react";
import "../styles/index.css";

const Footer = () => {
  return (
    <footer className="investred-footer">
      <div className="footer-container">
        <div className="footer-column">
          <h4>Investments</h4>
          <ul>
            <li><a href="/investments/mutual-funds">Mutual Funds</a></li>
            <li><a href="/investments/stocks">Stocks</a></li>
            <li><a href="/investments/sip">SIP</a></li>
            <li><a href="/investments/etf">ETFs</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Loans</h4>
          <ul>
            <li><a href="/loans/home">Home Loan</a></li>
            <li><a href="/loans/car">Car Loan</a></li>
            <li><a href="/loans/personal">Personal Loan</a></li>
            <li><a href="/loans/business">Business Loan</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Insurance</h4>
          <ul>
            <li><a href="/insurance/life">Life Insurance</a></li>
            <li><a href="/insurance/health">Health Insurance</a></li>
            <li><a href="/insurance/vehicle">Vehicle Insurance</a></li>
            <li><a href="/insurance/property">Property Insurance</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Mortgage</h4>
          <ul>
            <li><a href="/mortgage/calculator">Mortgage Calculator</a></li>
            <li><a href="/mortgage/rates">Rates</a></li>
            <li><a href="/mortgage/advice">Advice</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Contact</h4>
          <ul>
            <li><a href="/contact">Contact Us</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/knowledge-center">Knowledge Center</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="footer-column newsletter">
          <h4>Stay Updated</h4>
          <form onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Enter your email" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>

      {/* Social Media */}
      <div className="footer-social">
        <a href="https://facebook.com" aria-label="Facebook" className="social-icon facebook">F</a>
        <a href="https://twitter.com" aria-label="Twitter" className="social-icon twitter">T</a>
        <a href="https://linkedin.com" aria-label="LinkedIn" className="social-icon linkedin">in</a>
        <a href="https://instagram.com" aria-label="Instagram" className="social-icon instagram">IG</a>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} InvestRed. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
