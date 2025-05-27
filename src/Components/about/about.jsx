import React from 'react';
import './about.css';
import bgImage from './bg_about.jpg';

const WhoWeAre = () => {
    return (
        <section id="WhoWeAre">
        <div className='Single_contain'>
            <div
                className="who-we-are-page"
                style={{ backgroundImage: `url(${bgImage})` }}
            >
                <h1 className="title gradient-text">Bull Finances - Build Wealth, The Bull Way</h1>
                <br/>
                <p className="description">
                    Empower your growth with Bull Finances. We specialize in instant short-term personal and business loans designed to help you overcome financial hurdles and focus on what matters—building your future. 
                    Our innovative lending solutions ensure that lack of funds never stands in the way of your goals.
                    Recognized as one of the top personal loan providers in Delhi NCR, we offer unsecured loans with no end-use restrictions, giving you the flexibility to address your most urgent business or financial needs—quickly and efficiently.
                    Our seamless process, fast approvals, and dedicated loan specialists ensure you get the support you need when you need it. Plus, timely repayments can help you build and strengthen your credit score faster than other forms of credit.
                </p>
                <p className="description" >
                    Get in touch today—your best loan opportunity is just a step away.
                </p>
            </div>
        </div>
        </section>
    );
};

export default WhoWeAre;
