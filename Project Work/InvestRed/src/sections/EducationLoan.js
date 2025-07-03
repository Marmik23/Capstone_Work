import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Loan.css';

const EducationLoan = () => {
  const [loanAmount, setLoanAmount] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [tenure, setTenure] = useState('');
  const [emi, setEmi] = useState(null);
  const [totalInterest, setTotalInterest] = useState(null);
  const [totalPayment, setTotalPayment] = useState(null);

  const calculateEMI = () => {
    const P = parseFloat(loanAmount);
    const r = parseFloat(interestRate) / 12 / 100;
    const n = parseFloat(tenure) * 12;
    const emiVal = P * r * Math.pow(1 + r, n) / (Math.pow(1 + r, n) - 1);
    const total = emiVal * n;
    const interest = total - P;
    setEmi(emiVal.toFixed(2));
    setTotalInterest(interest.toFixed(2));
    setTotalPayment(total.toFixed(2));
  };

  return (
    <div className="loan-detail-page">
      <h1>Education Loan</h1>

      {/* Navigation */}
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
          Education loans help students and their families cover post-secondary education costs.
          In Canada, these include federal and provincial loans, private loans, and grants.
        </p>
      </section>

      {/* Types of Education Loans */}
      <section className="loan-benefits">
        <h2>Types of Education Loans in Canada</h2>
        <div className="benefits-grid">
          <div className="benefit-item">Canada Student Loans (CSLP)</div>
          <div className="benefit-item">Provincial Student Loans (OSAP, Alberta Student Aid, etc.)</div>
          <div className="benefit-item">Bank/Private Student Loans (RBC, TD, etc.)</div>
          <div className="benefit-item">RESP-backed Loans</div>
        </div>
      </section>

      {/* Eligibility Factors */}
      <section className="loan-eligibility">
        <h2>Who Is Eligible?</h2>
        <div className="eligibility-grid">
          <div className="eligibility-item">Canadian Citizen or PR</div>
          <div className="eligibility-item">Enrolled in Designated Institution</div>
          <div className="eligibility-item">Full-time or Part-time Student</div>
          <div className="eligibility-item">Meet Financial Need Threshold</div>
          <div className="eligibility-item">Satisfactory Academic Progress</div>
        </div>
      </section>

      {/* Government Benefits */}
      <section className="loan-features">
        <h2>Government of Canada Benefits</h2>
        <div className="features-grid">
          <div className="feature-item">No interest until graduation (CSLP)</div>
          <div className="feature-item">Repayment Assistance Plan (RAP)</div>
          <div className="feature-item">Canada Student Grant (up to $6,000/year)</div>
          <div className="feature-item">Tax credits for tuition & interest paid</div>
        </div>
      </section>

      {/* Documentation */}
      <section className="loan-notes">
        <h2>Documents Required</h2>
        <div className="notes-grid">
          <div className="note-item">Government-issued ID</div>
          <div className="note-item">Proof of Enrollment</div>
          <div className="note-item">SIN (Social Insurance Number)</div>
          <div className="note-item">Bank Information (for disbursal)</div>
          <div className="note-item">Parental Income (if required)</div>
        </div>
      </section>

      {/* Loan Details & EMI Calculator */}
      <div className="loan-section">
        <div className="loan-details">
          <h2>Loan Details</h2>
          <div className="loan-image"></div>
          <div className="loan-info">
            <p>Interest Rate: Varies (0% during study, ~5.95% after)</p>
            <p>Tenure: Up to 10 years after graduation</p>
            <p>Processing Fee: $0 for government loans</p>
            <p>Repayment: Starts 6 months after graduation</p>
          </div>
        </div>

        <div className="loan-calculator">
          <h2>EMI Calculator</h2>
          <div className="calculator-box">
            <label>Loan Amount ($)</label>
            <input
              type="number"
              value={loanAmount}
              onChange={(e) => setLoanAmount(e.target.value)}
              placeholder="Enter amount"
            />

            <label>Interest Rate (%)</label>
            <input
              type="number"
              value={interestRate}
              onChange={(e) => setInterestRate(e.target.value)}
              placeholder="Enter interest rate"
            />

            <label>Tenure (years)</label>
            <input
              type="number"
              value={tenure}
              onChange={(e) => setTenure(e.target.value)}
              placeholder="Enter tenure"
            />

            <button onClick={calculateEMI}>Calculate EMI</button>

            {emi && (
              <div className="loan-result">
                <p><strong>Monthly EMI:</strong> ${emi}</p>
                <p><strong>Total Interest:</strong> ${totalInterest}</p>
                <p><strong>Total Payment:</strong> ${totalPayment}</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Bonus Info Table */}
      <section className="loan-documents-table">
        <h2>Benefits by Age & Province</h2>
        <table className="loan-info-table">
          <thead>
            <tr>
              <th>Group</th>
              <th>Grants / Programs</th>
              <th>Extra Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Age 17–24</td>
              <td>Canada Student Grant for Full-Time Students<br />Up to $6,000/year</td>
              <td>Apply via your provincial portal (e.g. OSAP)</td>
            </tr>
            <tr>
              <td>Age 25+</td>
              <td>Adult Learners Grant (varies by province)<br />RAP for mature students</td>
              <td>No parental income required; flexible repayment</td>
            </tr>
            <tr>
              <td>Low-income families</td>
              <td>Canada Access Grant, RAP</td>
              <td>No interest during study, income-tested repayment</td>
            </tr>
            <tr>
              <td>Provinces</td>
              <td>OSAP (Ontario), Alberta Student Aid, AFE Quebec, etc.</td>
              <td>Apply through province + CSLP together</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default EducationLoan;
