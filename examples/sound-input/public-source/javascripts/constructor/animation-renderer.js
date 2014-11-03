

render();

function render() {
    stats.update();

    if(speed != NaN && speed != undefined){
      rotationSpeed = speed + 0.01
    }
    
    // rotate the cubes around its axes except the heart
    scene.traverse(function (e) {
        if (e instanceof THREE.Mesh && e.name != "middle") {

            // if set to controls.speed it WILL spawn the blocks.
            // voice speed will not spawn the blocks.
            e.rotation.x += rotationSpeed;
            e.rotation.y += rotationSpeed;
            e.rotation.z += rotationSpeed;

            e.position.x += 0.01;

        }
    });

    // hovering of the heart
    if(middle.position.y >= 18 && directionHeartUp == true){
      directionHeartUp = false;
      directionHeartDown = true;
    }else if(middle.position.y <= 17 && directionHeartDown == true){
      directionHeartUp = true;
      directionHeartDown = false;
    }

    if(directionHeartUp == true){
      middle.position.y += 0.005
    }else{
      middle.position.y -= 0.005
    }

    // render using requestAnimationFrame
    requestAnimationFrame(render);
    renderer.render(scene, camera);
}