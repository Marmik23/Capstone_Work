// src/sections/investments/RRSP.js
import React from 'react';
import '../../styles/investment.css';

const RRSP = () => {
  return (
    <div className="investment-page">
      <h1>Registered Retirement Savings Plan (RRSP)</h1>

      <section className="investment-overview">
        <h2>What is an RRSP?</h2>
        <p>
          An RRSP is a government-registered account that helps Canadians save for retirement. Contributions are tax-deductible, and your investments grow tax-deferred until withdrawal.
        </p>
      </section>

      <section className="investment-benefits">
        <h2>Key Benefits</h2>
        <div className="benefits-grid">
          <div className="benefit-item">Tax-deductible contributions</div>
          <div className="benefit-item">Tax-deferred investment growth</div>
          <div className="benefit-item">Helps reduce taxable income</div>
          <div className="benefit-item">Access to First-Time Home Buyer’s Plan & Lifelong Learning Plan</div>
        </div>
      </section>

      <section className="investment-eligibility">
        <h2>Eligibility</h2>
        <div className="eligibility-grid">
          <div className="eligibility-item">Canadian resident with earned income</div>
          <div className="eligibility-item">No age limit to open, but contributions stop at 71</div>
        </div>
      </section>

      <section className="investment-features">
        <h2>What Can You Hold?</h2>
        <div className="features-grid">
          <div className="feature-item">Stocks</div>
          <div className="feature-item">Mutual Funds</div>
          <div className="feature-item">ETFs</div>
          <div className="feature-item">GICs</div>
          <div className="feature-item">Bonds</div>
        </div>
      </section>

      <section className="investment-notes">
        <h2>Contribution Limits</h2>
        <ul>
          <li>Up to 18% of previous year’s earned income, max $31,560 (2024)</li>
          <li>Unused room carries forward</li>
          <li>Withdrawals are taxed as income (except under HBP or LLP)</li>
        </ul>
      </section>

      <section className="investment-cta">
        <h2>Start Your Retirement Plan</h2>
        <p>Open an RRSP online or through your financial advisor and start building your future today.</p>
        <div className="cta-buttons">
          <button onClick={() => window.location.href = '/contact'}>Speak to an Advisor</button>
          <button onClick={() => window.location.href = '/signup'}>Open RRSP Now</button>
        </div>
      </section>
    </div>
  );
};

export default RRSP;
