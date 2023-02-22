//Give environment path
// #


import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimate from "chalk-animation";


// we use it for wait and execute we call it in welcome function
const ForWaiting = () => {
    return new Promise((res) => {

        setTimeout(res, 2000);
    })
}


// now need to return any thing in async functin 
// I use chalkAnimate.rainbow() import from chock animation use to color change
async function welcome() {

    let rainbowTitle = chalkAnimate.rainbow('Start Calculator')
    await ForWaiting();
    rainbowTitle.stop();
    console.log(` _____________________
    |  _________________  |
    | | JO           0. | |
    | |_________________| |
    |  ___ ___ ___   ___  |
    | | 7 | 8 | 9 | | + | |
    | |___|___|___| |___| |
    | | 4 | 5 | 6 | | - | |
    | |___|___|___| |___| |
    | | 1 | 2 | 3 | | x | |
    | |___|___|___| |___| |
    | | . | 0 | = | | / | |
    | |___|___|___| |___| |
    |_____________________|`)

    // console.log(`${rainbowTitle} is good`)
}
// welcome();

async function askQuestion() {
    inquirer
        .prompt([     // prompt retuen value in obbject thsts why we use .then   (bydefult we see in "answer" )
            /* Pass your questions in here */

            {
                type: "list",  // this is the type we give him list type  showing list of addition sbtraction ....
                name: "opertor", // this is ther operation which operation u need to perform - + * the value save in operator
                message: "What operation",// show on screen
                choices: ["Addition", "Subtraction", "Multiplaction", "Division"]
            },
            {
                type: "number",
                name: "num1",
                message: "Enter number "
            },
            {
                type: "number",
                name: "num2",
                message: "Enter number "
            }


        ])

        .then((answers) => {     //we access through . because we know this is object

            // console.log(answers);

            if (answers.opertor == "Addition") {

                console.log(`${answers.num1} + ${answers.num2} = ${answers.num1 + answers.num2}`);
            } else if (answers.opertor == "Subtraction") {
                console.log(`${answers.num1} - ${answers.num2} = ${answers.num1 - answers.num2}`);
            }
            else if (answers.opertor == "Multiplaction") {
                console.log(`${answers.num1} - ${answers.num2} = ${answers.num1 * answers.num2}`);
            }
            else if (answers.opertor == "Division") {
                console.log(`${answers.num1} % ${answers.num2} = ${answers.num1 / answers.num2}`);
            }





        })

    //   .catch((error) => {
    //     if (error.isTtyError) {
    //       // Prompt couldn't be rendered in the current environment
    //     } else {
    //       // Something else went wrong
    //     } 
    //   });
};
askQuestion();