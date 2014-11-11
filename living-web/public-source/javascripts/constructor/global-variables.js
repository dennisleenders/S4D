
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

// Pyramid motion variables
var pyramidTopUp = true;
var pyramidTopDown = false;

var pyramidBottomUp = true;
var pyramidBottomDown = false;

var pyramidBeatTopMax = true;
var pyramidBeatTopMin = false;

var heartbeatIncrement = 0.005;
var heartbeatDecrement = 0.002;

var heartMaxScale = 1.15;
var heartMinScale = 1;

// Pyramid position
var pyramidPositionY = 25;
var pyramidBottomPositionY = pyramidPositionY - 6.5;
var pyramidSpherePositionY = pyramidPositionY - 4;
var pyramidPositionZ = -35;


// Will hold all the multiple material objects for click events
// WE only need this because we have multiple material objects, else we could use
// scene.childerns array
var objects = [];