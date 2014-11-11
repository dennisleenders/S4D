
// floating of the heart
function floatMovementHeart(){
  
  if(pyramidMeshTop.position.y >= (pyramidPositionY + 0.5) && pyramidTopUp == true){
        pyramidTopUp = false;
        pyramidTopDown = true;
    } else if(pyramidMeshTop.position.y <= pyramidPositionY && pyramidTopDown == true){
        pyramidTopUp = true;
        pyramidTopDown = false;
     }  

    if(pyramidTopUp == true){
        pyramidMeshTop.position.y += 0.0025;

    } else{
      pyramidMeshTop.position.y -= 0.0025;
    }

    if(pyramidMeshBottom.position.y >= pyramidBottomPositionY && pyramidBottomUp == true){
        pyramidBottomUp = false;
        pyramidBottomDown = true;
    } else if(pyramidMeshBottom.position.y <= (pyramidBottomPositionY - 1) && pyramidBottomDown == true){
        pyramidBottomUp = true;
        pyramidBottomDown = false;
     }  

    if(pyramidBottomUp == true){
        pyramidMeshBottom.position.y += 0.005;
    } else{
      pyramidMeshBottom.position.y -= 0.005;
    }
};

// rotation of the heart
function heartRotation(){
  pyramidMeshTop.rotation.y += 0.002;
  pyramidMeshBottom.rotation.y -= 0.002;
}