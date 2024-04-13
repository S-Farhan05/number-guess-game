#! /usr/bin/env node
import inquirer from "inquirer";
const initialNumber = Math.floor(Math.random() * 6 + 1);
const result = await inquirer.prompt([
    {
        name: "userGuessNumber",
        type: "number",
        message: "Enter a number between 1 and 6 :"
    }
]);
if (result.userGuessNumber > 6 || result.userGuessNumber < 1) {
    console.log("Wrong input!! Pls give a number between 1 and 6");
}
else if (result.userGuessNumber === initialNumber) {
    console.log("CONGRATS YOU WON THE GAME!!");
}
else
    (console.log("TRY AGAIN YOU LOST"));
