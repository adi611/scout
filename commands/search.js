const WebAPI = require('../lib/WebAPI')
const KeyManager = require("../lib/KeyManager")
const Database = require('../database/DB2')
const terminalLink = require('terminal-link');
const colors = require("colors");
const inquirer = require("inquirer");
const inquireOpen = require('../utils/inquire-open')

const search = {
    web(cmd) {
        // console.log("web");
        const key = new KeyManager();
        const webApiKey = key.getKey().apiKey_websearch;
        const webapi = new WebAPI(webApiKey);
        webapi.getSearchData(cmd.text, (err, res) => {
            if (err) {
                throw err;
            }

            print(res);
        });
        // const res = webapi.res;
        // print(res);
    }
}

async function inquireSave(resultsArr) {
    const input = await inquirer.prompt([
        {
            type: "input",
            name: "toSave",
            message: "Do you want to save any result? ".green + "y/n",
        }
    ])

    if (input && (input.toSave == "y" || input.toSave == "Y")) {
        const input = await inquirer.prompt([
            {
                type: "input",
                name: "resNo",
                message: "Result number? ".green,
            }
        ])
        // console.log(input.resNo);
        const db = new Database();
        await db.save(resultsArr[input.resNo])
        await db.showAllRows();
        await inquireSave(resultsArr);
    }
}

async function inquire(resultsArr) {
    await inquireOpen(resultsArr);
    console.log();
    await inquireSave(resultsArr);
}

function print(res) {
    // console.log(res);
    let count = 1;
    const featured = res.featured_snippet ? res.featured_snippet : null;
    if (featured) {
        const titleLink = terminalLink(featured.title, featured.link);
        console.log("\nTop result:\n".blue);
        console.log("[" + count + "] " + "Title: ".yellow + titleLink.white);
        // console.log("Link: " + featured.link);
        console.log("    Description: ".yellow + featured.description.white);
        count++;
    }
    console.log();

    featured ? console.log("More results:\n".blue) : console.log("Top results:\n".blue);
    const results = res.results;
    // let table = [];
    results.forEach(element => {
        const titleLink = terminalLink(element.title, element.link);
        console.log("[" + count + "] " + "Title: ".yellow + titleLink.white);
        console.log("    Description: ".yellow + element.description.grey);
        console.log("------------------------------------------------------------");
        count++;
    });
    const resultsArr = [res.featured_snippet, ...res.results];
    console.log(resultsArr);
    inquire(resultsArr);
}

const arr = [
    {
        id: 18,
        title: 'React With CORS: The How and the Why | by Gernot Gradwohl',
        url: 'https://betterprogramming.pub/react-with-cors-the-how-and-the-why-163ecf10035f',
        description: 'CORS is a technique that allows you to make an ajax request to a server of a different domain. This is very useful if you want to consume an API directly on ...'
    },
    {
        id: 19,
        title: 'Resolving the TypeError: Cannot Read Property of Undefined ...',
        url: 'https://rollbar.com/blog/javascript-typeerror-cannot-read-property-of-undefined/#:~:text=Undefined%20means%20that%20a%20variable,Cannot%20read%20property%20of%20undefined%20.', description: ''
    },
    {
        id: 20,
        title: 'Resolving the TypeError: Cannot Read Property of Undefined ...',
        url: 'https://rollbar.com/blog/javascript-typeerror-cannot-read-property-of-undefined/',
        description: '25-Nov-2021 — Undefined means that a variable has been declared but has not been assigned a value. In JavaScript, properties and functions can only belong to ...'
    },
    {
        id: 21,
        title: 'Solve - Cannot read property value of Undefined in JS',
        url: 'https://bobbyhadz.com/blog/javascript-cannot-read-property-value-of-undefined#:~:text=There%20are%203%20reasons%20the,the%20DOM%20elements%20are%20declared.',
        description: ''
    },
    {
        id: 23,
        title: "How to Avoid Getting 'Cannot read property of undefined' in ...",
        url: 'https://www.webtips.dev/webtips/javascript/avoid-getting-cannot-read-property-of-undefined-in-javascript',
        description: '27-Oct-2021 — This error occurs when you try to read or access a property on an object that is undefined . Another common case that is caused by a similar ...'
    },
    {
        id: 24,
        title: 'Uncaught TypeError: Cannot read property of undefined In ...',
        url: 'https://www.lambdatest.com/blog/undefined-type-error-in-javascript/',
        description: '27-Mar-2018 — If you get undefined error, you need to make sure that which ever variables throws undefined error, is assigned a value to it.'
    },
    {
        id: 26,
        title: 'Uncaught TypeError: Cannot read property of undefined',
        url: 'http://net-informations.com/js/iq/unerror.htm',
        description: 'JavaScript TypeError is thrown when an operand or argument passed to a function is incompatible with the type expected by that operator or function. This error ...'
    }
]

inquire(arr);

module.exports = search;