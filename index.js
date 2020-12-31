//Start both players at score: 0
let p1Score = 0;
let p2Score = 0;
//Condition for game over
let gameOver = false;
//default win score
winScore = 5;

//update winScore to selected qty
const winScoreSelect = document.querySelector("#score-set-qty");
winScoreSelect.addEventListener("change", function(){
    winScore = Number(this.value);
})

//click event for adding points to player 1
document.querySelector("#button-a").addEventListener("click", function (){
    //if game is going add points to p1
    if(!gameOver) {
        p1Score +=1;

        //if game is over add winner/loser info for p1
        if(p1Score === winScore) {
            gameOver = true;
            document.querySelector("#score-display-a").classList.add("winner");
            document.querySelector("#score-display-b").classList.add("loser");
        }
        document.querySelector("#score-display-a").innerText = p1Score;
    }
});

//click event for adding points to player 1
document.querySelector("#button-b").addEventListener("click", function (){
    //if game is going add points to p1
    if(!gameOver) {
        p2Score +=1;

        //if game is over add winner/loser info for p1
        if(p2Score === winScore) {
            gameOver = true;
            document.querySelector("#score-display-b").classList.add("winner");
            document.querySelector("#score-display-a").classList.add("loser");  
        }
        document.querySelector("#score-display-b").innerText = p2Score;
    }
});

//click event for reset button
document.querySelector("#button-c").addEventListener("click", function (){
    //reset score, colors and gamestate
    p1Score = 0;
    p2Score = 0;
    document.querySelector("#score-display-a").innerText = p1Score;
    document.querySelector("#score-display-b").innerText = p2Score;
    document.querySelector("#score-display-b").classList.remove("winner", "loser");
    document.querySelector("#score-display-a").classList.remove("loser", "winner");
    gameOver = false;
});

