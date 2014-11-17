
// adds a listener for the mouse event
window.addEventListener( 'mousewheel', onDocumentScroll, false );

function onDocumentScroll( e ) {

  //jquery will make the scroll button appear when a scroll is initiated
  $(".scroll").css({
    opacity: 1,
    transition : 'opacity 0.5s ease-in-out',
  });

  // this will stop the timeout, so that another scroll can be initiated
  clearTimeout(checkScroll)
  // making the variable that takes the scrollspeed
  var delta = e.wheelDelta

  // making a Math calculation that would fit the actual speed of the Z axis
  delta = delta/100

  // sending the solved Math to a global variable
  scrollSpeed = delta
  
  // setting the Scroll on true so we can begin scrolling in the site
  isScroll = true;

  // check if this is the last scroll event registered
  stopScroll();
}

function stopScroll(){
  checkScroll = setTimeout(function(){
    isScroll = false
  },100)
}