// src/sections/investments/GIC.js
import React from 'react';
import '../../styles/investment.css';

const GIC = () => {
  return (
    <div className="investment-page">
      <h1>Guaranteed Investment Certificate (GIC)</h1>

      <section className="investment-overview">
        <h2>What is a GIC?</h2>
        <p>
          A GIC is a secure, low-risk investment offered by Canadian financial institutions. You deposit money for a fixed term and earn guaranteed interest. GICs are ideal for conservative investors or short-term savings goals.
        </p>
      </section>

      <section className="investment-benefits">
        <h2>Key Benefits</h2>
        <div className="benefits-grid">
          <div className="benefit-item">Guaranteed principal and interest</div>
          <div className="benefit-item">CDIC-insured up to $100,000 per issuer</div>
          <div className="benefit-item">No market volatility</div>
          <div className="benefit-item">Ideal for risk-averse savers</div>
        </div>
      </section>

      <section className="investment-eligibility">
        <h2>Eligibility</h2>
        <div className="eligibility-grid">
          <div className="eligibility-item">Available to all Canadian residents</div>
          <div className="eligibility-item">Minimum deposit (varies by provider)</div>
        </div>
      </section>

      <section className="investment-features">
        <h2>GIC Types</h2>
        <div className="features-grid">
          <div className="feature-item">Fixed-Rate GICs</div>
          <div className="feature-item">Market-Linked GICs</div>
          <div className="feature-item">Redeemable / Non-Redeemable</div>
          <div className="feature-item">Escalating-Rate GICs</div>
        </div>
      </section>

      <section className="investment-notes">
        <h2>Things to Consider</h2>
        <ul>
          <li>Lower returns compared to stocks or mutual funds</li>
          <li>Early withdrawal may result in penalties or no interest</li>
          <li>Not suitable for aggressive growth goals</li>
        </ul>
      </section>

      <section className="investment-cta">
        <h2>Looking for Safe Investments?</h2>
        <p>Compare GIC rates across banks and credit unions. Choose a term that fits your timeline.</p>
        <div className="cta-buttons">
          <button onClick={() => window.location.href = '/contact'}>Speak to an Advisor</button>
          <button onClick={() => window.location.href = '/signup'}>Explore GICs</button>
        </div>
      </section>
    </div>
  );
};

export default GIC;
