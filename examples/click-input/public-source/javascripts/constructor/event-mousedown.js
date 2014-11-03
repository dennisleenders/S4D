
// adds a listener for the mouse event
document.addEventListener( 'mousedown', onDocumentMouseDown, false );

function onDocumentMouseDown( e ) {
  // will prevent default action
  e.preventDefault();

  // makes a new vector that will register the position the mouse click (e.client) 
  var vector = new THREE.Vector3();
  vector.set( ( e.clientX / window.innerWidth ) * 2 - 1, - ( e.clientY / window.innerHeight ) * 2 + 1, 0.5 );
  // unproject will turn 3D space into 2D space so we can fetch the correct position
  vector.unproject( camera );
  // raycaster will get the correct coordinates 
  raycaster.ray.set( camera.position, vector.sub( camera.position ).normalize() );

  // if an intersection between our mouse and an object is found then do something to that object
  // we call OBJECTS which is a array of all multiple material objects. if you use single material objects
  // we will write scene.children
  var intersects = raycaster.intersectObjects( objects );

  if ( intersects.length > 0 ) {
    console.log(intersects[0]);
    intersects[ 0 ].object.material.color.setHex( Math.random() * 0xffffff );
  }
}