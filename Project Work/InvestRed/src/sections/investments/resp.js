// src/sections/investments/RESP.js
import React from 'react';
import '../../styles/investment.css';

const RESP = () => {
  return (
    <div className="investment-page">
      <h1>Registered Education Savings Plan (RESP)</h1>

      <section className="investment-overview">
        <h2>What is an RESP?</h2>
        <p>
          An RESP is a tax-advantaged account that allows parents to save for their child's post-secondary education. Contributions are not tax-deductible, but earnings grow tax-free and can be matched with government grants.
        </p>
      </section>

      <section className="investment-benefits">
        <h2>Key Benefits</h2>
        <div className="benefits-grid">
          <div className="benefit-item">Government grant up to $7,200 per child (CESG)</div>
          <div className="benefit-item">Tax-sheltered growth on earnings</div>
          <div className="benefit-item">Multiple investment options</div>
          <div className="benefit-item">Flexible beneficiary transfers</div>
        </div>
      </section>

      <section className="investment-eligibility">
        <h2>Eligibility</h2>
        <div className="eligibility-grid">
          <div className="eligibility-item">Canadian resident child with SIN</div>
          <div className="eligibility-item">Parents/guardians must open the account</div>
        </div>
      </section>

      <section className="investment-features">
        <h2>Investment Options</h2>
        <div className="features-grid">
          <div className="feature-item">Mutual Funds</div>
          <div className="feature-item">ETFs</div>
          <div className="feature-item">GICs</div>
        </div>
      </section>

      <section className="investment-notes">
        <h2>Contribution Details</h2>
        <ul>
          <li>No annual contribution limit; lifetime max: $50,000 per child</li>
          <li>20% matching grant from the government (CESG)</li>
          <li>Withdrawals taxed in child's hands (likely low income)</li>
        </ul>
      </section>

      <section className="investment-cta">
        <h2>Secure Your Child's Future</h2>
        <p>Start early and take full advantage of government grants to fund higher education.</p>
        <div className="cta-buttons">
          <button onClick={() => window.location.href = '/contact'}>Speak to an Advisor</button>
          <button onClick={() => window.location.href = '/signup'}>Open RESP Now</button>
        </div>
      </section>
    </div>
  );
};

export default RESP;
