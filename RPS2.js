//Nadia 5/16/19

var hands = ['rock', 'paper', 'scissors'];
function getHand(hands) {
    return hands[parseInt(Math.random() * hands.length) % 3];
}
//generates hand
var player1 = { name: "John", weapon: getHand };
var player2 = { name: "Jane", weapon: getHand };
console.log(player1.weapon)

function playGame(Player1, Player2, playUntil) {
let player1=Player1;
let player2=Player2;



    //generates hand for each  player
    function playRound(player1, player2) {



        let player1Score = 0;
        let player2Score = 0;

        while (player1Score < playUntil && player2Score < playUntil) {

            //getHand (player1, player2);
            var player1Pick = player1.weapon(hands);
            var player2Pick = player2.weapon(hands);
            console.log('\n' + player1.name + " hand: " + player1Pick);
            console.log(player2.name + " hand: " + player2Pick);

            if (player1Pick == "rock" && player2Pick == "paper") {
                console.log(player2.name + " wins");
                player2Score = player2Score + 1;
                console.log("Number of wins for player 2: " + player2Score)
            }
            else if (player1Pick == "rock" && player2Pick == "rock") {
                console.log(player1.name + "and" + player2.name + " tied ");
            }
            else if (player1Pick == "scissors" && player2Pick == "rock") {
                console.log(player2.name + "wins");
                player2Score = player2Score + 1;
                console.log("Number of wins for player 2: " + player2Score)
            }
            else if (player1Pick == "scissors" && player2Pick == "paper") {
                console.log(player1.name + "wins");
                player1Score = player1Score + 1;
                console.log("Number of wins for player 1: " + player1Score)
            }
            else if (player1Pick == "scissors" && player2Pick == "scissors") {
                console.log(player1.name + "and" + player2.name + "tied");
            }
            else if (player1Pick == "paper" && player2Pick == "rock") {
                console.log(player1.name + "wins");
                player1Score = player1Score + 1;
                console.log("Number of wins for player 1: " + player1Score)
            }
            else if (player1Pick == "paper" && player2Pick == "scissors") {
                console.log(player2.name + "wins");
                player2Score = player2Score + 1;
                console.log("Number of wins for player 2: " + player2Score)
            }
            else if (player1Pick == "paper" && player2Pick == "paper") {
                console.log(player1.name + "and" + player2.name + "ties");
            }

            else if (player1Pick == "paper" && player2Pick == "rock") {
                console.log(player1.name + "wins");
                player1Score = player1Score + 1;
                console.log("Number of wins for player 1: " + player1Score)
            }
            else if (player1Pick == "rock" && player2Pick == "scissors") {
                console.log(player1.name + "wins");
                player2Score = player2Score + 1;
                console.log("Number of wins for player 1: " + player1Score)
            }
            else if (player1Pick == "paper" && player2Pick == "scissors") {
                console.log(player2.name + "wins");
                player2Score = player2Score + 1;
                console.log("Number of wins for player 2: " + player2Score)
            }
            else if (player1Pick == "scissors" && player2Pick == "paper") {
                console.log(player1.name + "wins");
                player1Score = player1Score + 1;
                console.log("Number of wins for player 1: " + player1Score)
            }

           
        } if (player1Score == 3) {
            console.log(player1.name + 'wins')
            return player1;
        }
        else {
            console.log(player2.name + 'wins')
            return player2;
        }
    }
    playRound(player1, player2);
}
playGame(player1, player2, 5);