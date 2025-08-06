import React from 'react';
import './Insurance.css'; 
const Insurance = () => {
  return (
    <div className="insurance-page">

      <div className="section-title">INSURANCE</div>

      <div className="button-group">
        <div className="button">Home</div>
        <div className="button">Auto</div>
        <div className="button">Health</div>
        <div className="button">Travel</div>
      </div>

      <div className="main-content">
        
        <div className="quotes">
          <h3>Quotes</h3>
          <div className="quote-box"></div>
        </div>

        <div className="policy-overview">
          <h3>Policy Overview</h3>
          <div className="image-placeholder"></div>
          <div className="text-line"></div>
          <div className="text-line"></div>
          <div className="text-line small"></div>
        </div>
      </div>
    </div>
  );
};

export default Insurance;