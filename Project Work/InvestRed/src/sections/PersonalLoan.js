import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Loan.css';

const PersonalLoan = () => {
  const [loanAmount, setLoanAmount] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [tenure, setTenure] = useState('');
  const [emi, setEmi] = useState(null);
  const [totalInterest, setTotalInterest] = useState(null);
  const [totalPayment, setTotalPayment] = useState(null);

  const calculateEMI = () => {
    const P = parseFloat(loanAmount);
    const r = parseFloat(interestRate) / 100 / 12;
    const n = parseFloat(tenure) * 12;

    if (!P || !r || !n) return;

    const emiCalc = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    const totalPay = emiCalc * n;
    const totalInt = totalPay - P;

    setEmi(emiCalc.toFixed(2));
    setTotalInterest(totalInt.toFixed(2));
    setTotalPayment(totalPay.toFixed(2));
  };

 return (
  <div className="loan-detail-page">
    <h1>Personal Loan</h1>

    {/* Navigation Buttons */}
    <div className="loan-buttons">
      <Link to="/loan/personal"><button>Personal Loan</button></Link>
      <Link to="/loan/home"><button>Home Loan</button></Link>
      <Link to="/loan/business"><button>Business Loan</button></Link>
      <Link to="/loan/car"><button>Car Loan</button></Link>
      <Link to="/loan/education"><button>Education Loan</button></Link>
    </div>

    {/* Types of Personal Loans */}
    <section className="loan-overview">
      <h2>Types of Personal Loans in Canada</h2>
      <ul>
        <li>Debt Consolidation Loan</li>
        <li>Medical Emergency Loan</li>
        <li>Home Renovation Loan</li>
        <li>Wedding/Travel Loan</li>
        <li>Credit Builder Loan</li>
      </ul>
      <p>
        Personal loans in Canada are typically unsecured and can be used for a variety of needs. You can get them from banks, credit unions, or online lenders.
      </p>
    </section>

    {/* Benefits */}
    <section className="loan-benefits">
      <h2>Benefits of a Personal Loan</h2>
      <div className="benefits-grid">
        <div className="benefit-item">No Collateral Required</div>
        <div className="benefit-item">Fixed Monthly Payments</div>
        <div className="benefit-item">Lower Interest Rates than Credit Cards</div>
        <div className="benefit-item">Quick Disbursal</div>
      </div>
    </section>

    {/* Eligibility */}
    <section className="loan-eligibility">
      <h2>Eligibility Criteria</h2>
      <div className="eligibility-grid">
        <div className="eligibility-item">Minimum age 18</div>
        <div className="eligibility-item">Stable Income</div>
        <div className="eligibility-item">Credit Score ≥ 650</div>
        <div className="eligibility-item">Canadian Residency</div>
      </div>
    </section>

    {/* Features */}
    <section className="loan-features">
      <h2>Features</h2>
      <div className="features-grid">
        <div className="feature-item">Loan Amount: $1,000 - $50,000</div>
        <div className="feature-item">Tenure: 6 Months to 5 Years</div>
        <div className="feature-item">APR: 6% - 15%</div>
      </div>
    </section>

    {/* Notes */}
    <section className="loan-notes">
      <h2>Things to Consider</h2>
      <div className="notes-grid">
        <div className="note-item">Processing Fee up to $500</div>
        <div className="note-item">Early Repayment Penalty (in some cases)</div>
        <div className="note-item">Ensure Loan Fits Budget</div>
      </div>
    </section>

    {/* Loan Calculator */}
    <div className="loan-section">
      <div className="loan-details">
        <h2>Loan Details</h2>
        <p>Interest Rate: Avg 10.5%</p>
        <p>Tenure: Up to 5 Years</p>
        <p>Max Loan Amount: $50,000</p>
      </div>

      <div className="loan-calculator">
        <h2>EMI Calculator</h2>
        <div className="calculator-box">
          <label>Loan Amount ($)</label>
          <input type="number" value={loanAmount} onChange={(e) => setLoanAmount(e.target.value)} />

          <label>Interest Rate (%)</label>
          <input type="number" value={interestRate} onChange={(e) => setInterestRate(e.target.value)} />

          <label>Tenure (Years)</label>
          <input type="number" value={tenure} onChange={(e) => setTenure(e.target.value)} />

          <button onClick={calculateEMI}>Calculate</button>

          {emi && (
            <div className="loan-result">
              <p>Monthly EMI: ${emi}</p>
              <p>Total Interest: ${totalInterest}</p>
              <p>Total Payment: ${totalPayment}</p>
            </div>
          )}
        </div>
      </div>
    </div>

    {/* Comparison Table */}
    <section className="loan-comparison">
      <h2>Comparison: Personal Loan vs HELOC vs LOC</h2>
      <table className="comparison-table">
        <thead>
          <tr>
            <th>Feature</th>
            <th>Personal Loan</th>
            <th>HELOC</th>
            <th>Line of Credit (LOC)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Secured/Unsecured</td>
            <td>Unsecured</td>
            <td>Secured (Home Equity)</td>
            <td>Unsecured</td>
          </tr>
          <tr>
            <td>Interest Rate</td>
            <td>6% – 15%</td>
            <td>3% – 6%</td>
            <td>7% – 12%</td>
          </tr>
          <tr>
            <td>Repayment</td>
            <td>Fixed Monthly EMI</td>
            <td>Flexible, Interest-Only Options</td>
            <td>Flexible, Pay as You Use</td>
          </tr>
          <tr>
            <td>Borrowing Type</td>
            <td>Lump Sum</td>
            <td>Revolving Credit</td>
            <td>Revolving Credit</td>
          </tr>
          <tr>
            <td>Best For</td>
            <td>Fixed Needs (e.g., wedding)</td>
            <td>Home Renovation, Major Expenses</td>
            <td>Emergency Funds, Ongoing Small Expenses</td>
          </tr>
        </tbody>
      </table>
    </section>

    {/* HELOC and LOC Info */}
    <section className="loan-types">
      <h2>Other Credit Options</h2>

      <h3>Home Equity Line of Credit (HELOC)</h3>
      <p>
        A HELOC is a secured credit option backed by your home's equity. You can borrow funds as needed, repay, and reuse.
        It typically has a lower interest rate than unsecured loans and is ideal for large or ongoing expenses like home renovations.
      </p>

      <h3>Personal Line of Credit (LOC)</h3>
      <p>
        A LOC is a flexible, unsecured credit option where you can borrow up to a certain limit and pay interest only on what you use.
        It's useful for emergency expenses, tuition, or short-term cash needs.
      </p>
    </section>
  </div>
);
};

export default PersonalLoan;
