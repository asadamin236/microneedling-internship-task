import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Pricing.css";

const pricingData = [
  {
    title: "Basic Glow",
    price: "PKR 5,000",
    features: [
      "1 Microneedling Session",
      "Cleansing & Numbing",
      "Hydrating Serum",
    ],
    highlight: false,
  },
  {
    title: "Advanced Repair",
    price: "PKR 8,500",
    features: ["2 Sessions", "Vitamin Boost", "Aftercare Kit"],
    highlight: true,
  },
  {
    title: "Premium Radiance",
    price: "PKR 12,000",
    features: [
      "3 Microneedling Sessions",
      "LED Therapy",
      "Collagen-Boosting Serum",
    ],
    highlight: false,
  },
];

const Pricing = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="pricing-section">
      <div className="container">
        <h2 className="pricing-title" data-aos="fade-up">
          Microneedling Pricing
        </h2>
        <div className="pricing-grid">
          {pricingData.map((item, index) => (
            <div
              className={`price-card ${item.highlight ? "highlight" : ""}`}
              key={index}
              data-aos="zoom-in"
              data-aos-delay={index * 150}
            >
              <h4>{item.title}</h4>
              <h3>{item.price}</h3>
              <ul>
                {item.features.map((f, i) => (
                  <li key={i}>{f}</li>
                ))}
              </ul>
              <button className="book-btn">Book Now</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
