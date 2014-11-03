
// initiates the stat UI
var stats = initStats();

// create a scene, that will hold all our elements such as objects, cameras and lights.
var scene = new THREE.Scene();

// creates a material that overwrites all materials (DEBUG)
scene.overrideMaterial = new THREE.MeshDepthMaterial({wireframe:false});

// create a camera, which defines where we're looking at.
var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 10, 148);

// create a render and set the size
var renderer = new THREE.WebGLRenderer();

renderer.setClearColor(new THREE.Color(0x00000, 1.0));
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMapEnabled = true;

// creates a raycaster to check mouseclicks
raycaster = new THREE.Raycaster();

// position and point the camera to the center of the scene
camera.position.x = 0; //-50
camera.position.y = 10; //40
camera.position.z = 74; // 50
//camera.lookAt(scene.position);

// add the output of the renderer to the html element
$("#WebGL-output").append(renderer.domElement);