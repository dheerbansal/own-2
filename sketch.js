//first slide of the game
var  titleIMG, startbuttonIMG, bgIMG
//second slide
var storyIMG
//third

//game
var gunIMG, cameraIMG, background1
var START = 0
var PLAY = 1
var MIDDLE = 2
var END = 3
var gameState = START
var gunpos, gun1, gunIMG2, gunIMG3, gunIMG4
var road1IMG, road1, roadIMG2, road2

//middle
var droneR, droneL

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload(){
	//first slide
	bgIMG = loadImage("yb.jpg");
	startbuttonIMG = loadImage("start.png");
	titleIMG = loadImage("title.png");
	
	//second slide
	storyIMG = loadImage("story.png");

//	gunIMG = loadImage("gun.png");

	gunpos = loadImage("gunpos.png");

	road1IMG = loadImage("city1.jpg");

	gunIMG2 = loadImage("gun2.png");

	gunIMG3 = loadImage("gunback.png")

	gunIMG4 = loadImage("gunback1.png");

	roadIMG2 = loadImage("city2.png");

	droneR = loadImage("drone1.png");

	droneL = loadImage("drone2.png");

	





}

function setup() {
	createCanvas(1700,900);


	engine = Engine.create();
	world = engine.world;

	
//first slide of the game
	bg = createSprite(800,550,500,800);
	bg.addImage(bgIMG);
	bg.scale = 0.5
	bg.visible = true;

	startbutton = createSprite(750,600,120,50);
	startbutton.addImage(startbuttonIMG);
	startbutton.scale = 0.5
	startbutton.visible = true;

	title = createSprite(850,180,50,50);
	title.addImage(titleIMG);
	title.scale = 0.5
	title.visible = true

	//second slide
	story = createSprite(700,450,1400,700);
	story.addImage(storyIMG);
	story.scale = 1.5;
	story.visible = false

	//game
	

	background1 = createSprite(1500,500,1700,800);
	background1.shapeColor = "blue";
	background1.scale = 50;
	background1.visible = false;

	road1 = createSprite(850,400,1700,900);
	road1.addImage(road1IMG);
	road1.scale = 2.0
	road1.visible = false;

	road2 = createSprite(900,400,1700,900);
	road2.scale = 2.5;
	road2.addImage(roadIMG2);
	road2.visible = false;


	gun1 = createSprite(130,810,50,50);
	gun1.addImage(gunpos);
	gun1.scale = 0.09;
	gun1.visible = false;

	//gamestate3

	droner = createSprite(1500,200,25,25);
	droner.addImage(droneR);
	droner.scale = 0.3;
	droner.visible = false;

	

	
	
	
   Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  //background("black");
  Engine.update(engine);
  
  
   if(gameState === "START"){
	startbutton.visible = true;
	bg.visible = true;
	title.visible = true;

	
}

if(gameState === PLAY){
	
	gun1.visible = true;
	road1 .visible = true;
	
	if(gun1.x >800 && gun1.y>490){
		road2.visible = true;
		road1.visible = false;
		gameState = MIDDLE;

		

}


	

	//camera.y = gun1.y -5

	
}

if(gameState === MIDDLE){
	road1.visible = false;
	road2.visible = true;
	gun1.visible = true;
	droner.visible = true;

	gun1.addImage(gunIMG2);
	gun1.x = 870;
	gun1.scale = 0.10

	
	
}




console.log(gameState === START)
console.log(gun1.y);
 // startbutton.display();
  
  drawSprites();
  
 

}

function keyPressed(){
	if(gameState === START && keyCode === RIGHT_ARROW){
		startbutton.visible = false;
		bg.visible = false;
		title.visible = false;
		story.visible = true;
		gun1.visible = false;
		//gameState = PLAY;
		
	}
	if(gameState === START && keyCode === DOWN_ARROW){
		story.visible = false;
		gameState = PLAY
	}
	if(gameState === PLAY && keyCode === 087){
		gun1.x = gun1.x +50;
		gun1.addImage(gunpos)
		
		console.log("w pressed");
	}
	if(gameState === PLAY && keyCode === 65){
		gun1.addImage(gunIMG2);
		gun1.y = gun1.y -15

}
if(gameState === PLAY && keyCode === 83){
	gun1.addImage(gunIMG4)
	gun1.y = gun1.y +15;

}
if(gameState === MIDDLE && keyCode === 087){
	gun1.x = gun1.x +50;
	gun1.changeImage(gunpos)
	
	console.log("w pressed");
}
if(gameState === MIDDLE && keyCode === 65){
	gun1.addImage(gunIMG2);
	gun1.x = gun1.x -15

}
if(gameState === MIDDLE && keyCode === 83){
gun1.addImage(gunIMG4)
gun1.y = gun1.y +15;

}

}

