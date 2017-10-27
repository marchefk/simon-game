var Game = {
  startNewGame: function(){
    this.soundChain = [];
    this.userChain = [];
  },
  addSound: function(){
    this.soundChain.push(makeRandomSound());
  }
}

var newGameButton = $('.button-start');
newGameButton.on('click', createNewGame);

var soundButtons = $('.sound-button');
soundButtons.on('click', getSoundFromUser);

///// to do:

function getSoundFromUser(){
  console.log(this.getAttribute('id'));
}

function createNewGame(){
  var newGame = Object.assign(Object.create(Game));
  newGame.startNewGame();
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
