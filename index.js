const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;
const mongoose = require("mongoose");
require("dotenv").config();

app.use(express.json());
app.use(cors());

mongoose
  .connect(process.env.DB_URL) 
  .then(() => console.log(`BabyCare DB Connect Successfully!`))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Welcome to BabyCare Server!",
  });
});

app.listen(port, () => {
  console.log(`Server is Running on Port ${port}`);
});