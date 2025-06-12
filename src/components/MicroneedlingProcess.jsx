import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaWater, FaSyringe, FaHeartbeat, FaSmileBeam } from "react-icons/fa";
import "./MicroneedlingProcess.css";

const steps = [
  {
    icon: <FaWater />,
    title: "1. Deep Cleansing",
    description:
      "We begin by thoroughly cleansing your skin to remove oil and impurities.",
  },
  {
    icon: <FaSyringe />,
    title: "2. Numbing Cream",
    description:
      "A gentle numbing cream is applied to ensure maximum comfort during treatment.",
  },
  {
    icon: <FaHeartbeat />,
    title: "3. Microneedling Session",
    description:
      "Tiny sterile needles create micro-injuries, stimulating collagen production.",
  },
  {
    icon: <FaSmileBeam />,
    title: "4. Soothing Serum",
    description:
      "A calming serum is applied to reduce redness and accelerate recovery.",
  },
];

const MicroneedlingProcess = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="process-section">
      <div className="container">
        <h2 className="section-title" data-aos="fade-up">
          Our Microneedling Process
        </h2>
        <div className="steps-grid">
          {steps.map((step, index) => (
            <div
              className="step-card"
              key={index}
              data-aos="zoom-in-up"
              data-aos-delay={index * 150} // delay for staggered effect
            >
              <div className="icon">{step.icon}</div>
              <h4>{step.title}</h4>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MicroneedlingProcess;
