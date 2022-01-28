var canvas;
var backgroundImage;
var bgImg;
var database;
var form, player,game;
var playerCount;

function preload() 
{
  backgroundImage = loadImage("./assets/background.png");
}

function setup()
{
  canvas = createCanvas(windowWidth, windowHeight);
  game = new Game();
  game.start();
}

function draw() 
{
  background(backgroundImage);
}

function windowResized() 
{
  resizeCanvas(windowWidth, windowHeight);
}
