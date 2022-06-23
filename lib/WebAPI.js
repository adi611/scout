const axios = require("axios");
const terminalLink = require('terminal-link');
const colors = require("colors")

class WebAPI {
    constructor(apiKey) {
        this.apiKey = apiKey;
        this.baseUrl = 'https://google-search3.p.rapidapi.com/api/v1/search/q=';
    }

    getSearchData(text) {
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

        // let res = {}

        axios.request(options).then(function (response) {
            print(response.data);
            // res = {...response.data};
        }).catch(function (error) {
            console.error(error);
        });
    }
}

function print(res) {
    const featured = res.featured_snippet;
    const titleLink = terminalLink(featured.title, featured.link);
    console.log("\nTop result:\n".blue);
    console.log("Title: ".yellow + titleLink.white);
    // console.log("Link: " + featured.link);
    console.log("Description: ".yellow + featured.description.white);
    console.log();

    console.log("More results:\n".blue);
    const results = res.results;
    // let table = [];
    results.forEach(element => {
        const titleLink = terminalLink(element.title, element.link);
        console.log("Title: ".yellow + titleLink.white);
        console.log("Description: ".yellow + element.description.white);
        console.log("------------------------------");
    });
    // console.table(table);
}

module.exports = WebAPI;