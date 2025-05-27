import React from "react";
import './Features.css';
import bgImage from './bg.jpg';

const features = [
  "Low interest rates and processing fees",
  "High loan amounts with low EMIs",
  "Helpful and dedicated loan advisors",
  "Great offers and personalized loan options",
  "Simple process with few documents needed",
  "Loan service right at your doorstep",
  "Fast loan approval guaranteed",
  "Amicable after sales service",
  "No hidden charges",
  "Private information & data safety guaranteed"
];

export default function Features() {
  return (
    <section id="Features">
      <div className="container-fluid features-container" style={{ backgroundImage: `url(${bgImage})` }} alt='Finacial services in NCR'>
        <h1 className="features-title" >What Makes Bull Finances the Best Choice</h1>
        <div className="row">
          {features.map((feature, index) => (
            <div key={index} className="col-md-6 mb-4">
              <div className="card feature-card">
                <div className="card-body">
                  <p className="card-text feature-text">{feature}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    );
}
