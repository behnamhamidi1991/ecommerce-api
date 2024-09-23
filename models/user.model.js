const mongoose = require("mongoose");

const UserSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "You must enter your name!"],
    },
    country: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
    },
  },

  {
    timestamps: true,
  }
);

const User = mongoose.model("User", UserSchema);
module.exports = User;
