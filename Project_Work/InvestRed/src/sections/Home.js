import gicIcon from '../assets/icons/gic.png';
import mutualFundIcon from '../assets/icons/mutualfund.png';
import rrspIcon from '../assets/icons/rrsp.png';
import tfsaIcon from '../assets/icons/tfsa.png';
import '../styles/index.css';

function Home() {
  return (
    <main className="main-content">

      {/* Banner */}
      <div className="banner">
        <h2>Welcome to InvestRed</h2>
        <p>Your trusted partner for Investments, Insurance, Loans, and Financial Planning.</p>
      </div>

      {/* Investments Section */}
      <div className="section">
        <h2>Investments</h2>
        <div className="card-grid">
          <div className="card">
            <img src={mutualFundIcon} alt="Mutual Funds" />
            <h3>Mutual Funds</h3>
            <p>Professionally managed portfolios for long-term wealth building, tailored to your financial goals and risk appetite.</p>
          </div>
          <div className="card">
            <img src={tfsaIcon} alt="SIP" />
            <h3>Systematic Investment Plan</h3>
            <p>Invest small amounts regularly and build your financial future steadily through disciplined SIP investments.</p>
          </div>
          <div className="card">
            <img src={gicIcon} alt="GIC" />
            <h3>Guaranteed Investment Certificates (GIC)</h3>
            <p>Secure, low-risk investment with guaranteed returns, perfect for conservative investors seeking stability.</p>
          </div>
        </div>
      </div>

      {/* Insurance Section */}
      <div className="section">
        <h2>Insurance</h2>
        <div className="card-grid">
          <div className="card">
            <img src={tfsaIcon} alt="Life Insurance" />
            <h3>Life Insurance</h3>
            <p>Ensure your family’s financial security with customizable life insurance plans to suit your stage of life.</p>
          </div>
          <div className="card">
            <img src={tfsaIcon} alt="Health & Dental Insurance" />
            <h3>Health & Dental Insurance</h3>
            <p>Access essential medical care with coverage for hospitalization, surgery, dental, and preventive health services.</p>
          </div>
          <div className="card">
            <img src={tfsaIcon} alt="Travel Insurance" />
            <h3>Travel Insurance</h3>
            <p>Travel the world worry-free with protection from medical emergencies, lost luggage, and trip cancellations.</p>
          </div>
        </div>
      </div>

      {/* Mortgage Section */}
      <div className="section">
        <h2>Mortgage</h2>
        <div className="card-grid">
          <div className="card">
            <img src={tfsaIcon} alt="Home Loan" />
            <h3>Home Loan</h3>
            <p>Flexible home mortgage options at competitive rates to help you finance your dream property.</p>
          </div>
          <div className="card">
            <img src={tfsaIcon} alt="Business Loan" />
            <h3>Business Loan</h3>
            <p>Customized business financing solutions to fuel your company’s growth and operational needs.</p>
          </div>
          <div className="card">
            <img src={tfsaIcon} alt="Personal Loan" />
            <h3>Personal Loan</h3>
            <p>Unsecured personal loans for life’s important events—education, travel, or major purchases.</p>
          </div>
        </div>
      </div>

      {/* Financial Tools Section */}
      <div className="section">
        <h2>Financial Tools & Planning</h2>
        <div className="card-grid">
          <div className="card">
            <img src={tfsaIcon} alt="Calculators" />
            <h3>Contribution Calculators</h3>
            <p>Estimate your RRSP, TFSA, or RESP contributions and future value with easy-to-use online tools.</p>
          </div>
          <div className="card">
            <img src={tfsaIcon} alt="Tax Estimator" />
            <h3>Tax Estimator</h3>
            <p>Quickly calculate your potential tax liabilities based on current income and deductions.</p>
          </div>
          <div className="card">
            <img src={rrspIcon} alt="Retirement Planning" />
            <h3>Retirement Planning</h3>
            <p>Plan your retirement with confidence — estimate savings, income needs, and expense forecasts.</p>
          </div>
        </div>
      </div>

      {/* Blogs Section */}
      <div className="section">
        <h2>Blogs</h2>
        <div className="card-grid">
          <div className="card">
            <img src={tfsaIcon} alt="Financial News" />
            <h3>Financial News</h3>
            <p>Stay updated with the latest market news, trends, and expert opinions from trusted sources.</p>
          </div>
          <div className="card">
            <img src={tfsaIcon} alt="Investment Tips" />
            <h3>Investment Tips</h3>
            <p>Learn how to diversify your portfolio and manage risk with proven investment strategies.</p>
          </div>
          <div className="card">
            <img src={tfsaIcon} alt="Personal Finance Guides" />
            <h3>Personal Finance Guides</h3>
            <p>Get practical advice on budgeting, saving, and managing everyday personal finances effectively.</p>
          </div>
        </div>
      </div>

{/* Contact Us Section */}
<section class="contact-section">
  <h2>Contact Us</h2>
  <form class="contact-form" onsubmit="handleSubmit(event)">
    <div class="form-group">
      <label for="name">Name</label>
      <input type="text" id="name" name="name" placeholder="Your Name" required />
    </div>

    <div class="form-group">
      <label for="email">Email</label>
      <input type="email" id="email" name="email" placeholder="Your Email" required />
    </div>

    <div class="form-group">
      <label for="subject">Subject</label>
      <input type="text" id="subject" name="subject" placeholder="Subject" required />
    </div>

    <div class="form-group">
      <label for="message">Message</label>
      <textarea id="message" name="message" rows="5" placeholder="Your Message" required></textarea>
    </div>

    <button type="submit" class="submit-btn">Send Message</button>
  </form>
</section>
    </main>
  );
}

export default Home;
