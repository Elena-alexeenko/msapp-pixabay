const express = require("express");
const router = express.Router();
const { sortById, getImages } = require("../serverCall/getData");
const { validateId } = require("../middleware/validateId");
const { validateGetImage } = require("../middleware/validateImage");
var app = express();

// https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS
app.get("/", function (req, res) {
  // for testing if the server is running
  res.send("everything is good...");
});

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,POST,PUT,PATCH,DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type,Authorization");
  if (req.method === "OPTIONS") {
    res.status(200).send();
    return;
  }
  next();
});

router.get("/images", validateGetImage, getImages);
router.get("/images/:id", validateId, sortById);

module.exports = router;
