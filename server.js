const express = require("express");
const path = require("path");
const cors = require("cors");

const app = express();

app.use(express.static("public"));
app.use(express.json());

const connectDB = require("./config/db");
connectDB();

// cors
const corsOptions = {
  origin: process.env.ALLOWED_CLIENTS.split(","),
};
app.use(cors(corsOptions));
// Template engine
app.set("views", path.join(__dirname, "/views"));
app.set("view engine", "ejs");

// Routes
app.use("/api/files", require("./routes/files"));
app.use("/files", require("./routes/show"));
app.use("/files/download", require("./routes/download"));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server listening at port no ${PORT}`);
});
