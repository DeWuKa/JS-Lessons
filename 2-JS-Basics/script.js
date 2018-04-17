var heightJohn = 190; 
var heightMax = 199; 
var heightBran =175;
var ageJohn = 20;
var ageMax = 25;
var ageBran = 26;
var gameJohn = heightJohn + ageJohn * 5;
var gameMax = heightMax + ageMax * 5;
var gameBran = heightBran + ageBran * 5;
var game;

switch(true){
    case gameJohn > gameBran && gameJohn > gameMax:
        console.Log("John is the winner");
        break;
    case gameMax > gameBran && gameMax > gameJohn:
        console.log("Max is the winner");
        break;
    case gameBran > gameJohn && gameBran > gameMax:
        console.log("Bran is teh winner");
        break;
    default:
        console.log("there is the draw");
}

