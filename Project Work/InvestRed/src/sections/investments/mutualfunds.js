// src/sections/investments/MutualFunds.js
import React from 'react';
import '../../styles/investment.css';

const MutualFunds = () => {
  return (
    <div className="investment-page">
      <h1>Mutual Funds</h1>

      <section className="investment-overview">
        <h2>What are Mutual Funds?</h2>
        <p>
          Mutual funds are professionally managed investment portfolios that pool money from many investors to buy stocks, bonds, or other securities. They offer diversification and expert management, making them ideal for long-term goals.
        </p>
      </section>

      <section className="investment-benefits">
        <h2>Key Benefits</h2>
        <div className="benefits-grid">
          <div className="benefit-item">Diversification across sectors</div>
          <div className="benefit-item">Managed by experienced professionals</div>
          <div className="benefit-item">Suitable for SIP (Systematic Investment Plans)</div>
          <div className="benefit-item">Available in equity, debt, hybrid, and balanced formats</div>
        </div>
      </section>

      <section className="investment-eligibility">
        <h2>Who Can Invest?</h2>
        <div className="eligibility-grid">
          <div className="eligibility-item">Canadian residents aged 18+</div>
          <div className="eligibility-item">KYC-compliant individuals</div>
        </div>
      </section>

      <section className="investment-features">
        <h2>Fund Categories</h2>
        <div className="features-grid">
          <div className="feature-item">Equity Funds</div>
          <div className="feature-item">Fixed-Income Funds</div>
          <div className="feature-item">Balanced Funds</div>
          <div className="feature-item">Index Funds</div>
        </div>
      </section>

      <section className="investment-notes">
        <h2>Things to Consider</h2>
        <ul>
          <li>Management fees (MER) are applicable</li>
          <li>Returns are market-linked</li>
          <li>Redemption may involve exit loads or tax on gains</li>
        </ul>
      </section>

      <section className="investment-cta">
        <h2>Start Diversifying Today</h2>
        <p>Mutual funds are great for new investors and long-term wealth creation. Start with SIP or lump sum.</p>
        <div className="cta-buttons">
          <button onClick={() => window.location.href = '/contact'}>Speak to an Advisor</button>
          <button onClick={() => window.location.href = '/signup'}>Explore Mutual Funds</button>
        </div>
      </section>
    </div>
  );
};

export default MutualFunds;
