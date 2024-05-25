#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Enter Your FirstNumber", type: "number", name: "FirstNumber" },
    {
        message: "Enter Your SecondNumber",
        type: "Number",
        name: "SecondNumber",
    },
    {
        message: "Select One Oprator To Perfom Action",
        type: "list",
        name: "Oprator",
        choices: ["ADDITION", "SUBSTRACTION", "MULTIPLICATION", "DIVISION"],
    },
]);
if (answer.Oprator === "ADDITION") {
    console.log(answer.FirstNumber + answer.SecondNumber);
}
else if (answer.Oprator === "SUBSTRACTION") {
    console.log(answer.FirstNumber - answer.SecondNumber);
}
else if (answer.Oprator === "MULTIPICATION") {
    console.log(answer.FirstNumber * answer.SecondNumber);
}
else if (answer.Oprator === "DIVISION") {
    console.log(answer.FirstNumber / answer.SecondNumber);
}
else {
    "Please Select One Oprator";
}
