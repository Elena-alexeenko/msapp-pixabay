//A custom validator for validating the query data.
module.exports = {};
module.exports.validateGetImage = (req, res, next) => {
  const { category, pageNum, perPage } = req.query;
  if (category === null) throw new console.error("category can not be empty");
  if (!pageNum || pageNum < 1) throw new console.error("invalid page number");
  if (!perPage || perPage < 3 || perPage > 200)
    throw new console.error("items per page should be between 3 and 200");
  next();
};
