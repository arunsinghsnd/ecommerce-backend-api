const express = require("express");
const env = require("dotenv");
const app = express();
const mongoose = require("mongoose");

// routes for

const authRoutes = require("./routes/auth");
const adminRoutes = require("./routes/admin/auth");

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
app.use(express.json());
app.use("/api", authRoutes);
app.use("/api", adminRoutes);

app.listen(process.env.PORT, () => {
  console.log(` Server is running on port ${process.env.PORT}`);
});
