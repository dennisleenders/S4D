
document.addEventListener("mousedown", onDocumentMouseDown);

function onDocumentMouseDown( e ) {
  e.preventDefault();

  var vector = new THREE.Vector3();
  vector.set( ( e.clientX / window.innerWidth ) * 2 - 1, - ( e.clientY / window.innerHeight ) * 2 + 1, 0.5 );
  vector.unproject( camera );
  raycaster.ray.set( camera.position, vector.sub( camera.position ).normalize() );

  var intersects = raycaster.intersectObjects( scene.children );

  if ( intersects.length > 0 ) {
    //intersects[ 0 ].object.material.color.setHex( Math.random() * 0xffffff );
  }
}