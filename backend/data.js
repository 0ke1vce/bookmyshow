// Mock data for seat configuration
const seats = [
    { id: '1A', number: '1A', isBooked: false },
    { id: '1B', number: '1B', isBooked: false },
    { id: '1C', number: '1C', isBooked: true },  // Booked seat
    { id: '1D', number: '1D', isBooked: false },
    { id: '2A', number: '2A', isBooked: true },   // Booked seat
    { id: '2B', number: '2B', isBooked: false },
    { id: '2C', number: '2C', isBooked: false },
    { id: '2D', number: '2D', isBooked: false },
    { id: '3A', number: '3A', isBooked: false },
    { id: '3B', number: '3B', isBooked: false },
    { id: '3C', number: '3C', isBooked: true },   // Booked seat
    { id: '3D', number: '3D', isBooked: false },
    { id: '4A', number: '4A', isBooked: false },
    { id: '4B', number: '4B', isBooked: true },   // Booked seat
    { id: '4C', number: '4C', isBooked: false },
    { id: '4D', number: '4D', isBooked: false }
  ];
  
  // Function to fetch seat data (simulating API call)
  export const getSeats = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(seats);
      }, 500); // Simulate API delay
    });
  };
  
  // Function to mark seats as booked
  export const bookSeats = (selectedSeats) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const updatedSeats = seats.map((seat) =>
          selectedSeats.includes(seat.id) ? { ...seat, isBooked: true } : seat
        );
        resolve(updatedSeats);
      }, 500);
    });
  };
  