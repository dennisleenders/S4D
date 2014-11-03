
// triangle spawn
for (var i = 0; i < 1000; i++) {
    var cubeSize = Math.random();
    var cubeGeometry = new THREE.TetrahedronGeometry(cubeSize,0);
    var cubeMaterial = new THREE.MeshBasicMaterial({color: Math.random() * 0xffffff });
    var cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
    cube.castShadow = true;

    // position the cube randomly in the scene
    cube.position.x = -60 + Math.round((Math.random() * 100));
    cube.position.y = Math.round((Math.random() * 10));
    cube.position.z = -100 + Math.round((Math.random() * 150));

    // add the cube to the scene
    scene.add(cube);
};
