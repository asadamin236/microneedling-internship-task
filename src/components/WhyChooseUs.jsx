import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaUserMd, FaClinicMedical, FaSmile, FaClock } from "react-icons/fa";
import "./WhyChooseUs.css";

const reasons = [
  {
    icon: <FaUserMd />,
    title: "Expert Dermatologists",
    desc: "Our certified professionals ensure safe and effective microneedling sessions.",
  },
  {
    icon: <FaClinicMedical />,
    title: "Modern Equipment",
    desc: "We use state-of-the-art tools for precision and minimal discomfort.",
  },
  {
    icon: <FaSmile />,
    title: "Visible Results",
    desc: "Clients notice smoother and brighter skin within days of treatment.",
  },
  {
    icon: <FaClock />,
    title: "Minimal Downtime",
    desc: "You can resume your daily routine quickly with little to no recovery time.",
  },
];

const WhyChooseUs = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="choose-us-section">
      <div className="container">
        <h2 className="choose-us-title" data-aos="fade-up">
          Why Choose Our Microneedling?
        </h2>
        <div className="reasons-grid">
          {reasons.map((item, idx) => (
            <div
              className="reason-card"
              key={idx}
              data-aos="zoom-in"
              data-aos-delay={idx * 150}
            >
              <div className="reason-icon">{item.icon}</div>
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
