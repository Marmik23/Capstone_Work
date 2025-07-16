// src/pages/ContactUs.js
import '../styles/contact.css';

const Contact = () => {
  return (
    <div className="contact-page">
      <h1>Contact Us</h1>
      <p>
        Have questions or need help with your investment journey? Our support team is here for you.
      </p>

      <h2>Customer Support</h2>
      <ul>
        <li><strong>Phone:</strong> 1-800-INVESTRED (1-800-468-3787)</li>
        <li><strong>Hours:</strong> Mon–Fri: 8 AM–6 PM EST | Sat: 9 AM–3 PM EST</li>
        <li><strong>Email:</strong> Please fill out the form below</li>
      </ul>

      <h2>Send Us a Message</h2>
      <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
        <input type="text" placeholder="Name" required />
        <input type="text" placeholder="Title/Role" />
        <input type="text" placeholder="Organisation" />
        <input type="email" placeholder="Email ID" required />
        <input type="tel" placeholder="Phone Number" />
        <textarea placeholder="Your Message" required></textarea>
        <button type="submit">Submit</button>
      </form>

      <h2>Visit Us</h2>
      <p>
        <strong>INVESTRED Headquarters</strong><br />
        123 Wealth Street, Suite 400<br />
        Toronto, ON M5V 2T6, Canada<br />
        <em>By appointment only.</em>
      </p>

      <h2>Connect Online</h2>
      <ul>
        <li><strong>Live Chat:</strong> Available on our site and app during business hours</li>
        <li><strong>Help Centre:</strong> FAQs, guides, and tutorials</li>
        <li><strong>Social Media:</strong> <a href="#">LinkedIn</a>, <a href="#">Facebook</a>, <a href="#">X</a></li>
      </ul>

      <h2>Media & Partnerships</h2>
      <p>
        Email: <a href="mailto:partnerships@investred.ca">milato@investred.ca</a>
      </p>

      <h3>Our Commitment</h3>
      <p>
        Your trust is our priority. We’re committed to secure, private, and helpful communication. Reach out anytime—your confidence is our mission.
      </p>
    </div>
  );
};

export default Contact;