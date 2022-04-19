// This is a error handler for formating the error message
// * Gracefully handles unhandled exceptions.

module.exports = (err, req, res, next) => {
  const { statusCode = 400, message } = err;
  res.status(statusCode).send({
    message:
      statusCode === 400
        ? `Error ${statusCode} - Bad Request`
        : `Error ${statusCode} - ${message}`,
  });
};

module.exports.error = (err, req, res, next) => {
  console.log("error");
};
