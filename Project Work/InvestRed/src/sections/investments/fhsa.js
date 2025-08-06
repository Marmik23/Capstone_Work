// src/sections/investments/FHSA.js
import React from 'react';
import '../../styles/investment.css';

const FHSA = () => {
  return (
    <div className="investment-page">
      <h1>First Home Savings Account (FHSA)</h1>

      <section className="investment-overview">
        <h2>What is an FHSA?</h2>
        <p>
          FHSA is a new registered account that helps first-time homebuyers save up to $40,000 tax-free. Contributions are tax-deductible and qualified withdrawals for a home purchase are also tax-free.
        </p>
      </section>

      <section className="investment-benefits">
        <h2>Key Benefits</h2>
        <div className="benefits-grid">
          <div className="benefit-item">Tax-deductible contributions</div>
          <div className="benefit-item">Tax-free withdrawals for first home</div>
          <div className="benefit-item">Annual limit of $8,000; lifetime $40,000</div>
          <div className="benefit-item">Unused contribution room carries forward</div>
        </div>
      </section>

      <section className="investment-eligibility">
        <h2>Eligibility</h2>
        <div className="eligibility-grid">
          <div className="eligibility-item">Must be 18+ and a Canadian resident</div>
          <div className="eligibility-item">Must be a first-time home buyer</div>
        </div>
      </section>

      <section className="investment-features">
        <h2>Eligible Investments</h2>
        <div className="features-grid">
          <div className="feature-item">ETFs</div>
          <div className="feature-item">Mutual Funds</div>
          <div className="feature-item">GICs</div>
          <div className="feature-item">Stocks</div>
        </div>
      </section>

      <section className="investment-notes">
        <h2>Things to Remember</h2>
        <ul>
          <li>Funds must be used to buy a qualifying home within 15 years</li>
          <li>If not used for a home, funds can be transferred to RRSP tax-free</li>
        </ul>
      </section>

      <section className="investment-cta">
        <h2>Plan Your First Home Purchase</h2>
        <p>Start saving with FHSA and enjoy tax advantages tailored to first-time buyers.</p>
        <div className="cta-buttons">
          <button onClick={() => window.location.href = '/contact'}>Speak to an Advisor</button>
          <button onClick={() => window.location.href = '/signup'}>Open FHSA Now</button>
        </div>
      </section>
    </div>
  );
};

export default FHSA;
