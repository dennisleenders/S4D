
// initiates the renderer, this renderer will loop every millsecond
animate();
var timer = 0;
var centerX = 1;

function animate(time) {
    stats.update();

    // this will give it a default rotation even if the user declines microphone access
    if(speed != NaN && speed != undefined){
      rotationSpeed = speed + 0.01
    }

    // rotate the triangles around its axes except the heart
    scene.traverse(function (e) {
        if (e instanceof THREE.Mesh && e.name != "middle") {
            // if set to controls.speed it WILL spawn the blocks.
            // voice speed will not spawn the blocks.
            e.rotation.x += rotationSpeed;
            e.rotation.y += rotationSpeed;
            e.rotation.z += rotationSpeed;

            e.position.x += 0.01;

            //e.position.x = (e.parent.position.x) * Math.cos(time/1000)
            //e.position.z = (e.parent.position.z) * Math.sin(time/1000)

            //if (timer >= 1){
            //  console.log(e.position.x);
            //}
            //timer++
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