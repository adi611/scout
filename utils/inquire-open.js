const colors = require("colors");
const inquirer = require("inquirer");
const open = require("open");

async function inquireOpen(res, isFromSaved) {
  const msg = isFromSaved
    ? "Do you want to open any saved result? "
    : "Do you want to open any search result? ";
  const input = await inquirer.prompt([
    {
      type: "input",
      name: "toOpen",
      message: msg.green + "y/n",
    },
  ]);

  if (input && (input.toOpen == "y" || input.toOpen == "Y")) {
    const input = await inquirer.prompt([
      {
        type: "input",
        name: "resNo",
        message: "Result number? ".green,
      },
    ]);
    let resNo = input.resNo - 1;

    try {
      const cmd = res[resNo].link;
      await open(`${cmd}`);
      isFromSaved ? await inquireOpen(res, true) : await inquireOpen(res);
    } catch (error) {
      console.error("There was some error opening the link");
    }
  }
}

module.exports = inquireOpen;
