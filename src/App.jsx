import { useState } from "react";
import "./styles.css";
import { FaUserCircle } from "react-icons/fa";

export default function App() {
  const [email, setEmail] = useState("");
  const [openIndex, setOpenIndex] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();
      alert(data.message || "Something went wrong");

      if (response.ok) setEmail("");
    } catch (error) {
      alert("Error saving email");
    }
  };

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "How do I know I can trust this app?",
      answer:
        "Our app is designed with security and reliability in mind, ensuring a seamless experience for both customers and restaurants.",
    },
    {
      question: "Is my personal data secure?",
      answer:
        "Yes! We prioritize your privacy and use encryption to keep your data safe from unauthorized access.",
    },
    {
      question: "How do I generate a QR code?",
      answer:
        "You can generate a QR code by uploading your menu on our platform, and it will create a unique QR code for your restaurant.",
    },
    {
      question: "Do you offer customer support?",
      answer:
        "Absolutely! Our support team is available 24/7 to assist you with any queries or technical issues.",
    },
  ];

  return (
    <div className="container">
      {/* Header */}
      <header className="header">
        <h1>Logo</h1>
        <nav>
          <ul className="nav-links">
            <li><a href="#hero">Home</a></li>
            <li><a href="#how-it-works">How</a></li>
            <li><a href="#testimonials">Testimonials</a></li>
            <li><a href="#faq-section">FAQ</a></li>
            <li><a href="#footer">Contact</a></li>
          </ul>
          <button className="cta-button">Get Started</button>
        </nav>
      </header>


      {/* Hero Section */}
      <section id="hero" className="hero">
        {/* Left - Text Content */}
        <div className="hero-text">
          <h2>
            Simplify Ordering with <span className="highlight">QR Codes</span>
          </h2>
          <p>
            Our app lets restaurants offer contactless ordering via QR codes. Customers scan, browse, and order seamlessly!
          </p>

          {/* Email Signup */}
          <form className="email-form" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Enter your email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit">Sign Up</button>
          </form>
        </div>

        {/* Right - Image */}
        <div className="hero-image">
          <img src="/src/assets/hero-image.png" alt="QR Code Ordering" />
        </div>
      </section>


      {/* How It Works */}
      <section id="how-it-works" className="how-it-works">
        <h3>How It Works</h3>
        <div className="steps">
          <div className="step">
            <img src="/src/assets/qr-code.png" alt="Generate QR Code" className="step-icon" />
            <h4>1. Generate QR Code</h4>
            <p>Restaurants upload their menu and get a unique QR code.</p>
          </div>
          <div className="step">
            <img src="/src/assets/scan-qr.png" alt="Scan QR Code" className="step-icon" />
            <h4>2. Customers Scan</h4>
            <p>Customers scan the QR code and browse the digital menu.</p>
          </div>
          <div className="step">
            <img src="/src/assets/place-order.png" alt="Place Order" className="step-icon" />
            <h4>3. Place Order</h4>
            <p>They place orders directly from their phone, contact-free.</p>
          </div>
        </div>
      </section>


      <section id="testimonials" className="testimonials">
        <h2>Why Restaurants Love Our App</h2>
        <h4>Join top restaurants using our seamless QR code ordering system.</h4>
        <button className="cta-button">Get Started</button>

        <div className="testimonial-container">
          {/* Testimonial 1 */}
          <div className="testimonial-card">
            <p>
              This app has completely streamlined our ordering process. Customers love how easy it is to scan and order without waiting for a server!
            </p>
            <div className="testimonial-footer">
              <FaUserCircle className="testimonial-icon" />
              <div>
                <h4>Emily R.</h4>
                <span>Owner, Bistro Café</span>
              </div>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="testimonial-card">
            <p>
              With this QR code system, we have reduced order errors and increased our table turnover. It's a game changer for our restaurant!
            </p>
            <div className="testimonial-footer">
              <FaUserCircle className="testimonial-icon" />
              <div>
                <h4>Michael D.</h4>
                <span>Manager, Urban Diner</span>
              </div>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="testimonial-card">
            <p>
              No more long waits or paper menus! Our guests love the convenience, and we love how easy it is to update our menu instantly.
            </p>
            <div className="testimonial-footer">
              <FaUserCircle className="testimonial-icon" />
              <div>
                <h4>Sophia L.</h4>
                <span>Owner, Sunset Grill</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="faq" className="faq">
        <div id="faq-section" className="faq-section">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-container">
            {faqs.map((faq, index) => (
              <div key={index} className="faq-item">
                <div className="faq-question" onClick={() => toggleFAQ(index)}>
                  {faq.question}
                </div>
                {openIndex === index && <div className="faq-answer">{faq.answer}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="footer" className="footer">
        <div className="footer-container">
          {/* Left Section */}
          <div className="footer-left">
            <h2>QR Order App</h2>
            <p>Simplify restaurant ordering with QR codes.</p>
          </div>

          {/* Center - Links (Split into Two Sections with a Vertical Line) */}
          <div className="footer-links-container">
            <div className="footer-links">
              <a href="#how-it-works">How It Works</a>
              <a href="#testimonials">Testimonials</a>
              <a href="#">Privacy Policy</a>
            </div>

            {/* Vertical Line */}
            <div className="footer-divider"></div>

            <div className="footer-links">
              <a href="#">Support</a>
              <a href="#faq-section">FAQ</a>
              <a href="#">Terms & Conditions</a>
            </div>
          </div>

          {/* Right - Email Subscription */}
          <div className="footer-right">
            <p>Stay updated with our latest features!</p>
            <form className="subscribe-form">
              <input type="email" placeholder="Enter your email" required />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <p className="footer-copy">&copy; 2025 QR Order App. All rights reserved.</p>
      </footer>
    </div>
  );
}
