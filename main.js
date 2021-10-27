

function setup(){
var canvas =  createCanvas(700,600);
canvas.parent('canvas');


poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}

function modelLoaded() {
  console.log('PoseNet Is Initialized');
}
