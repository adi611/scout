const axios = require("axios");

class WebAPI {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.baseUrl = "https://google-search3.p.rapidapi.com/api/v1/search/q=";
  }

  getSearchData(text, callback) {
    text = text.replace(/\s/g, "+");
    const options = {
      method: "GET",
      url: this.baseUrl + text,
      params: { q: text, pageNumber: "1", pageSize: "10", autoCorrect: "true" },
      headers: {
        "X-RapidAPI-Key": this.apiKey,
        "X-User-Agent": "desktop",
        "X-Proxy-Location": "IN",
        "X-RapidAPI-Host": "google-search3.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        callback(null, response.data);
      })
      .catch(function (error) {
        console.error(error);
        callback(error);
      });
  }
}

module.exports = WebAPI;
