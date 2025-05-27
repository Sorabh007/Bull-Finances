import React, { useRef } from 'react';
import './footer.css';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import emailjs from 'emailjs-com';
import logoFooter from './logo_2.png';

const Footer = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_l9p9h63',
      'template_9qcu7py',
      form.current,
      'iVh9m6IRFIZVg0tpD'
    ).then((result) => {
      alert('Message sent successfully!');
    }, (error) => {
      alert('Failed to send message. Please try again.');
    });

    e.target.reset(); 
  };

  return (
    <footer className="custom-footer">
      <Container>
        <Row className="mb-4">
          <Col md={4}>
            <div className="brand_dets">
              <img src={logoFooter} alt="Bull Finances Logo" className="footer-logo" />
              <h5>Bull Finances</h5>
            </div>
            <br />
            <div className="footer-block">
              <h6><strong>Contact Us</strong></h6>
              <p>wecare@bullfinances.com</p>
              <p>bullfinances@gmail.com</p>
            </div>
            <br />
            <div className="footer-block">
              <h6><strong>Telephone</strong></h6>
              <p>+91 8400200854</p>
              <p>+91 8708757413</p>
              <p>+91 8168916813</p>
            </div>
            <br />
            <div className="footer-block">
              <h6><strong>Location</strong></h6>
              <p>GURUGRAM</p>
            </div>
          </Col>

          <Col md={4}>
            <h6 className="footer-title">Our Products</h6>
            <br />
            <ul className="footer-list">
              <li>Personal Loan</li>
              <li>Business Loan</li>
              <li>Loan Against Property</li>
              <li>Unsecured Business Loans</li>
              <li>Working Capital Limits and Loans</li>
              <li>Loan for CIBIL Defaulters</li>
              <li>Personal Loan in NCR</li>
              <li>Personal Loan in Delhi</li>
              <li>Personal Loan in Gurgaon</li>
              <li>Personal Loan in Noida</li>
            </ul>
          </Col>

          <Col md={4}>
            <h6 className="footer-title mb-3">Contact Us</h6>
            <Form ref={form} onSubmit={sendEmail} className="form_dets">
              <Form.Control
                type="email"
                name="email"
                placeholder="Your Email"
                className="mb-2"
                required
              />
              <Form.Control
                as="textarea"
                name="message"
                placeholder="Enter your query"
                className="mb-2"
                rows={3}
                required
              />
              <Button type="submit" className="form_submit w-100">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>

        <Row>
          <Col className="text-center">
            <small>&copy; 2025 Bull Finances. All Rights Reserved</small>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
