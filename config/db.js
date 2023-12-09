const mongoose = require("mongoose");

const connectDB = () => {
  mongoose
    .connect(process.env.MONGO_URI + process.env.DATABASE_NAME, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("mongodb connected"))
    .catch((error) => {
      console.log("erreur :" + error);
    });
};
module.exports = connectDB;
