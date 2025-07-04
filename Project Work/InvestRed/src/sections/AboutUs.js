// src/pages/AboutUs.js
import React from 'react';
import '../styles/index.css';

const AboutUs = () => {
  return (
    <div className="investment-page">
      <h1>About InvestRed</h1>

      <section className="investment-overview">
        <h2>Who We Are</h2>
        <p>
          InvestRed is a Canadian-based fintech platform dedicated to making investment simple, smart, and accessible for everyone. We help users understand financial products like TFSA, RRSP, mutual funds, stocks, crypto, and more — all in one trusted platform.
        </p>
      </section>

      <section className="investment-overview">
        <h2>Our Mission</h2>
        <p>
          To empower individuals to make informed investment decisions by providing clear guidance, tools, and education — no jargon, just results.
        </p>
      </section>

      <section className="investment-overview">
        <h2>Why Choose Us?</h2>
        <ul>
          <li>✅ Beginner-friendly investment education</li>
          <li>✅ Secure and transparent tools</li>
          <li>✅ Personalized investment options</li>
          <li>✅ Real advisors and digital support</li>
        </ul>
      </section>
    </div>
  );
};

export default AboutUs;
