// src/components/AppointmentModal.jsx
import React, { useState } from "react";
import "./AppointmentModal.css";

const AppointmentModal = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Appointment submitted!");
    onClose();
    setFormData({ name: "", phone: "", date: "" });
  };

  return (
    <div className="modal-backdrop">
      <div className="modal-box" data-aos="zoom-in">
        <button className="close-btn" onClick={onClose}>
          ×
        </button>
        <h3>Book Microneedling Session</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
          <button type="submit">Confirm Booking</button>
        </form>
      </div>
    </div>
  );
};

export default AppointmentModal;
