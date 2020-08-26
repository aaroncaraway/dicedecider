const rollDice = () => {
  randomNumber1 = Math.floor(Math.random() * 6) + 1;
  randomNumber2 = Math.floor(Math.random() * 6) + 1;

  dice1 = "images/dice" + randomNumber1 + ".png";
  dice2 = "images/dice" + randomNumber2 + ".png";

  document.getElementsByClassName("img1")[0].setAttribute("src", dice1);
  document.getElementsByClassName("img2")[0].setAttribute("src", dice2);

  if (dice1 > dice2) {
    document.getElementsByTagName("h1")[0].innerHTML = "Player One Wins!";
  } else if (dice2 > dice1) {
    document.getElementsByTagName("h1")[0].innerHTML = "Player Two Wins!";
  } else {
    document.getElementsByTagName("h1")[0].innerHTML = "It's a Draw!";
  }
};
