import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../styles/Loan.css';

const CarLoan = () => {
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
          'https://api.api-ninjas.com/v1/interestrate?name=prime_canada',
          {
            headers: {
              'X-Api-Key': 'C/DdSCAWQ9Uihnlpxrq+Pw==jf5Qxz4emcfeTS7N',
            },
          }
        );
        const rate = res.data[0]?.rate_pct;
        const adjustedRate = parseFloat(rate) + 2; // +2% margin for car loan
        setInterestRate(adjustedRate.toFixed(2));
      } catch (err) {
        console.error('Error fetching interest rate:', err);
        setInterestRate(8.5); // fallback rate
      }
    }

    fetchRate();
  }, []);

  const calculateEMI = () => {
    const P = parseFloat(loanAmount);
    const r = parseFloat(interestRate) / 12 / 100;
    const n = parseFloat(tenure) * 12;
    const emiValue = P * r * Math.pow(1 + r, n) / (Math.pow(1 + r, n) - 1);
    const total = emiValue * n;
    const interest = total - P;
    setEmi(emiValue.toFixed(2));
    setTotalInterest(interest.toFixed(2));
    setTotalPayment(total.toFixed(2));
  };

  return (
    <div className="loan-detail-page">
      <h1>Car Loan</h1>

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
          A car loan allows you to buy a vehicle by paying in monthly EMIs instead of a lump sum. It’s commonly used by Canadians with flexible terms and available for new and used cars.
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
          <div className="eligibility-item">Age (Minimum 18)</div>
          <div className="eligibility-item">Credit Score</div>
          <div className="eligibility-item">Employment</div>
          <div className="eligibility-item">Down Payment</div>
          <div className="eligibility-item">Canadian Residency</div>
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
          <div className="note-item">Loan Terms & Conditions</div>
        </div>
      </section>

      {/* Loan Details and Calculator */}
      <div className="loan-section">
        <div className="loan-details">
          <h2>Loan Details</h2>
          <p><strong>Live Interest Rate (Prime + Margin):</strong> {interestRate ? `${interestRate}%` : 'Loading...'}</p>
          <p><strong>Tenure:</strong> Up to 7 years</p>
          <p><strong>Processing Fee:</strong> $250 - $500</p>
          <p><strong>Required:</strong> Canadian ID, Employment Proof, Vehicle Quote</p>
        </div>

        <div className="loan-calculator">
          <h2>Car Loan Calculator</h2>
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

      {/* Age-wise Documents Table */}
      <section className="loan-documents-table">
        <h2>Complete Guide: Documents, Licenses & Rate Tips</h2>

        <table className="loan-info-table">
          <thead>
            <tr>
              <th>Age Group</th>
              <th>Required Documents</th>
              <th>Helpful Licenses/Certificates</th>
              <th>Tips to Lower Interest Rate</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>18–25</td>
              <td>
                • Govt ID (Driver’s license/passport)<br />
                • Student ID (if applicable)<br />
                • Income proof / co-signer
              </td>
              <td>
                • Student card<br />
                • Learner’s/Full Driver's License
              </td>
              <td>
                • Use co-signer with good credit<br />
                • Start building credit early
              </td>
            </tr>
            <tr>
              <td>26–35</td>
              <td>
                • Driver’s License<br />
                • Employment letter or payslips<br />
                • Credit report & SIN
              </td>
              <td>
                • Full G License<br />
                • Defensive driving certificate
              </td>
              <td>
                • Pay 20%+ down payment<br />
                • Keep credit score &gt;700
              </td>
            </tr>
            <tr>
              <td>36–50</td>
              <td>
                • Job/business proof<br />
                • 2 years tax returns<br />
                • Vehicle insurance quote
              </td>
              <td>
                • Trade/Professional license<br />
                • Defensive driving
              </td>
              <td>
                • Maintain stable income<br />
                • Pre-approval from credit union
              </td>
            </tr>
            <tr>
              <td>50+</td>
              <td>
                • Government-issued ID<br />
                • Pension/investment income proof<br />
                • Ownership/asset documents
              </td>
              <td>
                • G License<br />
                • CPP/OAS/Pension letters
              </td>
              <td>
                • Choose short-term loan<br />
                • Use assets for secured loan
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default CarLoan;
