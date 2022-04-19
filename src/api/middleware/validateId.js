// Simple validation
const error = require("./errors");
module.exports = {};
module.exports.validateId = (req, res, next) => {
  const { id } = req.params;
  if (!/^\d+$/.test(id))
    // check if string contains numbers only
    throw error;
  next();
};
