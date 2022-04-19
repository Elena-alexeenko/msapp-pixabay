const { query, sortById } = require("../server/callPixabayService");

module.exports = {};

module.exports.getImages = (req, res, next) => {
  query(req.query)
    .then((response) => {
      res.send(response);
    })
    .catch(next);
};

module.exports.sortById = (req, res, next) => {
  sortById(req.params.id)
    .then((response) => {
      res.send(response);
    })
    .catch(() => {
      console.log("no image with that id was found");
    })
    .catch(next);
};
