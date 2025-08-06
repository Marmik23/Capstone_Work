// src/sections/Loan.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Loan.css';

const Loan = () => {
  return (
    <div className="loan-page">
      <h1>LOANS</h1>

      {/* Navigation Buttons */}
      <div className="loan-buttons">
        <Link to="/loan/personal"><button>Personal Loan</button></Link>
        <Link to="/loan/home"><button>Home Loan</button></Link>
        <Link to="/loan/business"><button>Business Loan</button></Link>
        <Link to="/loan/car"><button>Car Loan</button></Link>
        <Link to="/loan/education"><button>Education Loan</button></Link>
      </div>

      {/* Loan Overview */}
      <section className="loan-overview">
        <h2>Loan Overview</h2>
        <p>
          We offer a range of loans tailored for Canadians, including personal, home, business, car, and education loans. 
          Understand your options and the Canadian lending landscape to make informed decisions.
        </p>
      </section>

      {/* Benefits */}
      <section className="loan-benefits">
        <h2>Benefits of the Selected Loan</h2>
        <div className="benefits-grid">
          <div className="benefit-item">Available tax credits and incentives</div>
          <div className="benefit-item">Open to Canadian citizens</div>
          <div className="benefit-item">Government support programs</div>
          <div className="benefit-item">Flexible repayment options</div>
        </div>
      </section>

      {/* Eligibility Factors */}
      <section className="loan-eligibility">
        <h2>Factors Affecting Your Eligibility</h2>
        <div className="eligibility-grid">
          <div className="eligibility-item">Monthly Income</div>
          <div className="eligibility-item">Age</div>
          <div className="eligibility-item">Credit Score</div>
          <div className="eligibility-item">Employment</div>
          <div className="eligibility-item">Down Payment</div>
          <div className="eligibility-item">Property</div>
        </div>
      </section>

      {/* Features */}
      <section className="loan-features">
        <h2>Notable Features</h2>
        <div className="features-grid">
          <div className="feature-item">No Collateral</div>
          <div className="feature-item">Fast Approval</div>
          <div className="feature-item">Competitive Rates</div>
          <div className="feature-item">Digital Process</div>
        </div>
      </section>

      {/* Notes */}
      <section className="loan-notes">
        <h2>Things to Note Before Applying</h2>
        <div className="notes-grid">
          <div className="note-item">Processing Fees</div>
          <div className="note-item">Prepayment Charges</div>
          <div className="note-item">Terms & Conditions</div>
        </div>
      </section>

      {/* Loan Details and Calculator */}
      <div className="loan-section">
        <div className="loan-details">
          <h2>Loan Details</h2>
          <div className="loan-image"></div>
          <div className="loan-info">
            <p>Interest Rate: 10.5 %</p>
            <p>Tenure: Up to 5 years</p>
            <p>Processing Fee: $500</p>
            <p>Eligibility: Specific criteria</p>
            <p>Documentation Required</p>
          </div>
        </div>

        <div className="loan-calculator">
          <h2>Loan Calculator</h2>
          <div className="calculator-box">
            <label>Loan Amount</label>
            <input type="number" placeholder="Enter amount" />

            <label>Interest Rate</label>
            <input type="number" placeholder="Enter interest rate (%)" />

            <label>Tenure (years)</label>
            <input type="number" placeholder="Enter tenure" />

            <div className="loan-result">
              <p>Monthly EMI: $xxx</p>
              <p>Total Interest: $xxx</p>
              <p>Total Payment: $xxx</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loan;
