const colors = require("colors");
const inquirer = require("inquirer");
const open = require('open');

async function inquireOpen(res) {
    let resNo = -1;
    const input = await inquirer.prompt([
        {
            type: "input",
            name: "toOpen",
            message: "Do you want to open any saved result? ".green + "y/n",
        }
    ])

    if (input && (input.toOpen == "y" || input.toOpen == "Y")) {
        const input = await inquirer.prompt([
            {
                type: "input",
                name: "resNo",
                message: "Result number? ".green,
            }
        ])
        resNo = input.resNo - 1;

        if (resNo !== -1) {
            try {
                const cmd = res[resNo].url ? res[resNo].url : res[resNo].link;
                await open(`${cmd}`);
                await inquireOpen(res);

            } catch (error) {
                console.error("There was some error opening the url");
            }
        }
    }


}

module.exports = inquireOpen;