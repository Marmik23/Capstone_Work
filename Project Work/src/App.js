import React from 'react';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import './styles/index.css';

function App({ children }) {
  return (
    <div className="dashboard-page">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}

export default App;
