const fs = require("fs");
const inquirer = require("inquirer");

inquirer
  .prompt([
    {
      type: "input",
      message: "",
      name: "",
    },
  ])
  .then((response) =>
    fs.writeFile("README.md", ``, (err) =>
      err ? console.error(err) : console.log("Success!")
    )
  );
