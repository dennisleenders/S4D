
// triangle spawn
for (var i = 0; i < 1000; i++) {
    var triangleSize = Math.random();
    var triangleGeometry = new THREE.TetrahedronGeometry(triangleSize,0);
    var triangleMaterialDepth = new THREE.MeshDepthMaterial();
    var triangleMaterial = new THREE.MeshBasicMaterial({
        color: 0x000000,
        wireframe:true       
    });
    var triangle = new THREE.SceneUtils.createMultiMaterialObject(triangleGeometry,[triangleMaterial,triangleMaterialDepth]);

    // position the triangle randomly in the scene
    triangle.position.x = -60 + Math.round((Math.random() * 100));
    triangle.position.y = Math.round((Math.random() * 10));
    triangle.position.z = -100 + Math.round((Math.random() * 150));

    // add the triangle to the scene
    scene.add(triangle);
};
