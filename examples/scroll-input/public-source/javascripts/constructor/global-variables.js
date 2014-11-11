
// All global variables we will be using
var speed;
var step = 0;
var rotationSpeed = 0.01;
var directionHeartUp = true;
var directionHeartDown = false;
var isScroll = false;
var scrollSpeed;
var checkScroll;
var triangleFloatLeft = true;

// Will hold all the multiple material objects for click events
// WE only need this because we have multiple material objects, else we could use
// scene.childerns array
var objects = [];