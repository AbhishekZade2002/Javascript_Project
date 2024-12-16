let userScore=0;
let compScore=0;

let choices=document.querySelectorAll(".choice");
let userScoreCard=document.querySelector("#user-score");
let compScoreCard=document.querySelector("#comp-score");
const msg=document.querySelector("#msg");

const genCompChoice=()=>{
    let options=["bat","ball","stump"];
    let randNum=Math.floor(Math.random()*3);
    return options[randNum];
}

const playGame=(userChoice)=>{
    const compChoice=genCompChoice();
    if(userChoice==compChoice){
      msg.innerText="Draw game!";
      msg.style.backgroundColor=" #081b31";
    }
    else{
     if(userChoice==="bat"){
      if(compChoice==="ball"){
        userScoreCard.innerText=++userScore;
        msg.innerText=`yahh win..! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="red";          
        }
        
      else{
        compScoreCard.innerText=++compScore;
        msg.innerText=`Oops You loose..! computer ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor="green";
      }
    }
      else if(userChoice==="ball"){
      if(compChoice==="bat"){
        compScoreCard.innerText=++compScore;
        msg.innerText=`Oops You loose..! computer ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor="green";
      }
      else{
        userScoreCard.innerText=++userScore;
        msg.innerText=`yahh win..! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="red";  
      }
    }
    else{
      if(compChoice==="ball"){
        userScoreCard.innerText=++userScore;
        msg.innerText=`yahh win..! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="red";  
      }
      else{
        compScoreCard.innerText=++compScore;
        msg.innerText=`Oops You loose..! computer ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor="green";  
      }
    }
  } 
} 




choices.forEach((choice)=>{
  choice.addEventListener("click",()=>{
    const userChoice=choice.getAttribute("id");
    playGame(userChoice);
  });  
});
