// src/sections/HomeLoan.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../styles/Loan.css';

const HomeLoan = () => {
  const [purchasePrice, setPurchasePrice] = useState('');
  const [downPayment, setDownPayment] = useState('');
  const [downPaymentPercent, setDownPaymentPercent] = useState('');
  const [tenure, setTenure] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [loanAmount, setLoanAmount] = useState('');
  const [insuranceFee, setInsuranceFee] = useState(null);
  const [emi, setEmi] = useState(null);
  const [totalInterest, setTotalInterest] = useState(null);
  const [totalPayment, setTotalPayment] = useState(null);
  const [minRequiredDown, setMinRequiredDown] = useState(0);
  const [amortizationSchedule, setAmortizationSchedule] = useState([]);

  useEffect(() => {
    async function fetchLiveRate() {
      try {
        const res = await axios.get(
          'https://www.bankofcanada.ca/valet/observations/V80691335/json'
        );
        const observations = res.data.observations;
        if (observations.length > 0) {
          const latest = observations.at(-1);
          const rate = parseFloat(latest.V80691335.v);
          setInterestRate(rate.toFixed(2));
        } else throw new Error('No observations found');
      } catch (err) {
        console.error('Rate fetch failed:', err);
        setInterestRate('10.5');
      }
    }
    fetchLiveRate();
  }, []);

  const calculateMinimumDownPayment = (price) => {
    if (price <= 500000) return price * 0.05;
    return 500000 * 0.05 + (price - 500000) * 0.10;
  };

  const calculateInsurancePremium = (mortgageAmount, downPercent) => {
    let rate = 0;
    if (downPercent < 10) rate = 0.04;
    else if (downPercent < 15) rate = 0.031;
    else if (downPercent < 20) rate = 0.028;
    else return 0;
    return mortgageAmount * rate;
  };

  const handleDownAmountChange = (val) => {
    setDownPayment(val);
    const price = parseFloat(purchasePrice);
    const amount = parseFloat(val);
    if (price > 0 && amount >= 0) {
      setDownPaymentPercent(((amount / price) * 100).toFixed(2));
    }
  };

  const handleDownPercentChange = (val) => {
    setDownPaymentPercent(val);
    const price = parseFloat(purchasePrice);
    const percent = parseFloat(val);
    if (price > 0 && percent >= 0) {
      setDownPayment(((percent / 100) * price).toFixed(2));
    }
  };

  const calculateEMI = () => {
    const price = parseFloat(purchasePrice);
    const down = parseFloat(downPayment);
    const R = parseFloat(interestRate) / 12 / 100;
    const N = parseFloat(tenure) * 12;

    if (!price || !down || !R || !N) return;

    const minDown = calculateMinimumDownPayment(price);
    setMinRequiredDown(minDown.toFixed(2));

    if (down < minDown) {
      alert(`Minimum required down payment is $${minDown.toFixed(2)} as per Canadian mortgage rules.`);
      return;
    }

    const mortgage = price - down;
    const downPercent = (down / price) * 100;
    const insurance = calculateInsurancePremium(mortgage, downPercent);
    const totalLoan = mortgage + insurance;

    const monthlyEmi = (totalLoan * R * Math.pow(1 + R, N)) / (Math.pow(1 + R, N) - 1);
    const totalPay = monthlyEmi * N;
    const totalInt = totalPay - mortgage;

    setLoanAmount(totalLoan.toFixed(2));
    setInsuranceFee(insurance.toFixed(2));
    setEmi(monthlyEmi.toFixed(2));
    setTotalInterest(totalInt.toFixed(2));
    setTotalPayment(totalPay.toFixed(2));

    // Amortization Schedule
    const schedule = [];
    let balance = totalLoan;
    for (let year = 1; year <= tenure; year++) {
      let interestPaid = 0;
      let principalPaid = 0;
      const opening = year === 1 ? balance : schedule[year - 2].closing;

      for (let m = 1; m <= 12; m++) {
        const interest = balance * R;
        const principal = monthlyEmi - interest;
        interestPaid += interest;
        principalPaid += principal;
        balance -= principal;
      }

      schedule.push({
        year,
        opening: parseFloat(opening.toFixed(2)),
        principalPaid,
        interestPaid,
        closing: parseFloat(balance < 0 ? 0 : balance.toFixed(2))
      });
    }
    setAmortizationSchedule(schedule);
  };

  const th = { border: '1px solid #ccc', padding: '8px', background: '#f0f0f0' };
  const td = { border: '1px solid #ccc', padding: '8px' };

  return (
    <div className="loan-detail-page">
      <h1>Home Loan</h1>

      <div className="loan-buttons">
        <Link to="/loan/personal"><button>Personal Loan</button></Link>
        <Link to="/loan/home"><button>Home Loan</button></Link>
        <Link to="/loan/business"><button>Business Loan</button></Link>
        <Link to="/loan/car"><button>Car Loan</button></Link>
        <Link to="/loan/education"><button>Education Loan</button></Link>
      </div>

      <div className="loan-section">
        <div className="loan-details">
          <h2>Loan Details</h2>
          <div className="loan-info">
            <p>Interest Rate: {interestRate ? `${interestRate} %` : 'Loading...'}</p>
            <p>🔒 Rate Type: 5-Year Fixed (Conventional Mortgage from Bank of Canada)</p>

            <table style={{ width: '100%', marginTop: '10px', borderCollapse: 'collapse' }}>
              <thead>
                <tr>
                  <th style={th}>Rate Type</th>
                  <th style={th}>Typical Rate (Approx.)</th>
                  <th style={th}>Term</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={td}>3-Year Fixed</td>
                  <td style={td}>6.19%</td>
                  <td style={td}>Fixed for 3 years</td>
                </tr>
                <tr>
                  <td style={td}>5-Year Fixed</td>
                  <td style={td}>{interestRate ? `${interestRate}%` : 'Loading...'}</td>
                  <td style={td}>Fixed for 5 years</td>
                </tr>
                <tr>
                  <td style={td}>5-Year Variable</td>
                  <td style={td}>6.05%</td>
                  <td style={td}>Fluctuates with Prime</td>
                </tr>
              </tbody>
            </table>

            <p>Min Down Payment: 5% for first $500K, 10% for remainder</p>
            <p>CMHC Insurance applies if down payment &lt; 20%</p>
          </div>
        </div>

        <div className="loan-calculator">
          <h2>Loan Calculator</h2>
          <div className="calculator-box">
            <label>Purchase Price</label>
            <input
              type="number"
              placeholder="Enter property price"
              value={purchasePrice}
              onChange={(e) => setPurchasePrice(e.target.value)}
            />

            <label>Down Payment</label>
            <div style={{ display: 'flex', gap: '10px' }}>
              <input
                type="number"
                placeholder="Amount"
                value={downPayment}
                onChange={(e) => handleDownAmountChange(e.target.value)}
              />
              <input
                type="number"
                placeholder="%"
                value={downPaymentPercent}
                onChange={(e) => handleDownPercentChange(e.target.value)}
              />
            </div>

            <label>Interest Rate (%)</label>
            <input
              type="number"
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

            <button onClick={calculateEMI}>Calculate EMI</button>

            <div className="loan-result">
              {minRequiredDown > 0 && (
                <p>📌 Minimum Required Down Payment: ${minRequiredDown}</p>
              )}
              <p>Total Loan (incl. Insurance): {loanAmount ? `$${loanAmount}` : '$xxx'}</p>
              <p>Insurance Fee: {insuranceFee ? `$${insuranceFee}` : '$xxx'}</p>
              <p>Monthly EMI: {emi ? `$${emi}` : '$xxx'}</p>
              <p>Total Interest: {totalInterest ? `$${totalInterest}` : '$xxx'}</p>
              <p>Total Payment: {totalPayment ? `$${totalPayment}` : '$xxx'}</p>
            </div>
          </div>

          {amortizationSchedule.length > 0 && (
            <div style={{ marginTop: '30px' }}>
              <h3>Amortization Schedule (Yearly)</h3>
              <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                  <thead>
                    <tr>
                      <th style={th}>Year</th>
                      <th style={th}>Opening Balance</th>
                      <th style={th}>Principal Paid</th>
                      <th style={th}>Interest Paid</th>
                      <th style={th}>Closing Balance</th>
                    </tr>
                  </thead>
                  <tbody>
                    {amortizationSchedule.map((row) => (
                      <tr key={row.year}>
                        <td style={td}>{row.year}</td>
                        <td style={td}>${row.opening.toFixed(2)}</td>
                        <td style={td}>${row.principalPaid.toFixed(2)}</td>
                        <td style={td}>${row.interestPaid.toFixed(2)}</td>
                        <td style={td}>${row.closing.toFixed(2)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
    );
};

export default HomeLoan;
