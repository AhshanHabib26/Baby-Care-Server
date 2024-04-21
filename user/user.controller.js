const bcrypt = require("bcrypt");
const User = require("./user.schema");
const jwt = require("jsonwebtoken");

exports.createUser = async (req, res) => {
  const { username, email, password } = req.body;

  const isUserExists = await User.findOne({ email });

  if (isUserExists) {
    return res.status(400).json({
      sucess: false,
      message: "User Already Exists",
    });
  }

  const user = await User.create({ username, email, password });

  res.status(201).json({
    success: true,
    message: "User created successfully",
    data: null,
  });
};

exports.loginUser = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) {
    return res.status(401).json({
      success: false,
      message: "Invalid email or password",
    });
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    return res.status(401).json({
      success: false,
      message: "Invalid email or password",
    });
  }

  const jwtPayload = {
    name: user.username,
    email: user.email,
    role: user.role,
  };

  const token = jwt.sign(jwtPayload, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });

  res.status(200).json({
    success: true,
    message: "User login successful",
    token,
  });
};
