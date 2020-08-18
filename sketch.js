//Create variables here
var dog;
var happyDog;
var database;
var foods;
var foodStock;

var lastFed;
var FedTime;

var addFood;
var feedPet;

function preload()
{
  //load images here
  dogImg = loadImage("images/dogImg.png")
  happyDogImg = loadImage("images/dogImg1.png")
}

function setup() {
  createCanvas(500, 500);
  
textSize(20)
fill("red")
stroke("black")
text("food stock",5,15)

  dog = createSprite(250,250,30,30)
  dog.addImage("images/dogImg.png")

  feed = createButton("Feed the dog")
  feed.position(700,95)
  feed.mousePressed(feedDog)

  addFood = createButton("Add Food")
  addFood.position(800,95)
  addFood.mousePressed(addFoods)
}


function draw() {  
  background(46,139,87)

  display()

  database = firebase.database();

  foodStock=database.ref('food');
  foodStock.on("20",readStock)

  fedTme = database.ref('FeedTime');
  FedTime.on("value",function(data){
lastFed= data.val()
  })


  drawSprites();
  //add styles here

}

function readStock(data){
  foods=data.val();
}

function writeStock(x){
  database.ref('/').update({})
}

function addFood(){
  hour()
  dog.addImage("images/dogImg1")
}