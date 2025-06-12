import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Testimonials.css";

const reviews = [
  {
    name: "Ayesha Khan",
    comment:
      "Microneedling at this clinic completely transformed my skin! Zero pain and such a professional team.",
    rating: 5,
  },
  {
    name: "Sana Iqbal",
    comment:
      "After 2 sessions, my acne scars are barely visible. Super happy with the results!",
    rating: 4,
  },
  {
    name: "Maria Ali",
    comment:
      "Clean setup, skilled staff, and amazing aftercare. Highly recommend the premium package!",
    rating: 5,
  },
  {
    name: "Fatima Zafar",
    comment:
      "My skin feels so fresh and tight after the treatment. Worth every penny!",
    rating: 4,
  },
  {
    name: "Hira Naveed",
    comment:
      "Professional environment and the results are visible within days. Loved the LED therapy!",
    rating: 5,
  },
  {
    name: "Mehwish Raza",
    comment:
      "I was nervous at first, but the staff made me feel super comfortable. Amazing service!",
    rating: 4,
  },
];

const Testimonials = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="testimonials-section">
      <div className="container">
        <h2 className="testimonial-title" data-aos="fade-up">
          What Our Clients Say
        </h2>
        <div className="testimonials-grid">
          {reviews.map((review, index) => (
            <div
              className="testimonial-card"
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 150}
            >
              <div className="review-text">"{review.comment}"</div>
              <div className="reviewer-name">— {review.name}</div>
              <div className="stars">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <span key={i}>⭐</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
