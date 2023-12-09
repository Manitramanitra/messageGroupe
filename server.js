const express = require("express");
const dotenv = require("dotenv");
const { chats } = require("./data/data");
const connectDB = require("./config/db")

const app = express();
dotenv.config();
connectDB();

app.get("/", (req, res) => {
  res.send("bonjour tout le monde");
});

app.get("/api/chat", (req, res) => {
  res.send(chats);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, (err) => {
  if (err) throw err;
  console.log(`Server Started on Port ${PORT}`);
});
