
// adds a listener for the mouse event
document.addEventListener( 'mousedown', onDocumentMouseDown, false );

function onDocumentMouseDown( e ) {
  // will prevent default action
  e.preventDefault();

  //jquery makes "click" button appear
  $(".click").css({
    opacity: 1,
    transition : 'opacity 0.5s ease-in-out',
  });

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
    // turns itself red
    intersects[ 0 ].object.material.color.setHex( 0xff0f0f );

    // from the click event you can get:
    // where the object is positioned when clicked
      //console.log(intersects[0].object.parent.position.y);
    // where the click itself is positioned
      //console.log(intersects[0].point.y);

    // decide on a max and minimal position
    //# Z #//
    var positionZ = intersects[0].object.parent.position.z;
    var maxPositionZ = positionZ + 10 ;
    var minPositionZ = positionZ - 10 ;
    
    //# Y #//
    var positionY = intersects[0].object.parent.position.y;
    var maxPositionY = positionY + 5 ;
    var minPositionY = positionY - 5 ;

    //# X #//
    var positionX = intersects[0].object.parent.position.x;
    var maxPositionX = positionX + 5 ;
    var minPositionX = positionX - 5 ;

    var timer = 10;
    var tweenSpeed = 35;
            
    for (var i = 0; i < scene.children.length; i++) {
      if (scene.children[i].position.z <= maxPositionZ && scene.children[i].position.z >= minPositionZ) {
        if (scene.children[i].position.y <= maxPositionY && scene.children[i].position.y >= minPositionY) {
          if (scene.children[i].position.x <= maxPositionX && scene.children[i].position.x >= minPositionX) {
            timer = timer + tweenSpeed
            doFadetoRed(i,timer,intersects[ 0 ].object);          
          }
        }
      }
    }
  }
}

// does the fade to red
// also initiates the fade to white after the fade to red
function doFadetoRed(i,timer,intersection){
  setTimeout(function() {
    var tween = new TWEEN.Tween(scene.children[i].children[0].material.color)
    .to({
      r: 1, 
      g: 0, 
      b: 0 }, 400)
    tween.start();

    // checks if the child is the clicked child, if so
    // then don't fade back to white
    if (scene.children[i].id != intersection.parent.id){
      doFadetoWhite(i);
    }
  }, timer);
}

// will initiate after the fade to red
// triggers after a set amount of time
function doFadetoWhite(i) {
    setTimeout(function() {
    var tween = new TWEEN.Tween(scene.children[i].children[0].material.color)
    .to({
      r: 1, 
      g: 1, 
      b: 1 }, 400)
    tween.start();
  }, 2000);
}