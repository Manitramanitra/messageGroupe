const mongoose = require("mongoose");
const { isEmail } = require("validator");
const bcrypt = require("bcrypt")
const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      validate: [isEmail]
    },
    password: {
      type: String,
      required: true,
    },
    pic: {
      type: String,
      required: true,
      default: "coucou.image.com",
    },
  },
  {
    timestamps: true,
  }
);

userSchema.pre("save", async function(next){
  const salt = await bcrypt.genSalt();
  const hashedPassword = await bcrypt.hash(this.password, salt);
  this.password = hashedPassword;
  next();
})

const User = mongoose.model("User", userSchema);
module.exports = User;
