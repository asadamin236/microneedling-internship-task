import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./WhatIsMicroneedling.css";

const WhatIsMicroneedling = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="what-is-section">
      <div className="container">
        <div className="content">
          <div className="text" data-aos="fade-right">
            <h2>What is Microneedling?</h2>
            <p>
              Microneedling is a minimally invasive cosmetic procedure that uses
              tiny sterilized needles to puncture the skin. These micro-injuries
              trigger the body’s natural healing process, boosting collagen and
              elastin production — key elements for youthful, radiant skin.
            </p>
            <p>
              It helps reduce fine lines, wrinkles, acne scars, and improves
              overall skin texture. Microneedling is safe, quick, and requires
              little to no downtime.
            </p>
          </div>
          <div className="image" data-aos="fade-left">
            <img
              src="https://th.bing.com/th?id=OIF.DhYfcI%2bW%2f5bqIK4wCXa%2bug&rs=1&pid=ImgDetMain"
              alt="Microneedling treatment"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsMicroneedling;
