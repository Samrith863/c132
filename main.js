
objectDetector= "";

img = "";
status = "";

function preload(){
  img = loadImage('dog_cat.jfif');
}


function setup() {
  canvas = createCanvas(640, 420);
  canvas.center();
  objectDetector = ml5.objectDetector('cocossd', modelLoaded);
  document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function modelLoaded() {
  console.log("Model Loaded!")
  status = true;
  objectDetector.detect(img, gotResult);
}

function gotResult(error, results) {
  if (error) {
    console.log(error);
  }
  console.log(results);
  objects = results;
}


function draw() {
  image(img, 0, 0, 640, 420);

  fill("red");
  text("dog",45,75);
  fill("green");
  noFill();
  stroke("green");
  rect(30,60,250,350);
  
  fill("blue");
  text("cat",320,120);
  fill("blue");
  noFill();
  stroke("blue");
  rect(300,90,270,320);
      
    
          
}


