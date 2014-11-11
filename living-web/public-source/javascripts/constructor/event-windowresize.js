
// adds event listener for resize
window.addEventListener("resize", onWindowResize);

// function will update the camera matrix on resize with the new heights and widths
function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  renderer.setSize( window.innerWidth, window.innerHeight );
}