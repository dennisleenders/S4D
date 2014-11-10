
// sphere spawn, this sphere will stay in the middle and hover
var middleGeometry = new THREE.SphereGeometry(5,32,32);
var middleMaterial = new THREE.MeshBasicMaterial({color: Math.random() * 0xffffff });
var middle = new THREE.Mesh(middleGeometry, middleMaterial);
middle.castShadow = true;
middle.name = "middle";

// position the cube randomly in the scene
middle.position.x = 0;
middle.position.y = 17;
middle.position.z = 30;
scene.add(middle);      