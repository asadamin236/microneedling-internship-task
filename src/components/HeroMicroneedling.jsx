import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./HeroMicroneedling.css";
import AppointmentModal from "./AppointmentModal"; // import the modal

const HeroMicroneedling = () => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <>
      <section className="hero-section">
        <div className="hero-overlay">
          <div className="hero-content">
            <h1 data-aos="fade-up">Microneedling Treatment</h1>
            <p data-aos="fade-up" data-aos-delay="300">
              Rejuvenate your skin, reduce scars and fine lines with our
              advanced microneedling therapy
            </p>
            <button
              className="cta-button"
              data-aos="zoom-in"
              data-aos-delay="600"
              onClick={() => setShowModal(true)}
            >
              Book Your Session
            </button>
          </div>
        </div>
      </section>

      {showModal && <AppointmentModal onClose={() => setShowModal(false)} />}
    </>
  );
};

export default HeroMicroneedling;
