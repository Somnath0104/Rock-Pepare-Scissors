let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const scoreUser = document.querySelector("#user-score");
const scoreComp = document.querySelector("#comp-score");

const genComputerChoice = () => {
    let options = ["rock","paper", "scissor"];
    const randIdx  = Math.floor(Math.random() * 3);
    return options[randIdx]
};

const drowGame = () =>{
    msg.innerText = ("Game Was Drow Play Again");
    msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin,userChoice,compChoice) => {
    if (userWin) {
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
        userScore++;
        scoreUser.innerText = userScore
    } else {
       console.log("You Lose") ;
       msg.innerText = `You lost. ${compChoice} beats Your ${userChoice}`;
       msg.style.backgroundColor = "red";
       compScore++;
       scoreComp.innerText = compScore;
    }

};
const playGame = (userChoice) =>{
    console.log("user choice = ",userChoice);
    //compuetr choice
    const compChoice = genComputerChoice();
    console.log("Computer Choice = ",compChoice)

    if(userChoice === compChoice){
        //Drow Game
        console.log("Drow Game");
        drowGame();
    } else{
        let userWin = true;
        if(userChoice === "rock"){
            //comp 2 option only paper & scissor
            userWin = compChoice === "paper" ? false : true;// scossor  for true
        } else if (userChoice === "paper") {
            //rock scissor
            userWin = compChoice === "scissor" ? false :true;
        } else{ //scissor is choice of User
            //comp rock paper
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
};

//loop for printing the choice of computer and User 
choices.forEach((choice) =>{
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice)
    });
});