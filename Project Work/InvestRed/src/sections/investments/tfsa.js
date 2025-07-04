import React from 'react';
import '../../styles/investment.css';

const TFSA = () => {
  return (
    <div className="investment-page">
      <h1>Tax-Free Savings Account (TFSA)</h1>

      {/* What is TFSA */}
      <section className="investment-overview">
        <h2>What is a TFSA?</h2>
        <p>
          A Tax-Free Savings Account (TFSA) is a registered investment account available to Canadian residents aged 18 and older. It allows you to earn tax-free investment income on eligible investments such as stocks, bonds, mutual funds, and GICs. Unlike RRSPs, TFSA withdrawals are not taxed and can be made at any time for any purpose.
        </p>
      </section>

      {/* Benefits */}
      <section className="investment-benefits">
        <h2>Key Benefits of a TFSA</h2>
        <div className="benefits-grid">
          <div className="benefit-item">✅ All investment income is tax-free</div>
          <div className="benefit-item">✅ Withdrawals can be made anytime, tax-free</div>
          <div className="benefit-item">✅ Withdrawn amounts are re-added to your contribution room next year</div>
          <div className="benefit-item">✅ No impact on government benefits like GIS or OAS</div>
        </div>
      </section>

      {/* Eligibility */}
      <section className="investment-eligibility">
        <h2>Eligibility Criteria</h2>
        <div className="eligibility-grid">
          <div className="eligibility-item">You must be a Canadian resident</div>
          <div className="eligibility-item">Must be 18 years or older</div>
          <div className="eligibility-item">Have a valid Social Insurance Number (SIN)</div>
        </div>
      </section>

      {/* Types of Investments */}
      <section className="investment-features">
        <h2>What Can You Hold in a TFSA?</h2>
        <div className="features-grid">
          <div className="feature-item">📊 Stocks</div>
          <div className="feature-item">📈 Mutual Funds</div>
          <div className="feature-item">💵 Bonds</div>
          <div className="feature-item">🏦 GICs</div>
          <div className="feature-item">💸 ETFs</div>
          <div className="feature-item">💰 Cash</div>
        </div>
      </section>

      {/* Contribution Limits */}
      <section className="investment-notes">
        <h2>TFSA Contribution Limits</h2>
        <ul>
          <li>2024 limit: <strong>$7,000</strong></li>
          <li>Total limit since 2009 (if never contributed and eligible every year): <strong>$95,000</strong></li>
          <li>Unused room carries forward indefinitely</li>
          <li>Withdrawals made this year can be re-contributed starting next calendar year</li>
        </ul>
      </section>

      {/* Warnings */}
      <section className="investment-notes">
        <h2>Important Considerations</h2>
        <ul>
          <li>Overcontributing leads to a penalty tax of 1% per month on the excess amount</li>
          <li>Investment losses in TFSA cannot be claimed for tax deductions</li>
          <li>You are responsible for tracking your TFSA room (CRA account recommended)</li>
        </ul>
      </section>

      {/* Call to Action */}
      <section className="investment-cta">
        <h2>Ready to Open a TFSA?</h2>
        <p>You can open a TFSA at most banks, credit unions, or online brokerages in Canada. Make sure to align your investments with your goals and risk tolerance.</p>
        <div className="cta-buttons">
          <button onClick={() => window.location.href = '/contact'}>Speak to an Advisor</button>
          <button onClick={() => window.location.href = '/signup'}>Open TFSA Now</button>
        </div>
      </section>
    </div>
  );
};

export default TFSA;
