var controls = new function () {
    this.cameraNear = camera.near;
    this.cameraFar = camera.far;
    this.cameraX = camera.position.x;
    this.cameraZ = camera.position.z;
    this.cameraY = camera.position.y;

    this.removeCube = function () {
        var allChildren = scene.children;
        var lastObject = allChildren[allChildren.length - 1];
        if (lastObject instanceof THREE.Mesh) {
            scene.remove(lastObject);
        }
    }

    this.addTriangle = function () {
        var cubeSize = Math.random();
        var cubeGeometry = new THREE.TetrahedronGeometry(cubeSize,0);
        var cubeMaterial = new THREE.MeshLambertMaterial({color: Math.random() * 0xffffff });
        var cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
        cube.castShadow = true;

        // position the cube randomly in the scene
        cube.position.x = -60 + Math.round((Math.random() * 100));
        cube.position.y = Math.round((Math.random() * 10));
        cube.position.z = -100 + Math.round((Math.random() * 150));

        // add the cube to the scene
        scene.add(cube);
    };

    this.outputObjects = function () {
        console.log(scene.children);
    }
}

var gui = new dat.GUI();
gui.add(controls, 'addTriangle');
gui.add(controls, 'removeCube');
gui.add(controls, 'cameraNear', 0, 50).onChange(function (e) {
    camera.near = e;
});
gui.add(controls, 'cameraFar', 50, 200).onChange(function (e) {
    camera.far = e;
});
gui.add(controls, 'cameraX', 0, 200).onChange(function (e) {
    camera.position.x = e;
});
gui.add(controls, 'cameraY', 0, 200).onChange(function (e) {
    camera.position.y = e;
});
gui.add(controls, 'cameraZ', 0, 200).onChange(function (e) {
    camera.position.z = e;
});
