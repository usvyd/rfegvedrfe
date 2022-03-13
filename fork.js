img="";
status="";
function preload(){
    img=loadImage('fork.jpg');
}
function setup(){
    canvas=createCanvas(640, 420);
    canvas.center();
    objectDetector=ml5.objectDetector('cocssd',modelLoaded);
    document.getElementById("status").innerHTML="Status:Detecting Objects";
}
function modelLoaded(){
    console.log("Model Loaded!");
    status=true;
    objectDetector.detect(img, gotResults);
}
    function gotResults(error, results){
        if(error){
            console.log(error);
        }
        console.log(results);
    }