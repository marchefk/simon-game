var Game = {
  startNewGame: function(){
    this.soundChain = [];
    this.userChain = [];
    this.soundChainIndex = 0;
    this.userChainIndex = 0;
  },
  addSound: function(){
    this.soundChain.push(makeRandomSound());
  }
}

var currentGame;

var audioBlue = new Audio('/audio/simonSound1.mp3');
var audioGreen = new Audio('/audio/simonSound2.mp3');
var audioRed = new Audio('/audio/simonSound3.mp3');
var audioYellow = new Audio('/audio/simonSound4.mp3');

var sounds = {
  "blue": audioBlue,
  "green": audioGreen,
  "red": audioRed,
  "yellow": audioYellow
}

var newGameButton = $('.button-start');
newGameButton.on('click', createNewGame);

var soundButtons = $('.sound-button');
soundButtons.on('click', getSoundFromUser);
soundButtons.on('click', playClickedButtonSound);


///// to do:

function isMatchingSound(i){
  if (currentGame.soundChain[i] == currentGame.userChain[i]){
    return true;
  } else {
    return false;
  }
}

function playClickedButtonSound(){
  sounds[this.getAttribute('id')].play();
}

function getSoundFromUser(){
  console.log(this.getAttribute('id'));
  currentGame.userChain.push(this.getAttribute('id'));
}

function createNewGame(){
  var newGame = Object.assign(Object.create(Game));
  newGame.startNewGame();
  currentGame = newGame;
}

function makeRandomSound() {
  var random = Math.floor(Math.random()*4);
  switch (random) {
    case 0:
      return "blue";
    case 1:
      return "green";
    case 2:
      return "red";
    case 3:
      return "yellow";
    default: "blue";
  }
}
