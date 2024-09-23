const express = require("express");
const mongoose = require("mongoose");
const PORT = 4000;

const app = express();

app.listen(PORT, () => {
  console.log(`Server is running on Port ${PORT}`);
});

// Index page
app.get("/", (req, res) => {
  res.send("Welcome to our online shopping center ...");
});

mongoose
  .connect(
    "mongodb+srv://behnamhamidi688:iran123456@cluster0.fwbpy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch(() => {
    console.log("Connection failed!");
  });
