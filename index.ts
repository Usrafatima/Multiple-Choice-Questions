#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bgMagenta("Welcome to Multiple Choice Questions"))
let totalScore = 0;
let userinfo = await inquirer.prompt([
    {
        name : "Username",
        type :"input",
        message: "Enter Name"
    }
])
const Question = await inquirer.prompt([
  
  {message : "What is the capital of Australia?", 
   type:"list",
   name: "answer",
   choices :["A) Sydney", "B) Canberra", "C) Melbourne" ,"D) Perth"]
 } 
]);
if (Question.answer === "B) Canberra"){
    console.log("Correct Answer");
    totalScore+=10
}else {
    console.log("Wrong Answer")
};
const Question2 =await inquirer.prompt([
    {message:"Who wrote the novel \'To Kill a Mockingbird' ",
    type:"list",
    name:"answer",
    choices :["A) Harper Lee ","B) F. Scott Fitzgerald" ,"C)  Ernest Hemingway", "D)  Mark Twain"]
}
]);
if (Question2.answer === "A) Harper Lee"){
    console.log("Correct Answer");
    totalScore+=10
}else {
    console.log("Wrong Asnwer")
};
const Question3 = await inquirer.prompt([
    {message:"What is the chemical symbol for gold?",
    type:"list",
    name :"answer",
    choices :["A) Au", "B) Ag", "C) Fe", "D) Hg"]
}
]);
if (Question3.answer === "A) Au"){
    console.log("Correct Answer")
    totalScore +=10
}else {
    console.log("Wrong answer")
};

const Question4= await inquirer.prompt([
{message :"Which planet is known as the Red Planet?",
type: "list",
name: "answer",
choices:["A) Jupiter" ,"B) Mars", "C) Saturn","D) Venus"],
}
]);
if  (Question4.answer === "B) Mars" ){
    console.log("Correct Answer")
    totalScore+=10
}else {
    console.log("Wrong Answer")
};

const Question5= await inquirer.prompt([
    {message :"Who painted the Mona Lisa?",
    type: "list",
    name: "answer",
    choices:["A) Vincent van Gogh","B) Pablo Picasso","C) Leonardo da Vinci"," D) Michelangelo"],
    }
])
if  (Question5.answer === "C) Leonardo da Vinci" ){
    console.log("Correct Answer")
    totalScore +=10
}else {
    console.log("Wrong Answer")
};
const Question6 = await inquirer.prompt([
    {
        name : "answer",
        type : "list",
        message :"What is the tallest mountain in the world?",
        choices :[" A) Mount Everest", " B) K2", "C) Mount Kilimanjaro", "D) Mount Fuji"],
    }
])
if(Question6.answer === "A) Mount Everest"){
    console.log("Correct Answer")
    totalScore +=10
}else("Wrong Answer")
const Question7 = await inquirer.prompt([
    {
        name : "answer",
        type : "list",
        message :"Which of the following is not a primary color?",
        choices :[" A) Blue","B) Yellow" , "C) Green", "D) Red " ],
    }
])
if(Question7.answer === "C) Green"){
    console.log("Correct Answer")
    totalScore +=10
}else("Wrong Answer")
const Question8 = await inquirer.prompt([
    {
        name : "answer",
        type : "list",
        message :"Who is known as the father of modern physics?",
        choices :[" A) Isaac Newton", "B) Albert Einstein", "C) Galileo Galilei", "D) Nikola Tesla"],
    }
])
if(Question8.answer === "B) Albert Einstein"){
    console.log("Correct Answer")
    totalScore+=10
}else("Wrong Answer")
const Question9 = await inquirer.prompt([
    {
        name : "answer",
        type : "list",
        message :"What is the chemical formula for water?",
        choices :["A) H2O2", "B) CO2", "C) H2O", "D) NaCl"],
    }
])
if(Question9.answer === "C) H20"){
    console.log("Correct Answer")
    totalScore+=10
}else("Wrong Answer")
const Question10 = await inquirer.prompt([
    {
        name : "answer",
        type : "list",
        message :"What is the largest mammal in the world?",
        choices :["A) Elephant", "B) Blue Whale", "C) Polar Bear", "D) Girrafe"],
    }
])
if(Question10.answer === "B) BLue Whale"){
    console.log("Correct Answer")
    totalScore+=10
}else("Wrong Answer")
console.log(chalk.yellowBright(`${userinfo.Username}, You got ${totalScore} out of 100`))