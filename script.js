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

function shuffle(imageArray) {
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
  for (let i = 0; i < 8; i++){
    let heart = document.createElement("div");
    heart.setAttribute("class", "heart");
    heartWrapper.appendChild(heart);
  }
}

function createCards(){
  for(let i = 0; i < shuffledArray.length; i++){
    let cardCase = document.createElement("div");
    let cardPic = document.createElement("div");
    cardCase.setAttribute("class", "game-cards");
    cardPic.setAttribute("class", "card-pics-hidden");
    cardPic.appendChild(shuffledArray[i]);
    cardCase.appendChild(cardPic);
    gameBoard.appendChild(cardCase);
  }
}

function newGame(){
  createCards();
  createHearts();
}

newGame();
