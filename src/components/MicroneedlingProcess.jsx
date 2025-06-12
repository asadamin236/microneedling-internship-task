import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaWater,
  FaSyringe,
  FaHeartbeat,
  FaSmileBeam,
  FaLeaf,
  FaTint,
  FaStar,
  FaRegSmile,
} from "react-icons/fa";
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
  {
    icon: <FaLeaf />,
    title: "5. Antioxidant Boost",
    description:
      "Skin is enriched with antioxidants to fight environmental damage.",
  },
  {
    icon: <FaTint />,
    title: "6. Hydration Lock",
    description: "A hyaluronic acid serum deeply hydrates and plumps the skin.",
  },
  {
    icon: <FaStar />,
    title: "7. LED Light Therapy",
    description:
      "Red or blue light is used to further enhance skin repair and glow.",
  },
  {
    icon: <FaRegSmile />,
    title: "8. Final Protection",
    description:
      "Sunscreen and aftercare advice are provided to protect your skin.",
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
              data-aos-delay={index * 100}
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
