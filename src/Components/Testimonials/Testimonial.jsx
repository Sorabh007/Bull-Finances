import React, { useState } from 'react';
import Slider from "react-slick";
import './Testimonial.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
    {
        name: "Anjali Verma",
        role: "Personal Loan",
        content: "Getting a personal loan through Bull Finances was the smoothest experience I’ve had. The team was super responsive and transparent throughout the process. I got the funds within 48 hours, and there were no hidden charges. Highly recommended!",
    },
    {
        name: "Ravi Sharma",
        role: "Personal Loan",
        content: "Great experience overall. The executive assigned to me was helpful and kept me updated at every stage. It took a little longer than I expected for the funds to be disbursed, but their support team made up for it. Thank you!",
    },
    {
        name: "Archischa",
        role: "Early Salary Loan",
        content: "Took an early salary loan from Bull Finances recently, and honestly, super impressed! The whole process was super quick and easy — barely took any time, and the money hit my account just when I needed it most. No unnecessary paperwork or waiting around, and their team was really helpful throughout. Repayment is also pretty flexible, which is a big plus. If you're ever in a tight spot and need quick funds, these guys are definitely worth checking out!",
    },
    {
        name: "Ronit",
        role: "Loan Against Property",
        content: "Took a loan against my property through this group — super quick and hassle-free. Everything was handled smoothly, no delays, no confusion. Really appreciated the clear communication and fast processing. Highly recommend!",
    },
    {
        name: "Subhash",
        role: "Personal Loan",
        content: "Truly grateful for how smoothly my personal loan was handled. Got the funds right when I needed them the most, and the whole process was quick and stress-free. Can't thank the team enough for making it so easy and supportive throughout. 🙏",
    }
];

const TestimonialPage = () => {
    const [expanded, setExpanded] = useState(Array(testimonials.length).fill(false));

    const toggleExpand = (index) => {
        setExpanded(prev => {
            const updated = [...prev];
            updated[index] = !updated[index];
            return updated;
        });
    };

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };

    return (
        <div className="testimonial-page">
            <h2 className="section-title">What People Are Saying</h2>
            <div className="testimonial-scroll-wrapper">
                <Slider {...settings}>
                    {testimonials.map((testimonial, index) => {
                        const isExpanded = expanded[index];
                        return (
                            <div className="testimonial-card" key={index}>
                                <h5 className="name">{testimonial.name}</h5>
                                <h6 className="role">{testimonial.role}</h6>
                                <div className="content-wrapper" style={{ maxHeight: isExpanded ? "500px" : "100px", overflow: "hidden" }}>
                                    <p className="content">"{testimonial.content}"</p>
                                </div>
                                {testimonial.content.length > 120 && (
                                    <button className="read-more-button" onClick={() => toggleExpand(index)}>
                                        {isExpanded ? "Read Less" : "Read More"}
                                    </button>
                                )}
                            </div>
                        );
                    })}
                </Slider>
            </div>
        </div>
    );
};

export default TestimonialPage;
