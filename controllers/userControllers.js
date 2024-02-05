const expressAsyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const generateToken = require("../config/generateToken");
const bcrypt = require("bcrypt")

const resgisterUser = expressAsyncHandler(async (req, res) => {
  const { pseudo, email, password, pic } = req.body;
  if (!pseudo || !email || !password) {
    throw new Error("Please Enter all the fields");
  }

  const userExist = await User.findOne({ $or: [{ email }, { pseudo }] });

  if (userExist) {
    let errorText = "";
    if (userExist.email === email) {
      errorText = "Email already exists";
    } else if (userExist.pseudo === pseudo) {
      errorText = "Pseudo already exists";
    }
    return res.status(200).send({ error: errorText });
  }

  if(password.length<6){
    return res.status(200).send({ error: "min length password 6" });
  }

  //upload image if user enter image
  if(req.file){
    const file = req.file
  }

  const user = await User.create({
    pseudo,
    email,
    password,
    pic,
  });

  if (user) {
    data = {
      _id: user._id,
      pseudo: user.pseudo,
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

    if (!user) {
      return res.status(200).json({ error: "Email not found" });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(200).json({ error: "Incorrect password" });
    }

    const token = await generateToken(user._id);
    const data = { user: user._id, token };
    res.status(200).json({ message: "Login successful!", data, error: null });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error. Try Later" });
  }
});

module.exports = { resgisterUser, loginUser };
