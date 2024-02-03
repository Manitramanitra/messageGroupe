const express = require("express");
const dotenv = require("dotenv");
const { chats } = require("./data/data");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const morgan = require("morgan");

const app = express();

dotenv.config();
connectDB();
app.use(express.json()).use(morgan("dev"));

app.use("/api/user", userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, (err) => {
  if (err) throw err;
  console.log(`Server Started on Port ${PORT}`);
});
