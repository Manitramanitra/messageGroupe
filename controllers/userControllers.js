const expressAsyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const generateToken = require("../config/generateToken");
const bcrypt = require("bcrypt")
const resgisterUser = expressAsyncHandler(async (req, res) => {
  const { name, email, password, pic } = req.body;
  if (!name || !email || !password) {
    throw new Error("Please Enter all the fields");
  }

  const userExist = await User.findOne({ email });

  if (userExist) {
    return res.status(400).send({ error: "User already exists" });
  }

  const user = await User.create({
    name,
    email,
    password,
    pic,
  });

  if (user) {
    data = {
      _id: user._id,
      name: user.name,
      email: user.email,
      pic: user.pic,
    };
    res
      .status(201)
      .json({ message: "User Create successful", data, error: null });
  } else {
    return res
      .status(500)
      .json({ error: "Failed to Create the User try later" });
  }
});

const loginUser = expressAsyncHandler(async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    console.log(user)
    if (!user) {
      return res.status(404).json({ error: "Email not found" });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ error: "Incorrect password" });
    }

    const token = await generateToken(user._id);
    const data = { user: user._id, token };
    res.status(200).json({ message: "Login successful!", data, error: null });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error. Try Later" });
  }
});

module.exports = { resgisterUser, loginUser };
