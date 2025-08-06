// src/sections/investments/Crypto.js
import React from 'react';
import '../../styles/investment.css';

const Crypto = () => {
  return (
    <div className="investment-page">
      <h1>Cryptocurrency</h1>

      <section className="investment-overview">
        <h2>What is Cryptocurrency?</h2>
        <p>
          Cryptocurrency is a digital or virtual currency secured by cryptography. Popular cryptos include Bitcoin, Ethereum, and Solana. Crypto is decentralized and operates independently of central banks.
        </p>
      </section>

      <section className="investment-benefits">
        <h2>Why Consider Crypto?</h2>
        <div className="benefits-grid">
          <div className="benefit-item">High potential returns</div>
          <div className="benefit-item">Decentralized technology</div>
          <div className="benefit-item">Diversification for modern portfolios</div>
          <div className="benefit-item">Global trading access 24/7</div>
        </div>
      </section>

      <section className="investment-eligibility">
        <h2>Who Can Invest?</h2>
        <div className="eligibility-grid">
          <div className="eligibility-item">Anyone 18+ with a Canadian crypto exchange account</div>
          <div className="eligibility-item">Verify identity via KYC (ID + proof of address)</div>
        </div>
      </section>

      <section className="investment-features">
        <h2>Top Cryptocurrencies</h2>
        <div className="features-grid">
          <div className="feature-item">Bitcoin (BTC)</div>
          <div className="feature-item">Ethereum (ETH)</div>
          <div className="feature-item">Solana (SOL)</div>
          <div className="feature-item">Cardano (ADA)</div>
        </div>
      </section>

      <section className="investment-notes">
        <h2>Things to Know</h2>
        <ul>
          <li>Crypto is highly volatile and speculative</li>
          <li>Not protected under CDIC or insurance</li>
          <li>Use cold wallets for better security</li>
        </ul>
      </section>

      <section className="investment-cta">
        <h2>Enter the Future of Finance</h2>
        <p>Crypto is a new frontier. Start small, learn consistently, and always secure your assets properly.</p>
        <div className="cta-buttons">
          <button onClick={() => window.location.href = '/contact'}>Speak to an Advisor</button>
          <button onClick={() => window.location.href = '/signup'}>Buy Crypto</button>
        </div>
      </section>
    </div>
  );
};

export default Crypto;
