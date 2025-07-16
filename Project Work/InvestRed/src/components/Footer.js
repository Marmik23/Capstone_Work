import '../styles/index.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Brand Info */}
        <div className="footer-section brand">
          <h3>InvestRed</h3>
          <p>
            Your trusted partner in smart, secure, and transparent financial planning across Canada.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-section links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/investments">Investments</a></li>
            <li><a href="/insurance">Insurance</a></li>
            <li><a href="/loans">Loans</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-section contact">
          <h4>Contact Us</h4>
          <p>123 Wealth Street, Suite 400<br />Toronto, ON M5V 2T6, Canada</p>
          <p>Email: <a href="mailto:support@investred.ca">support@investred.ca</a></p>
          <p>Phone: 1-800-INVESTRED</p>
        </div>

        {/* Social Media */}
        <div className="footer-section social">
          <h4>Connect</h4>
          <div className="social-icons">
            <a href="#"><img src="/assets/icons/facebook.png" alt="Facebook" /></a>
            <a href="#"><img src="/assets/icons/linkedin.png" alt="LinkedIn" /></a>
            <a href="#"><img src="/assets/icons/x.png" alt="X (Twitter)" /></a>
          </div>
        </div>

      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        © 2025 InvestRed. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
