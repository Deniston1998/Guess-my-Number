
let score = 20;
let secretNumber = Math.trunc((Math.random()*20)+1);

let highScore = 0;
let displayme= function(message){
    document.querySelector(".message").textContent=message;}

document.querySelector(".check").addEventListener("click",function(){
    let guess= Number(document.querySelector(".guess").value);
    if (!guess){
        displayme("enter the valid number");
     
    }
   else if (guess===secretNumber){
        displayme("you are correct");
        document.querySelector(".number").textContent=secretNumber;
        document.querySelector("body").style.backgroundColor="green";
       if (score>highScore){ 
highScore=score;
           document.querySelector(".highscore").textContent= score;
   }

    }
// rearrange refactoring
else if (guess!==secretNumber){{ if(score>1){
        

    score--;
    document.querySelector(".score").textContent= score;
    

    displayme( guess>secretNumber? "too high":"too low");}
    else{
       
    displayme ("you lost ");
    document.querySelector(".score").textContent= 0;
    document.querySelector("body").style.backgroundColor="red";
    }}

}
    /*when low
    else if (guess>secretNumber){ if(score>1){
        

        score--;
        document.querySelector(".score").textContent= score;
        
    
        document.querySelector(".message").textContent="too high";}
        else{
           
        document.querySelector(".message").textContent= "you lost ";
        document.querySelector(".score").textContent= 0;
        document.querySelector("body").style.backgroundColor="red";
        }}
      
      //when high
        else if (guess<secretNumber){if(score>1){
            
            score--;
            document.querySelector(".score").textContent= score;
            
        
            document.querySelector(".message").textContent="too low";}
            else{
                document.querySelector(".message").textContent= "you lost";
                document.querySelector(".score").textContent= 0;
                document.querySelector("body").style.backgroundColor="red";
        }}*/
});
//again //
document.querySelector(".again").addEventListener("click",function(){
    secretNumber = Math.trunc((Math.random()*20)+1);
    console.log(secretNumber);
   displayme ("start guesing");
score = 20;
 document.querySelector(".score").textContent= score;
 document.querySelector(".guess").value= "";
 document.querySelector("body").style.backgroundColor="black";
 document.querySelector(".number").textContent="?";
})





























let guess= Number(document.querySelector(".guess").value);
console.log(typeof guess);
console.log(secretNumber);
console.log(guess);