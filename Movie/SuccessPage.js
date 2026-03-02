import React from "react";
import { useLocation, Link } from "react-router-dom";

function SuccessPage() {
  const location = useLocation();

  if (!location.state) return <h2>No Booking Data Found</h2>;

  const { name, email, mobile, bookingId } = location.state;

  return (
    <div className="ticket-container">
      <div className="ticket">
        <h1>🎟 Ticket Confirmed</h1>

        <p><strong>Booking ID:</strong> {bookingId}</p>
        <p><strong>Name:</strong> {name}</p>
        <p><strong>Email:</strong> {email}</p>
        <p><strong>Mobile:</strong> {mobile}</p>

        <Link to="/">
          <button className="book-btn">Back to Home</button>
        </Link>
      </div>
    </div>
  );
}

export default SuccessPage;