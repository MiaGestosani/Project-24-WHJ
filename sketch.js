const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body= Matter.Body;

var engine, world;
var hammer,stone , rubber, ground, iron ;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    rubber= new Rubber(200,300,50,50);
    plane = new Plane(600,height,1200,20);
    hammer = new Hammer(10,100);
    stone= new Stone(600,200,50,50);
    iron=new Iron(800,350,100,50);


}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    stone.display();
    iron.display();
    rubber.display();

    
 
}