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
    img = loadImage('bedroom.jpeg');
}
function draw(){
    image(img, 0,0,640,360);
    fill("##FFFFFF");
    text("Pillows",85,35)
    noFill();
    stroke("#FFFFFF");
    rect(80,40, 500, 375 );
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
