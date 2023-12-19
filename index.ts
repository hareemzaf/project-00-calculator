import inquirer from "inquirer";

const answers: {
    numberOne: number;
    numberTwo: number;
    operator: string;
} = await inquirer.prompt([
    {
        type: "number",
        name: "numberOne",
        message: "Please enter your first number: "
    }, 
    {
        type: "number",
        name: "numberTwo",
        message: "Please enter your second number: "
    }, 
    {
        type: "list",
        name: "operator",
        choices:[ "+","-","*","/","%"],
        message: "select 0perator: "
    }, 
])


const {numberOne, numberTwo, operator}= answers;

if(numberOne && numberTwo && operator){
    let result: number = 0 ;
    if(operator === "+"){
        result = numberOne + numberTwo
    } else     if(operator === "-"){
        result = numberOne - numberTwo
    }    if(operator === "*"){
        result = numberOne * numberTwo
    }    if(operator === "/"){
        result = numberOne / numberTwo
    }

    console.log("Your result is : ", result)
} else {
    console.log("Please enter valid input")
}