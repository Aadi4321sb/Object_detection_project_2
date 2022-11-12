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
    img = loadImage('desktop.jpeg');
}
function draw(){
    image(img, 0,0,640,360);
    fill("#FF0000");
    text("Monitor",85,35)
    noFill();
    stroke("#FF0000");
    rect(80,50, 500, 230 );
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
