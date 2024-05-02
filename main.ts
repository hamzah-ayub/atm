#! /usr/bin/env node

import inquirer from "inquirer"

let myBalance = 10000   //dollars
const pinCode = 3344

console.log(`Your current balance is: ${myBalance}`)

let data = await inquirer.prompt([
{
    message: "Enter your pin number: ",
    type: "number",
    name: "user_pin"
},
])

if (data.user_pin === pinCode)
    {
       data = await inquirer.prompt([
            {
                message: "Select operation: ",
                type: "list",
                name: "operations",
                choices: ["check balance", "withdraw"]
            },
            ])
    }
else
    {
        console.log("Incorrect Pin entered!")
    }

if (data.operations === "check balance")
    {
        console.log(`Your current balance is: ${myBalance}`)
    }
else if (data.operations === "withdraw")
    {
        data = await inquirer.prompt([
            {
                message: "Enter amount: ",
                type: "number",
                name: "userDeduction"
            }
            ])

        
        if (data.userDeduction <= myBalance)
            {
                myBalance -= data.userDeduction
                console.log(`Amount deducted. Your remaining balance is: ${myBalance}`)
            }
        else
            {
                console.log("Low Balance!")
            }
        
    }
else 
{
    console.log("Program terminated!")
}