const express = require("express");
const dotenv = require("dotenv");
const { chats } = require("./data/data");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const morgan = require("morgan");
const { notFound, errorHandler } = require("./middlewares/errorMiddleware");
const cors = require("cors")
const app = express();

dotenv.config();
connectDB();
app.use(express.json()).use(morgan("dev")).use(cors());

app.use("/api/user", userRoutes);
app.use(notFound);
app.use(errorHandler); 

const PORT = process.env.PORT || 5000;
app.listen(PORT, (err) => {
  if (err) throw err;
  console.log(`Server Started on Port ${PORT}`);
});
