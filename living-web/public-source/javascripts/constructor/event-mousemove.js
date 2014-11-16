
// adds a listener for the mouse event
window.addEventListener( 'mousemove', onDocumentMouseOver, false );

// scale size
var scaleSize = 1.7;
var scaleEase = 600;

function onDocumentMouseOver( e ) {
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
    doTriangleScale(intersects[0])
  }
}

// initiates the scale transition
function doTriangleScale(intersection){
  var tween = new TWEEN.Tween(intersection.object.parent.scale)
  .to({
    x: scaleSize,
    y: scaleSize,
    z: scaleSize,
   }, scaleEase)
  tween.start();
  
  // should have a check if the user is still on the object in question, no time for this now
  setTimeout(function(){
    doTriangleScaleRevert(intersection);
  }, 2000)
}

// triggers the scale revert to default
function doTriangleScaleRevert(intersection) {
  var tween = new TWEEN.Tween(intersection.object.parent.scale)
  .to({
    x: 1, 
    y: 1, 
    z: 1 
  }, scaleEase)
  tween.start();
}