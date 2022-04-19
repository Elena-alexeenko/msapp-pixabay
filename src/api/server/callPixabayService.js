const axios = require("axios");
const { APIKEY = "25540812-faf2b76d586c1787d2dd02736" } = process.env;
const baseUrl = "https://pixabay.com/api";

// calls for fetching the data from Pixabay api

module.exports.query = (queryData) => {
  const { category, pageNum, perPage, order } = queryData;
  const options = {
    params: {
      key: APIKEY,
      q: category,
      page: pageNum,
      per_page: perPage,
    },
  };
  console.log(options);
  if (order) {
    options.params.order = order;
  }
  return axios
    .get(baseUrl, options)
    .then((response) => {
      let maxPages = 0;
      if (response.data?.total) {
        maxPages = Math.round(response.data.total / perPage);
      }
      const pixabayData = {
        data: response.data,
        maxPages,
      };
      return pixabayData;
    })
    .catch((err) => err);
};

module.exports.sortById = (id) => {
  const options = {
    params: {
      key: APIKEY,
      id: id,
    },
  };
  return axios
    .GET(baseUrl, options)
    .then((response) => response.data)
    .catch((err) => err);
};
