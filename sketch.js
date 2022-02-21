var form;
var canvas;
var bike1,bike2,bike1_img,bike2_img;
var allPlayers;
var bikes=[];


function preload(){
  bike1_img=loadImage()
  bike2_img=loadImage()
}


function setup(){
  canvas=createCanvas(windowWidth,windowHeight)
  database=firebase.database()
  game=new Game()
}