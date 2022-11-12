img = "";
status = "";
function back(){
    window.location = "intro.html";
}

function setup() {
    canvas = createCanvas(640,360);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}
function preload(){
    img = loadImage('wardobe.jpeg');
}
function draw(){
    image(img, 0,0,640,360);
    fill("#FFA500");
    text("Canvas, Piggy Bank, Flower Pot",85,10)
    noFill();
    stroke("#FFA500");
    rect(40,20, 500, 230 );
}
function modelLoaded() {
    console.log("Model Activated!")
    status = true;
    objectDetector.detect(img, gotResult);
}
function gotResult(error, results){
if (error) {
    console.log(error);
}
console.log(results);
}
