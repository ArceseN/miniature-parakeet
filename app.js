var weapons = ['rock' , 'paper', 'scissors'];
var weaponOfChoice = weapons[parseInt(Math.random()*weapons.length) %3];

const player1 = 'Player 1';
const player2 = 'Player 2';

let player1Score = 0;
let player2Score = 0;

while (player1Score < 3 && player2Score < 3){
    (player1Pick == "rock" && player2Pick == "scissors") {
        console.log(player1 + " wins");
        player1Score = player1Score + 1;
        console.log("Number of wins: " + player1Score )
}
else if (player1Pick == "rock" && player2Pick == "paper") {
    console.log(player2 + " wins");
    player2Score = player2Score + 1;
    console.log("Number of wins: " + player1Score )
}
else if (player1Pick == "rock" && player2Pick == "rock") {
    console.log(player1 + player2 " tied ");
    player1Score = player1Score + 0;
    console.log("Number of wins: " + player1Score )
} 
else if (player1Pick =="scissors" && player2Pick == "rock") {
    console.log (player2 + "wins");
    player2Score = player2Score + 1;
    console.log ("Number of wins: " + player2Score )
}
else if (player1Pick =="scissors" && player2Pick == "paper") {
    console.log (player1 + "wins");
    player1Score = player1Score + 1;
    console.log ("Number of wins: " + player1Score )
}
else if (player1Pick =="scissors" && player2Pick == "scissors") {
    console.log (player2 + "tied");
    player2Score = player2Score + 0;
    console.log ("Number of wins: " + player2Score )
}
else if (player1Pick =="paper" && player2Pick == "rock") {
    console.log (player1 + "wins");
    player1Score = player1Score + 1;
    console.log ("Number of wins: " + player1Score )
}
else if (player1Pick =="paper" && player2Pick == "scissors") {
    console.log (player2 + "wins");
    player2Score = player2Score + 1;
    console.log ("Number of wins: " + player2Score )
}
else if (player1Pick =="paper" && player2Pick == "paper") {
    console.log (player2 + "ties");
    player2Score = player2Score + 0;
    console.log ("Number of wins: " + player2Score )
}

if (player1Score == 3) {
    console.log (player1 + 'wins')
}
else {
    console.log (player 2 + 'wins')
}