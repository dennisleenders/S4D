
// initiates the renderer, this renderer will loop every millsecond
animate();
audioBackground.play();

// this interval will set the float direction of the triangles
setInterval(setTriangleDirection,50000)

// the function that decides the direction
function setTriangleDirection(){
  if(triangleFloatLeft){
    triangleFloatLeft = false;
  }else{
    triangleFloatLeft = true;
  }
}

function animate(time) {
    stats.update();

    // this will give it a default rotation even if the user declines microphone access
    if(speed != NaN && speed != undefined){
      rotationSpeed = speed + 0.01
    }

    // check if there is a scroll event going on
     if(isScroll){
        if((camera.position.z >= 66 && scrollSpeed > 0) || (camera.position.z <= 19.4 && scrollSpeed < 0)){
        }else {
            camera.position.z = camera.position.z + scrollSpeed
        }
     }

    // rotate the triangles around its axes except the heart
    scene.traverse(function (e) {
        if (e instanceof THREE.Mesh && e.name != "pyramid") {

            // if set to controls.speed it WILL spawn the blocks.
            // voice speed will not spawn the blocks.
            e.rotation.x += rotationSpeed;
            e.rotation.y += rotationSpeed;
            e.rotation.z += rotationSpeed;
        }
    });

    // moves the camera to simulate the "moving" effect
    // the camera will move left/right depending on the Interval timer
    // also the heart will move at the same pace, so it will stay centered
    // we're calling all pieces of the heart instead of doing a scene.traverse ( overkill )

    if (triangleFloatLeft){
      camera.position.x += 0.005
      sphere.position.x += 0.005
      pyramidMeshTop.position.x += 0.005
      pyramidMeshBottom.position.x += 0.005
    }else {
      camera.position.x -= 0.005
      sphere.position.x -= 0.005
      pyramidMeshTop.position.x -= 0.005
      pyramidMeshBottom.position.x -= 0.005
    }


    // all the heart related animations
    heartbeat();
    floatMovementHeart();
    heartRotation();

    // render using requestAnimationFrame will cause it to loop the function over and over
    requestAnimationFrame(animate);
    render();
}

function render() {

    TWEEN.update();
    renderer.render(scene, camera);
}