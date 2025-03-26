
let bgType;
let picturesLoader;
let currentGameState = 0;
let gameStates = {
  CHAPTERSELECTOR: 0,
  CHAPTER1: 1,
  CHAPTER2: 2,
  CHAPTER3: 3,
  CHAPTER4: 4,
  GAMEOVER: 5,
  CHPATER1WIN: 6,
  CHPATER2WIN: 7,
  CHPATER3WIN: 8,
  CHPATER4WIN: 9,
};

function preload() {
  picturesLoader = new PicturesLoader();
  window.bgType = picturesLoader.getBgType();
  window.mainRoleMove = true;
  window.story1Config = loadJSON("./configs/chapter1Config.json");
  window.story2Config = loadJSON("./configs/chapter2Config.json");
  window.story3Config = loadJSON("./configs/chapter3Config.json");
  window.story4Config = loadJSON("./configs/chapter4Config.json");
}

function setup() {
  frameRate(60);
  createCanvas(windowWidth, windowHeight);
  window.currentGameState = currentGameState;
  window.gameStates = gameStates;
  window.chapterSelector = new ChapterSelector();
  window.chapter1Story = new Chapter1Story();
  window.chapter2Story = new Chapter2Story();
  window.chapter3Story = new Chapter3Story();
  window.chapter4Story = new Chapter4Story();
  frameRate(60);
}

function draw() {
  switch (window.currentGameState) {
    case gameStates.CHAPTERSELECTOR:
      chapterSeletion();
      break;
    case gameStates.CHAPTER1:
      chapter1();
      break;
    case gameStates.CHAPTER2:
      chapter2();
      break;
    case gameStates.CHAPTER3:
      chapter3();
      break;
    case gameStates.CHAPTER4:
      chapter4();
      break;
    case gameStates.CHPATER1WIN:
      chapter1Win();
      break;
    case gameStates.CHPATER2WIN:
      chapter2Win();
      break;
    case gameStates.CHPATER3WIN:
      chapter3Win();
      break;
    case gameStates.CHPATER4WIN:
      chapter4Win();
      break;
    case gameStates.GAMEOVER:
      gameOver();
      break;
    default:
      console.warn("Unknown game state:", window.currentGameState);
  }
}

function chapterSeletion() {
  chapterSelector.draw();
  }

function chapter1() {
  chapter1Story.draw();
}

function chapter2() {
  chapter2Story.draw();
}

function chapter3() {
  chapter3Story.draw();
}

function chapter4() {
  chapter4Story.draw();
}

