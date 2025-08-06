// src/sections/investments/Stocks.js
import React from 'react';
import '../../styles/investment.css';

const Stocks = () => {
  return (
    <div className="investment-page">
      <h1>Stocks</h1>

      <section className="investment-overview">
        <h2>What Are Stocks?</h2>
        <p>
          Stocks represent ownership in a company. When you buy a stock, you own a portion of that business. Stock investing allows you to earn through price appreciation and dividends, but involves higher risk.
        </p>
      </section>

      <section className="investment-benefits">
        <h2>Why Invest in Stocks?</h2>
        <div className="benefits-grid">
          <div className="benefit-item">High growth potential</div>
          <div className="benefit-item">Earn dividends as passive income</div>
          <div className="benefit-item">Ownership in businesses</div>
          <div className="benefit-item">Liquidity – easily traded on markets</div>
        </div>
      </section>

      <section className="investment-eligibility">
        <h2>Who Can Invest?</h2>
        <div className="eligibility-grid">
          <div className="eligibility-item">Must be 18+ and have a trading account</div>
          <div className="eligibility-item">Valid KYC & SIN required</div>
        </div>
      </section>

      <section className="investment-features">
        <h2>Investment Types</h2>
        <div className="features-grid">
          <div className="feature-item">Blue-Chip Stocks</div>
          <div className="feature-item">Growth Stocks</div>
          <div className="feature-item">Dividend Stocks</div>
          <div className="feature-item">ETFs & REITs</div>
        </div>
      </section>

      <section className="investment-notes">
        <h2>Risks & Tips</h2>
        <ul>
          <li>Market volatility affects stock prices</li>
          <li>Long-term strategy often yields better results</li>
          <li>Consider using stop-loss and portfolio diversification</li>
        </ul>
      </section>

      <section className="investment-cta">
        <h2>Take Your First Step Into Equity</h2>
        <p>Open a trading account with any online broker and start with small, well-known companies.</p>
        <div className="cta-buttons">
          <button onClick={() => window.location.href = '/contact'}>Speak to an Advisor</button>
          <button onClick={() => window.location.href = '/signup'}>Start Investing in Stocks</button>
        </div>
      </section>
    </div>
  );
};

export default Stocks;
