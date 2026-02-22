require("dotenv").config();
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/auth", require("./auth"));
app.use("/api/diary", require("./diary"));
// app.use("/api/emotion", require("./routes/emotion"));

app.listen(5000, () => {
  console.log("SoulScript Backend Running on Port 5000");
});