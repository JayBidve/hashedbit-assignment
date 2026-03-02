import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function BookingForm() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const bookingId = "MOV" + Math.floor(Math.random() * 1000000);

    navigate("/success", {
      state: {
        name,
        email,
        mobile,
        bookingId,
        movieId: id
      },
    });
  };

  return (
    <div className="form-container">
      <h2>Book Your Seat</h2>

      <form onSubmit={handleSubmit} className="booking-form">
        <input
          type="text"
          placeholder="Enter Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="tel"
          placeholder="Enter Mobile Number"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
          required
        />

        <button type="submit" className="book-btn">
          Confirm Booking
        </button>
      </form>
    </div>
  );
}

export default BookingForm;