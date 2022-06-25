const { pool } = require('./db');
const platform = require('process').platform;
const util = require('util');
const exec = util.promisify(require('child_process').exec);
const colors = require("colors");
const inquirer = require("inquirer");
const open = require('open');
// const { exec } = require('child_process');

async function showAllRows(isInquire) {
    const text = `SELECT * from query`
    try {
        const res = await pool.query(text);
        console.log(res.rows);
        if (isInquire) {
            await inquire(res.rows)
        }
        return true;
    } catch (error) {
        console.error(error);
    }
}

async function inquire(res) {
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
        resNo = input.resNo;
    }

    if (resNo !== -1) {
        // if (platform !== 'linux') {
        //     throw new Error('Feature only supported for Linux-based OS!');
        // }

        try {
            await open(`${res[resNo].url}`);
            // console.log(`lynx ${res[resNo].url}`);
            // return await lynx(`lynx ${res[resNo].url}`)
        } catch (error) {
            console.error("There was some error with Lynx - please make sure it's installed.");
        }
    }
}

// async function lynx(cmd) {
//     console.log("start cmd.exe /K " + cmd);
//     const { stdout, stderr } = await exec("start cmd.exe /K " + cmd);
//     console.log('stdout:', stdout);
//     console.log('stderr:', stderr);
//     return true;
// }

showAllRows(true);

module.exports = showAllRows;