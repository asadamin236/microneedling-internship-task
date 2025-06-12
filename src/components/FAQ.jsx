import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import "./FAQ.css";

const faqs = [
  {
    question: "Does microneedling hurt?",
    answer:
      "We use a numbing cream before the procedure, so most patients feel minimal discomfort during treatment.",
  },
  {
    question: "How many sessions will I need?",
    answer:
      "For best results, we usually recommend 3 to 6 sessions spaced 4 weeks apart, depending on your skin condition.",
  },
  {
    question: "Is there any downtime?",
    answer:
      "Mild redness and sensitivity may last for 1–2 days, but most clients resume normal activities within 24 hours.",
  },
  {
    question: "Can all skin types get microneedling?",
    answer:
      "Yes! Microneedling is safe for all skin tones and types when done professionally.",
  },
  {
    question: "What should I avoid after the treatment?",
    answer:
      "Avoid sun exposure, makeup, and harsh skincare products for 48 hours post-treatment.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="container">
        <h2 className="faq-title" data-aos="fade-up">
          Frequently Asked Questions
        </h2>
        <div className="faq-list">
          {faqs.map((item, index) => (
            <div
              className={`faq-item ${activeIndex === index ? "active" : ""}`}
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              onClick={() => toggleFAQ(index)}
            >
              <div className="faq-question">
                {item.question}
                <span className="faq-icon">
                  {activeIndex === index ? <FaChevronUp /> : <FaChevronDown />}
                </span>
              </div>
              <div className="faq-answer">{item.answer}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
