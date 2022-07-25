const readlineSync = require("readline-sync");
const chalk = require("chalk");

const userName = readlineSync.question(chalk.red.bold("Hey friendly, what's your name? \n"))
console.log(chalk.greenBright.bold("\nHello " + chalk.whiteBright.underline(userName.toUpperCase()+"..!!")+ " let's see how well do you know me\n"));

// initialising score
let score = 0;

// Leaderboard data
var highscores = [
  {
    name: "Tirthesh",
    score: 7
  }
]

// To play the quiz
function playQuiz(question, answer){
  var userAnswer = readlineSync.question(chalk.bold(question)); 
if(userAnswer.toUpperCase() === answer.toUpperCase()){
  score++
      console.log(chalk.greenBright.bold("\nYes! " + userName + " you are bloody right!!\n"));
}else{
  console.log(chalk.red.bold("\nNo! " + userName + " you are wrong :( \n"));
   console.log(chalk.yellowBright.bold("It is " + answer +"\n"));
  console.log(chalk.greenBright.bold("You better know this the next time!!\n"));
}
}

var qa = [
  {
    question: "What is my age? ",
    answer: "24"
  },
  {
    question: "What is my favorite color? ",
    answer: "black"
  },
  {
    question: "What is my favorite go to activity? ",
    answer: "working out"
  },
  {
    question: "Which is my dream bike? ",
    answer: "Ducati Panigale"
  },
  {
    question: "Who is my favorite football player? ",
    answer: "Lionel Messi"
  },
  {
    question: "What is my favorite/ go-to street food? ",
    answer: "Vadapav"
  },
  {
    question: "Who is my favorite avenger? ",
    answer: "Not one, but All of them my friend XD"
  }
]

// loop to run through the complete Q&A and call the function
for(i=0; i<qa.length; i++){
  let data = qa[i]
  playQuiz(data.question, data.answer)
}

// To check if user has made a mark to the highest score
for(i in highscores){
  if(score>=highscores[i].score){
    console.log(chalk.magenta.bold("Yay " + userName.toUpperCase() + " You have a new high score: " + score + "/" + qa.length))
  }else{
    console.log(chalk.magenta.bold("Yay " + userName.toUpperCase() + " You have scored: " + score + "/" + qa.length))
  }
  break
}

// To show leaderboard
console.log(chalk.greenBright.bold("\nCurrent leaderboard"))
for (i in highscores){
      console.log(chalk.blueBright(highscores[i].name), chalk.bold(highscores[i].score))
  }