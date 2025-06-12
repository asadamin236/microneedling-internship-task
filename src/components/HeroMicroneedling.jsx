import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./HeroMicroneedling.css";

const HeroMicroneedling = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <section className="hero-section">
      <div className="hero-overlay">
        <div className="hero-content">
          <h1 data-aos="fade-up">HydraFacial Skin Treatment</h1>
          <p data-aos="fade-up" data-aos-delay="300">
            Deep cleanse, exfoliate, and hydrate — all in one luxurious session
          </p>
          <button
            className="cta-button"
            data-aos="zoom-in"
            data-aos-delay="600"
          >
            Book Your HydraFacial
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroMicroneedling;
