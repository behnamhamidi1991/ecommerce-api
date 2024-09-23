const express = require("express");
const mongoose = require("mongoose");
const productRoute = require("./routes/product.route");
const userRoute = require("./routes/user.route");
const PORT = 4000;

const app = express();

// Middlewares
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server is running on Port ${PORT}`);
});

// Index page
app.get("/", (req, res) => {
  res.send("Welcome to our online shopping center ...");
});

app.use("/api/products", productRoute);
app.use("/api/users", userRoute);

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
