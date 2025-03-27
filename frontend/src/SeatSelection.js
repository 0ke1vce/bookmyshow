import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './SeatSelection.css'; // Ensure you have basic styling

const SeatSelection = ({ movieId, date, time, onBookingComplete }) => {
  const [seats, setSeats] = useState([]);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchSeats();
  }, [movieId, date, time]);

  const fetchSeats = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/seats?movieId=${movieId}&date=${date}&time=${time}`);
      setSeats(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching seats:', error);
      setError('Failed to load seats');
      setLoading(false);
    }
  };

  const handleSeatClick = (seatId) => {
    if (selectedSeats.includes(seatId)) {
      setSelectedSeats(selectedSeats.filter((id) => id !== seatId));
    } else {
      setSelectedSeats([...selectedSeats, seatId]);
    }
  };

  const handleBooking = async () => {
    if (selectedSeats.length === 0) {
      alert('Please select at least one seat.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/api/book', {
        movieId,
        date,
        time,
        seats: selectedSeats,
      });

      if (response.status === 200) {
        alert('Seats booked successfully!');
        onBookingComplete();
      } else {
        alert('Booking failed. Please try again.');
      }
    } catch (error) {
      console.error('Error booking seats:', error);
      alert('Booking failed. Try again later.');
    }
  };

  if (loading) return <p>Loading seats...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="seat-selection">
      <h2>Select Your Seats</h2>
      <div className="seats-container">
        {seats.map((seat) => (
          <div
            key={seat.id}
            className={`seat ${seat.isBooked ? 'booked' : ''} ${selectedSeats.includes(seat.id) ? 'selected' : ''}`}
            onClick={() => !seat.isBooked && handleSeatClick(seat.id)}
          >
            {seat.number}
          </div>
        ))}
      </div>
      <button onClick={handleBooking} className="btn-book">
        Book Selected Seats
      </button>
    </div>
  );
};

export default SeatSelection;
        