// src/sections/BusinessLoan.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../styles/Loan.css';

const BusinessLoan = () => {
  const [loanAmount, setLoanAmount] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [tenure, setTenure] = useState('');
  const [emi, setEmi] = useState(null);
  const [totalInterest, setTotalInterest] = useState(null);
  const [totalPayment, setTotalPayment] = useState(null);

  useEffect(() => {
    async function fetchRate() {
      try {
        const res = await axios.get(
          'https://www.bankofcanada.ca/valet/observations/V122530/json'
        );
        const observations = res.data.observations;
        if (observations.length > 0) {
          const latest = observations.at(-1);
          const rate = parseFloat(latest.V122530.v);
          setInterestRate(rate.toFixed(2));
        } else {
          throw new Error('No observations found');
        }
      } catch (err) {
        console.error('Rate fetch failed:', err);
        setInterestRate('10.5');
      }
    }
    fetchRate();
  }, []);

  const calculateEMI = () => {
    const principal = parseFloat(loanAmount);
    const rate = parseFloat(interestRate) / 12 / 100;
    const months = parseFloat(tenure) * 12;

    if (!principal || !rate || !months) return;

    const monthlyEmi = (principal * rate * Math.pow(1 + rate, months)) / (Math.pow(1 + rate, months) - 1);
    const totalPay = monthlyEmi * months;
    const totalInt = totalPay - principal;

    setEmi(monthlyEmi.toFixed(2));
    setTotalInterest(totalInt.toFixed(2));
    setTotalPayment(totalPay.toFixed(2));
  };

  return (
    <div className="loan-detail-page">
      <h1>Business Loan</h1>
      <div className="loan-buttons">
        <Link to="/loan/personal"><button>Personal Loan</button></Link>
        <Link to="/loan/home"><button>Home Loan</button></Link>
        <Link to="/loan/business"><button>Business Loan</button></Link>
        <Link to="/loan/car"><button>Car Loan</button></Link>
        <Link to="/loan/education"><button>Education Loan</button></Link>
      </div>

      <section className="loan-overview">
        <h2>Loan Overview</h2>
        <p>
          Business loans in Canada help entrepreneurs finance operations, purchase equipment, and grow.
          Programs like the <strong>Canada Small Business Financing Program (CSBFP)</strong> offer government-backed support to reduce lender risk.
        </p>
      </section>

      <section className="loan-benefits">
        <h2>Benefits</h2>
        <div className="benefits-grid">
          <div className="benefit-item">Up to $1 million loan limit (CSBFP)</div>
          <div className="benefit-item">Interest rate support</div>
          <div className="benefit-item">Available to most industries</div>
          <div className="benefit-item">Flexible use (equipment, property, renovation)</div>
        </div>
      </section>

      <section className="loan-eligibility">
        <h2>Eligibility</h2>
        <div className="eligibility-grid">
          <div className="eligibility-item">Canadian-based small business</div>
          <div className="eligibility-item">Gross annual revenue ≤ $10M</div>
          <div className="eligibility-item">Business number registered</div>
          <div className="eligibility-item">Valid business plan</div>
        </div>
      </section>

      <section className="loan-features">
        <h2>Required Documents</h2>
        <div className="features-grid">
          <div className="feature-item">Business Plan</div>
          <div className="feature-item">2 years of financial statements</div>
          <div className="feature-item">Articles of Incorporation</div>
          <div className="feature-item">Personal & Business Credit History</div>
        </div>
      </section>

      <section className="loan-notes">
        <h2>Things to Note</h2>
        <div className="notes-grid">
          <div className="note-item">Maximum CSBFP loan: $1 million</div>
          <div className="note-item">Up to $500K for equipment/improvement</div>
          <div className="note-item">Interest rates: Prime + 3% (floating) or +5% (fixed)</div>
        </div>
      </section>

      <div className="loan-section">
        <div className="loan-details">
          <h2>Loan Details</h2>
          <div className="loan-info">
            <p>💼 Current Avg. Interest Rate: {interestRate ? `${interestRate}%` : 'Loading...'}</p>
            <p>Tenure: 1 to 5 years</p>
            <p>Eligible Use: Leaseholds, Equipment, Real Estate</p>
            <p><a href="https://ised-isde.canada.ca/site/canada-small-business-financing-program/en" target="_blank" rel="noreferrer">Apply via CSBFP →</a></p>
          </div>
        </div>

        <div className="loan-calculator">
          <h2>Business Loan EMI Calculator</h2>
          <div className="calculator-box">
            <label>Loan Amount ($)</label>
            <input
              type="number"
              placeholder="Enter amount"
              value={loanAmount}
              onChange={(e) => setLoanAmount(e.target.value)}
            />

            <label>Interest Rate (%)</label>
            <input
              type="number"
              placeholder="e.g. 8"
              value={interestRate}
              onChange={(e) => setInterestRate(e.target.value)}
            />

            <label>Tenure (Years)</label>
            <input
              type="number"
              placeholder="e.g. 5"
              value={tenure}
              onChange={(e) => setTenure(e.target.value)}
            />

            <button onClick={calculateEMI}>Calculate</button>

            <div className="loan-result">
              {emi && <p>Monthly EMI: ${emi}</p>}
              {totalInterest && <p>Total Interest: ${totalInterest}</p>}
              {totalPayment && <p>Total Payment: ${totalPayment}</p>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessLoan;
