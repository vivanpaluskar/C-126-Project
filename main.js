song1="";
song2="";
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWrist = 0;
function preload(){
    song1=loadSound("ryuk.mp3");
    song2 = loadSound("L.mp3");
}
function setup(){
    canvas = createCanvas(500, 600);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide()
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded(){
    console.log('PoseNet is Initialized');
}
function draw(){
    image(video, 0, 0, 500, 600);
}
function play(){
    song.play();
    song.setVolume(1);
    song.rate(1);
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("Left Wrist X = " + leftWristX + "Left Wrist Y = " + leftWristY);
        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("Right Wrist X = " + rightWristX + "Right Wrist Y" + rightWristY);
    }
}