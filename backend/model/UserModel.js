const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Your email address is required"],
    unique: true,
  },
  username: {
    type: String,
    required: [true, "Your username is required"],
  },
  password: {
    type: String,
    required: [true, "Your password is required"],
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

// Hash password before saving
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next(); // only hash if password changed
  this.password = await bcrypt.hash(this.password, 12);
  next();
});

// Compare password method
userSchema.methods.comparePassword = function (candidatePassword) {
  return bcrypt.compare(candidatePassword, this.password);
};

module.exports = mongoose.model("User", userSchema);

// const mongoose = require("mongoose");
// const bcrypt=require("bcryptjs") ;

// const userSchema = new mongoose.Schema({
//   email: {
//     type: String,
//     required: [true, "Your email address is required"],
//     unique: true,
//   },
//   username: {
//     type: String,
//     required: [true, "Your username is required"],
//   },
//   password: {
//     type: String,
//     required: [true, "Your password is required"],
//   },
//   createdAt: {
//     type: Date,
//     default: new Date(),
//   },
// });

// userSchema.pre("save", async function () {
//   this.password = await bcrypt.hash(this.password, 12);

//   userSchema.methods.comparePassword = function (candidatePassword) {
//   return bcrypt.compare(candidatePassword, this.password);
// };

// });

// module.exports = mongoose.model("User", userSchema);

