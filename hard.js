// Establish array that contains all the images for the "backs" of cards.

let imageArray = [];
imageArray[0] = new Image();
imageArray[0].src = "images/aliens.jpg";
imageArray[1] = new Image();
imageArray[1].src = "images/aliens.jpg";
imageArray[2] = new Image();
imageArray[2].src = "images/doge.jpg";
imageArray[3] = new Image();
imageArray[3].src = "images/doge.jpg";
imageArray[4] = new Image ();
imageArray[4].src = "images/arthur.jpg";
imageArray[5] = new Image ();
imageArray[5].src = "images/arthur.jpg";
imageArray[6] = new Image();
imageArray[6].src = "images/fellowkids.jpg";
imageArray[7] = new Image();
imageArray[7].src = "images/fellowkids.jpg";
imageArray[8] = new Image();
imageArray[8].src = "images/ducraux.jpg";
imageArray[9] = new Image();
imageArray[9].src = "images/ducraux.jpg";
imageArray[10] = new Image ();
imageArray[10].src = "images/kermit.jpg";
imageArray[11] = new Image ();
imageArray[11].src = "images/kermit.jpg";
imageArray[12] = new Image();
imageArray[12].src = "images/conceit.jpg";
imageArray[13] = new Image();
imageArray[13].src = "images/conceit.jpg";
imageArray[14] = new Image();
imageArray[14].src = "images/pepe.jpg";
imageArray[15] = new Image();
imageArray[15].src = "images/pepe.jpg";
imageArray[16] = new Image ();
imageArray[16].src = "images/trap.jpg";
imageArray[17] = new Image ();
imageArray[17].src = "images/trap.jpg";
imageArray[18] = new Image ();
imageArray[18].src = "images/mjcrying.jpg";
imageArray[19] = new Image ();
imageArray[19].src = "images/mjcrying.jpg";

function shuffle() {
  let i = 0;
  let j = 0;
  let temp = null;
  for (i = imageArray.length-1; i > 0; i -= 1) {
    j = Math.floor(Math.random()*(i + 1));
    temp = imageArray[i];
    imageArray[i] = imageArray[j];
    imageArray[j] = temp;
    }
  return imageArray;
}

let shuffledArray = shuffle(imageArray);
let gameContainer = document.getElementById("game-container");
let gameBoard = document.getElementById("gameboard");
let heartWrapper = document.createElement("div");
heartWrapper.setAttribute("class", "heart-wrapper");
gameContainer.appendChild(heartWrapper);

function createHearts(){
  for (let i = 0; i < 16; i++){
    let heart = document.createElement("div");
    heart.setAttribute("class", "heart");
    heart.setAttribute("id", "heart");
    heartWrapper.appendChild(heart);
  }
}

function createCards(){
  for(let i = 0; i < shuffledArray.length; i++){
    let cardCase = document.createElement("div");
    cardCase.setAttribute("class", "game-cards-hidden");
    cardCase.addEventListener("click", changeCards, false);
    cardCase.appendChild(shuffledArray[i]);
    gameBoard.appendChild(cardCase);
  }
}

let playerHand = [];
let playerScore = 0;
let livesLost = 0;
let lives = document.querySelector("div.heart-wrapper");
let game_board = document.getElementById("gameboard");

function newGame(){
  createCards();
  createHearts();
}

newGame();

function changeCards() {
  if (playerHand.length === 0){
    this.classList.remove("game-cards-hidden");
    this.classList.add("game-cards-shown");
    playerHand.push(this);
  } else if (playerHand.length === 1){
    this.classList.remove("game-cards-hidden");
    this.classList.add("game-cards-shown");
    playerHand.push(this);
    setTimeout(clearCards, 500);
  }
}

function clearCards(){
  if (playerHand[0].innerHTML === playerHand[1].innerHTML){
    playerScore +=2;
    if (playerScore === 20) {
      setTimeout(gameVictory, 250);
    } else {
    playerHand[0].removeEventListener("click", changeCards, false);
    playerHand[1].removeEventListener("click", changeCards, false);
    playerHand.pop();
    playerHand.pop();
    console.log(playerScore);
    }
  } else {
      lives.removeChild(lives.childNodes[0]);
      livesLost += 1;
      if (livesLost === 16) {
        setTimeout(gameLoss(), 250);
      } else{
      playerHand[0].classList.remove("game-cards-shown");
      playerHand[0].classList.add("game-cards-hidden");
      playerHand[1].classList.remove("game-cards-shown");
      playerHand[1].classList.add("game-cards-hidden");
      playerHand.pop();
      playerHand.pop();
      }
    }
  }

function gameLoss() {
  gameContainer.removeChild(game_board);
  gameContainer.removeChild(heartWrapper);
  let loss_screen = document.createElement("div");
  let loss_message = document.createElement("div");
  loss_message.setAttribute("class", "message");
  let loss_button = document.createElement("a");
  let button_text = document.createTextNode("Back To Main Menu");
  let message_text = document.createTextNode("Better luck next time!")
  loss_button.setAttribute("id", "loss_button");
  loss_button.setAttribute("class", "menu_button");
  loss_button.setAttribute("href", "index.html");
  loss_screen.setAttribute("id", "loss-screen");
  loss_message.appendChild(message_text);
  loss_button.appendChild(button_text);
  gameContainer.appendChild(loss_message);
  gameContainer.appendChild(loss_screen);
  gameContainer.appendChild(loss_button);
}

function gameVictory() {
  gameContainer.removeChild(game_board);
  gameContainer.removeChild(heartWrapper);
  let win_screen = document.createElement("div");
  let win_message = document.createElement("div");
  win_message.setAttribute("class", "message");
  let win_button = document.createElement("a");
  let button_text = document.createTextNode("Back To Main Menu");
  let message_text = document.createTextNode("Winner! Winner!!")
  win_button.setAttribute("id", "win_button");
  win_button.setAttribute("class", "menu_button");
  win_button.setAttribute("href", "index.html");
  win_screen.setAttribute("id", "win-screen");
  win_message.appendChild(message_text);
  win_button.appendChild(button_text);
  gameContainer.appendChild(win_message);
  gameContainer.appendChild(win_screen);
  gameContainer.appendChild(win_button);
}
