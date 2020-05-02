var car, wall, wall1,car1, car0, wall0;
var speed, weight;


function setup() {
  createCanvas(1600,800);
  car = createSprite(50,200,50,50);
  wall=createSprite(1500,200,60,200);

  car1 = createSprite(50,400,50,50);
  wall1=createSprite(1500,450,60,200);

  car0 = createSprite(50,600,50,50);
  wall0 = createSprite(1500,660,60,200);
  
  speed=random(55,90);
  weight=random(400,1500);

  speed0=random(70,110);
  weight0=random(500,1600);

  speed1=random(80,120);
  weight1=random(600,1700);
  
}

function draw() {
  background("black");

  
  car.velocityX=speed;
  car1.velocityX=speed1;
  car0.velocityX=speed0;

  wall.shapeColor="blue";
  wall1.shapeColor="blue";
  wall0.shapeColor="blue";

  
  if(wall.x-car.x<(car.width+wall.width)/2){
    car.velocityX=0;
    var deformation=0.5*weight*speed*speed/22500;

    if(deformation>180){
      car.shapeColor=color(255,0,0);
      
    }
    if(deformation<180 && deformation>100){
      car.shapeColor=color(230,230,0);
      
    }
     if(deformation<100){
      car.shapeColor="green";
      
      
      
    }
  }

  if(wall0.x-car0.x<(car0.width+wall0.width)/2){
    car0.velocityX=0;
    var deformation2=0.5*weight0*speed0*speed0/22500;

    if(deformation2>180){
      car0.shapeColor=color(255,0,0);
      
    }
    if(deformation2<180 && deformation2>100){
      car0.shapeColor=color(230,230,0);
      
    }
     if(deformation2<100){
      car0.shapeColor="green";
      
      
      
    }
  }

  if(wall1.x-car1.x<(car1.width+wall1.width)/2){
    car1.velocityX=0;
    var deformation1=0.5*weight1*speed1*speed1/22500;

    if(deformation1>180){
      car1.shapeColor=color(255,0,0);
      
    }
    if(deformation1<180 && deformation1>100){
      car1.shapeColor=color(230,230,0);
      
    }
     if(deformation1<100){
      car1.shapeColor="green";
      
      
      
    }
  }

  drawSprites();
}
