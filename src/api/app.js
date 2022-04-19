const express = require("express");
const cors = require("cors");
const imagesRoute = require("./routes/routeImages");
require("dotenv").config();

const app = express();

const { PORT = 3000 } = process.env;

app.use(express.json());
app.use(cors());
app.use("/", imagesRoute);

app.listen(PORT);
