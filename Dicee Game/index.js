// to shuffle dice 1
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomImgSrc = "images/dice" + randomNumber1 + ".png";
document.querySelectorAll("img")[0].setAttribute("src", randomImgSrc);
  
// to shuffle dice 2
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomImgSrc2 = "images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomImgSrc2);

// the gameplay's logic
if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
} 
else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
} else {
    document.querySelector("h1").innerHTML = "Seri!"
}