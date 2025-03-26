const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());

// Sample movie data
const movies = [
  { id: 1, title: "Spider-Man: No Way Home", genre: "Action", rating: "8.5", image: "https://via.placeholder.com/150" },
  { id: 2, title: "The Batman", genre: "Crime", rating: "8.0", image: "https://via.placeholder.com/150" },
  { id: 3, title: "Dune", genre: "Sci-Fi", rating: "8.2", image: "https://via.placeholder.com/150" },
  { id: 4, title: "No Time to Die", genre: "Thriller", rating: "7.8", image: "https://via.placeholder.com/150" },
];

app.get("/api/movies", (req, res) => {
  res.json(movies);
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
