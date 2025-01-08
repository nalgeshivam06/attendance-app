require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const authRoutes = require("./routes/authRoutes");

const app = express();
connectDB(); // Connect to MongoDB

app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send({ message: "Server error" });
});
// app.use((err, req, res, next) => {
//   if (err instanceof SyntaxError && err.status === 400 && "body" in err) {
//     console.error("Bad JSON:", err.message);
//     return res.status(400).json({ error: "Invalid JSON payload" });
//   }
//   next(); // Pass to the default error handler if it's not a JSON error
// });


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
