const express = require("express");
const env = require("dotenv");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

// routes for

const userRoutes = require("./routes/user");

// Enviroment variable so we  can say constant

env.config();

//DB Connection

mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("Database Connected");
  });

// middleware
app.use(bodyParser());
app.use("/api", userRoutes);

app.listen(process.env.PORT, () => {
  console.log(` Server is running on port ${process.env.PORT}`);
});
