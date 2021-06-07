var helicopterIMG, helicopterSprite, packageSprite, packageIMG;
var packageBody, ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload() {
	helicopterIMG = loadImage("helicopter.png")
	packageIMG = loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);


	packageSprite = createSprite(width / 2, 80, 10, 10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale = 0.1

	helicopterSprite = createSprite(width / 2, 200, 10, 10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale = 0.6

	groundSprite = createSprite(width / 2, height - 35, width, 10);
	groundSprite.shapeColor = color(255)

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width / 2, 200, 5, { restitution: 0.5, isStatic: true });
	World.add(world, packageBody);

	ground = Bodies.rectangle(width / 2, 650, width, 10, { isStatic: true });
	World.add(world, ground);

	//red box

	boxLeft = Bodies.rectangle(300,620,10,100,{isStatic:true});
	World.add(world,boxLeft);

	boxBottom = Bodies.rectangle(370,655,150,10,{isStatic:true});
	World.add(world,boxBottom);

	boxRight = Bodies.rectangle(440,620,10,90,{isStatic:true});
	World.add(world,boxRight);


	Engine.run(engine);

}


function draw() {
	rectMode(CENTER);
	background(0);
	packageSprite.x = packageBody.position.x
	packageSprite.y = packageBody.position.y
	
	fill('brown')
	rect(boxLeft.position.x, boxLeft.position.y, 10,100);
	rect(boxBottom.position.x, boxBottom.position.y, 150,10);
	rect(boxRight.position.x, boxRight.position.y, 10,90);

	drawSprites();

}

function keyPressed() {
	if (keyCode === LEFT_ARROW) {
		helicopterSprite.x = helicopterSprite.x - 20;
	} else if (keyCode === RIGHT_ARROW) {
		helicopterSprite.x = helicopterSprite.x + 20;
	}
	else if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(packageBody, false);
	}
}



