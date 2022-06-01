var randomNumber1=Math.floor(Math.random() * 6) + 1;
var randomNumber2=Math.floor(Math.random() * 6) + 1;
document.getElementsByClassName("img1")[0].src="images/dice"+randomNumber1+".png";
document.getElementsByClassName("img2")[0].src="images/dice"+randomNumber2+".png";
var refreshButton="<br><button style='font-size:2rem;background:#4ECCA3;color:#393E46;padding:10px;font-family:Papyrus,fantas' type='button' onClick='location.reload();'>Refresh Me!</button>";
if(randomNumber1>randomNumber2){
  document.querySelector("h1").innerHTML = "🤠Player 1 wins!"+refreshButton;
}else if(randomNumber1 === randomNumber2){
  document.querySelector("h1").innerHTML = "🤠You both win!🤠"+refreshButton;
}else{
  document.querySelector("h1").innerHTML = "Player 2 wins!🤠"+refreshButton;
}
