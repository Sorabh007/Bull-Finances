import React, { useRef } from 'react';
import './Hero.css';
import emailjs from 'emailjs-com';

function Hero() {
  const form = useRef(); // Corrected from 'her' to 'form'

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_l9p9h63',        
        'template_kvsgj19',       
        form.current,
        'iVh9m6IRFIZVg0tpD'       
      )
      .then(
        () => {
          alert('Message sent successfully!');
          form.current.reset(); // ✅ Clear the form
        },
        () => {
          alert('Failed to send message. Please try again.');
        }
      );
  };

  return (
    <div className="hero-container">
      <div className="hero-left">
        <h1>
          We Care Hence We Provide <br />
          Easy & Affordable Solution to Your Credit Needs
        </h1>
        <p>
          Get instant personal loan for up to ₹15 lakhs with minimal verification.
          Quick and hassle-free and at low interest rate.
        </p>

        <form className="hero-form" ref={form} onSubmit={sendEmail}>
          <input
            type="tel"
            name="phone" 
            placeholder="Get in touch for hassle-free loan"
            className="hero-input"
            required
          />
          <button type="submit" className="hero-button">
            Get a call back
          </button>
        </form>
      </div>

      <div className="hero-right">
        <h2>Our Products</h2>
        <table className="product-table">
          <tbody>
            <tr><td>Personal Loan</td></tr>
            <tr><td>Loan Against Property</td></tr>
            <tr><td>Early Salary Loan</td></tr>
            <tr><td>Unsecured Business Loans</td></tr>
            <tr><td>Working Capital Limits and Loans</td></tr>
            <tr><td>Loan for CIBIL Defaulters</td></tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Hero;
