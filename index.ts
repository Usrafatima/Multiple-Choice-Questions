import inquirer from "inquirer";

const Question = await inquirer.prompt([
  {message : "Start Quiz", type :"string", name :"First Question"} ,
  {message:"What is your name", type :"string", name :"Question"},
  {message : "What is the capital of France?", 
   type:"list",
   name: "answer",
   choices :["A) Berlin", "B) Madrid", "C) Paris" ,"D) Rome"]
 } 
]);
if (Question.answer === "C) Paris"){
    console.log("Correct");
}else {
    console.log("Try again")
};
const Question2 =await inquirer.prompt([
    {message:"What is the largest mammal in the world?",
    type:"list",
    name:"answer",
    choices :["A) Elephant","B) Blue whale" ,"C) Giraffe", "D) Hippopotamus"]
}
]);
if (Question2.answer === "B) Blue whale"){
    console.log("Correct");
}else {
    console.log("Try again")
};
const Question3 = await inquirer.prompt([
    {message:"How many planets are there in our solar system?",
    type:"list",
    name :"answer",
    choices :["A) 8", "B) 7", "C) 5", "D) 9"]
}
]);
if (Question3.answer === "A) 8"){
    console.log("Correct")
}else {
    console.log("Try again")
};

const Question4= await inquirer.prompt([
{message :"What is the largest ocean on Earth?",
type: "list",
name: "answer",
choices:["A) Indian Ocean" ,"B) Atlantic Ocean", "C) Arctic Ocean","D) Pacific Ocean"],
}
]);
if  (Question4.answer === "D) Pacific Ocean" ){
    console.log("Correct")
}else {
    console.log("Try again")
};

const Question5= await inquirer.prompt([
    {message :"What is the largest organ in the human body?",
    type: "list",
    name: "answer",
    choices:["A) Liver","B) Brain","C) Skin"," D) Heart"],
    }
])
if  (Question5.answer === "C) Skin" ){
    console.log("Correct")
}else {
    console.log("Try again")
};