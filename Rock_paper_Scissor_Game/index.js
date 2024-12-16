let userScore=0;
let compScore=0;



const choices=document.querySelectorAll(".choice");
const msgPara=document.querySelector("#msg");
const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");

const genCompChoice=()=>{
    let options=["rock","paper","scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx]
};
const drawGame=()=>{
    msgPara.innerText="Game was Draw.";
    msgPara.style.backgroundColor="#081b31";
};

const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        msgPara.innerText=`you win! Your ${userChoice} beats ${compChoice}`;
        msgPara.style.backgroundColor="red";
    }
    else{
        compScore++;
        compScorePara.innerText=compScore;
        msgPara.innerText=`you loose! Your ${compChoice} beats ${userChoice}`;
        msgPara.style.backgroundColor="green";
    }
}

const playGame=(userChoice)=>{
    
    const compChoice=genCompChoice();
    if(userChoice===compChoice){
        drawGame();
    }
    else{
        let userWin=true;
        if(userChoice=="rock"){
            //scissors,paper
            userWin=compChoice==="paper"?false:true;
        }
        else if(userChoice=="paper"){
            //rock,scissors
            userWin=compChoice==="scissors"?false:true;
        }
        else{
            compChoice==="rock"?false:true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
}

choices.forEach((choice)=>{
    
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        
        playGame(userChoice);
    })
});