import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MoviesList from "./MoviesList";
import MovieDetails from "./MovieDetails";
import BookingForm from "./BookingForm";
import SuccessPage from "./SuccessPage";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MoviesList />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="/book/:id" element={<BookingForm />} />
        <Route path="/success" element={<SuccessPage />} />
      </Routes>
    </Router>
  );
}

export default App;