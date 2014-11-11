
// initiates the renderer, this renderer will loop every millsecond
animate();

// this interval will set the float direction of the triangles
setInterval(setTriangleDirection,50000)

// the function that decides the direction
function setTriangleDirection(){
  if(triangleFloatLeft){
    triangleFloatLeft = false;
    console.log("false");
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
        if((camera.position.z >= 70 && scrollSpeed > 0) || (camera.position.z <= -35 && scrollSpeed < 0)){
        }else {
            camera.position.z = camera.position.z + scrollSpeed
        }
     }

    // rotate the triangles around its axes except the heart
    scene.traverse(function (e) {
        if (e instanceof THREE.Mesh && e.name != "middle") {
            // if set to controls.speed it WILL spawn the blocks.
            // voice speed will not spawn the blocks.
            e.rotation.x += rotationSpeed;
            e.rotation.y += rotationSpeed;
            e.rotation.z += rotationSpeed;

            if(triangleFloatLeft){
              e.position.x += 0.01;
            }else{
              e.position.x -= 0.01;
            }
        }
    });

    // hovering of the heart
    // checks if the position is higher or lower than set value
    // will change direction if its higher than 18 or lower than 17
    if(middle.position.y >= 18 && directionHeartUp == true){
      directionHeartUp = false;
      directionHeartDown = true;
    }else if(middle.position.y <= 17 && directionHeartDown == true){
      directionHeartUp = true;
      directionHeartDown = false;
    }

    // checking if the direction is up or down, animate from that value
    if(directionHeartUp == true){
      middle.position.y += 0.005
    }else{
      middle.position.y -= 0.005
    }
    // render using requestAnimationFrame will cause it to loop the function over and over
    requestAnimationFrame(animate);
    render();
}

function render() {

    TWEEN.update();
    renderer.render(scene, camera);
}