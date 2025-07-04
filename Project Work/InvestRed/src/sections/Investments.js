import React from 'react';
import { Link } from 'react-router-dom';
import cryptoIcon from '../assets/icons/crypto.png';
import fhsaIcon from '../assets/icons/fhsa.png';
import gicIcon from '../assets/icons/gic.png';
import mutualFundIcon from '../assets/icons/mutualfund.png';
import respIcon from '../assets/icons/resp.png';
import rrspIcon from '../assets/icons/rrsp.png';
import stocksIcon from '../assets/icons/stocks.png';
import tfsaIcon from '../assets/icons/tfsa.png';
import '../styles/investment.css';

const Investment = () => {
  return (
    <div className="investment-page">
      <h1>Explore Investment Options</h1>

      {/* Overview */}
      <section className="investment-overview">
        <h2>Overview</h2>
        <p>
          Learn about key investment products available in Canada. Each option has its own purpose, tax advantages, and risk profile. Whether you're saving for retirement, a home, or education, there’s something for every goal.
        </p>
      </section>

      {/* Investment Types */}
      <section className="investment-grid-section">
        <h2>Investment Options</h2>
        <div className="investment-grid">
          <Link to="/investment/tfsa" className="investment-card">
            <img src={tfsaIcon} alt="TFSA" />
            <h3>TFSA</h3>
            <p>Grow your money tax-free and withdraw anytime.</p>
          </Link>
          <Link to="/investment/fhsa" className="investment-card">
            <img src={fhsaIcon} alt="FHSA" />
            <h3>FHSA</h3>
            <p>Tax-free savings to buy your first home.</p>
          </Link>
          <Link to="/investment/rrsp" className="investment-card">
            <img src={rrspIcon} alt="RRSP" />
            <h3>RRSP</h3>
            <p>Save for retirement and lower your taxable income.</p>
          </Link>
          <Link to="/investment/resp" className="investment-card">
            <img src={respIcon} alt="RESP" />
            <h3>RESP</h3>
            <p>Save for a child’s education with government grants.</p>
          </Link>
          <Link to="/investment/mutual-funds" className="investment-card">
            <img src={mutualFundIcon} alt="Mutual Funds" />
            <h3>Mutual Funds</h3>
            <p>Pooled investments managed by experts.</p>
          </Link>
          <Link to="/investment/crypto" className="investment-card">
            <img src={cryptoIcon} alt="Crypto" />
            <h3>Crypto</h3>
            <p>Invest in digital currencies with high risk and return.</p>
          </Link>
          <Link to="/investment/stocks" className="investment-card">
            <img src={stocksIcon} alt="Stocks" />
            <h3>Stocks</h3>
            <p>Buy shares in companies and earn capital gains.</p>
          </Link>
          <Link to="/investment/gic" className="investment-card">
            <img src={gicIcon} alt="GIC" />
            <h3>GIC</h3>
            <p>Safe, fixed-income option with guaranteed returns.</p>
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="investment-cta">
        <h2>Ready to Start Investing?</h2>
        <p>Speak to a licensed advisor or explore platforms that match your goals.</p>
        <div className="cta-buttons">
          <Link to="/contact"><button>Speak to an Advisor</button></Link>
          <Link to="/signup"><button>Start Investing</button></Link>
        </div>
      </section>
    </div>
  );
};

export default Investment;
