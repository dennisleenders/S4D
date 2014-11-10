
// triangle spawn
for (var i = 0; i < 1000; i++) {
    var randomNumber = Math.random();
    var triangleGeometry = new THREE.TetrahedronGeometry(randomNumber,0);
    var triangleMaterialDepth = new THREE.MeshDepthMaterial();
    var triangleMaterial = new THREE.MeshBasicMaterial({
        color: 0xffffff,
        transparent:true,
        blending:THREE.MultiplyBlending
    });
    var triangleMaterialWireframe = new THREE.MeshBasicMaterial({
        color: 0x000000,
        wireframe:true,
        wireframeLinewidth:1
    });

    // multiple material object
    var triangle = new THREE.SceneUtils.createMultiMaterialObject(triangleGeometry,[triangleMaterial,triangleMaterialWireframe,triangleMaterialDepth]);

    // position the triangle randomly in the scene
    triangle.position.x = -60 + Math.round((Math.random() * 100)); // -60
    triangle.position.y = Math.round((Math.random() * 10));
    triangle.position.z = -100 + Math.round((Math.random() * 150)); // -100

    // anti-artifacts, will counter tripping materials overlapping eachother
    triangle.children[1].scale.set(1.01,1.01,1.01)

    // add the triangle to the scene
    scene.add(triangle);

    // need to push the children of the objects into its own array.
    // we need this since the click function can't find the geomatry in multimply material objects
    // since the multimaterial objects have the geomatry 2 layers deep
    objects.push(triangle.children[0]);
};
