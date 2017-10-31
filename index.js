var Game = {
  startNewGame: function() {
    this.soundChain = [];
  },
  addSound: function() {
    this.soundChain.push(makeRandomSound());
  },
  playSounds,
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

var clickedSound;
var howManyUserSounds = 0;
var newClick = false;

var newGameButton = $('.button-start');
newGameButton.on('click', createNewGame);

var soundButtons = $('.sound-button');
soundButtons.on('click', getSoundFromUser);
soundButtons.on('click', playClickedButtonSound);
soundButtons.on('click', stopHighlightingButtons);
soundButtons.on('click', highlightButtonOnClick);
soundButtons.on('click', function(){
  setTimeout(stopHighlightingButtons, 900);    /// to do
});
soundButtons.on('click', function(){
  if(isMatchingSound()){
    if(checkArraysLength()){
      howManyUserSounds = 0;
      currentGame.addSound();
      setTimeout(function(){currentGame.playSounds();}, 1500);
    }
  }else{
    resetLostGame();
  }
}
);


///// to do:

function resetLostGame(){
  currentGame.soundChain = [];
  howManyUserSounds = 0;
}

function highlightButton(id){
  $(`#${id}`).addClass('active');
}

function highlightButtonOnClick(){
  highlightButton(this.getAttribute('id'));
}

function stopHighlightingButtons(){
  soundButtons.each(function(){
    if ($(this).hasClass('active')){
      $(this).removeClass('active');
    }
  })
}

function checkArraysLength(){
  if (howManyUserSounds == currentGame.soundChain.length){
    return true;
  } else {
    return false;
  }
}

function isMatchingSound() {
  console.log(`comparing ${clickedSound} and ${currentGame.soundChain[howManyUserSounds-1]}`);
    if (clickedSound == currentGame.soundChain[howManyUserSounds-1]) {
      return true;
    } else {
      return false;
    }
}

function playSounds() {
  for (let i = 0; i < currentGame.soundChain.length; i++) {
    setTimeout(function() {
      stopHighlightingButtons();
      sounds[currentGame.soundChain[i]].play();
      highlightButton(currentGame.soundChain[i]);
      if (i == currentGame.soundChain.length-1){
        setTimeout(stopHighlightingButtons, 1000);
      }
    }, i * 900);
  }
}

function playClickedButtonSound() {
  if (currentGame) {
    sounds[this.getAttribute('id')].play();
  }
}

function getSoundFromUser() {
  if (currentGame) {
    clickedSound = this.getAttribute('id');
    howManyUserSounds += 1;
  }
}

function createNewGame() {
  var newGame = Object.assign(Object.create(Game));
  newGame.startNewGame();
  currentGame = newGame;
  newGame.addSound();
  newGame.playSounds()
  howManyUserSounds = 0;
}

function makeRandomSound() {
  var random = Math.floor(Math.random() * 4);
  switch (random) {
    case 0:
      return "blue";
    case 1:
      return "green";
    case 2:
      return "red";
    case 3:
      return "yellow";
    default:
      "blue";
  }
}
