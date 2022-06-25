const axios = require("axios");
const terminalLink = require('terminal-link');
const colors = require("colors");
const inquirer = require("inquirer");
// const Database = require('../database/Database')

class WebAPI {
    constructor(apiKey) {
        this.apiKey = apiKey;
        this.baseUrl = 'https://google-search3.p.rapidapi.com/api/v1/search/q=';
    }

    getSearchData(text, callback) {
        // const str = text.split(' ').join('+')
        text = text.replace(/\s/g, '+');
        // console.log(this.baseUrl + text);
        const options = {
            method: 'GET',
            url: this.baseUrl + text,
            params: { q: text, pageNumber: '1', pageSize: '10', autoCorrect: 'true' },
            headers: {
                'X-RapidAPI-Key': this.apiKey,
                'X-User-Agent': 'desktop',
                'X-Proxy-Location': 'IN',
                'X-RapidAPI-Host': 'google-search3.p.rapidapi.com'
            }
        };

        axios.request(options).then(function (response) {
            console.log(response.data);
            callback(null, response.data)
        }).catch(function (error) {
            console.error(error);
            callback(error)
        });

    }
}

module.exports = WebAPI;