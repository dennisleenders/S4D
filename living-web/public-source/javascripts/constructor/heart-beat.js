
// the heartbeat function
function heartbeat(){
  if(pyramidMeshTop.scale.x >= heartMaxScale && pyramidMeshTop.scale.z >= heartMaxScale && pyramidBeatTopMax == true){
        pyramidBeatTopMax = false;
        pyramidBeatTopMin = true;
        audioHeartbeat.play()
    } else if(pyramidMeshTop.scale.x <= heartMinScale && pyramidMeshTop.scale.z <= heartMinScale && pyramidBeatTopMin == true){
        pyramidBeatTopMax = true;
        pyramidBeatTopMin = false;
    }

    if(pyramidBeatTopMax == true){
          pyramidMeshTop.scale.x += heartbeatIncrement;
          pyramidMeshTop.scale.z += heartbeatIncrement; 

      } else{ 
      pyramidMeshTop.scale.x -= heartbeatDecrement;
      pyramidMeshTop.scale.z -= heartbeatDecrement;
    }

  if(pyramidMeshBottom.scale.x >= heartMaxScale && pyramidMeshBottom.scale.z >= heartMaxScale && pyramidBeatTopMax == true){
        pyramidBeatTopMax = false;
        pyramidBeatTopMin = true;
    } else if(pyramidMeshBottom.scale.x <= heartMinScale && pyramidMeshBottom.scale.z <= heartMinScale && pyramidBeatTopMin == true){
        pyramidBeatTopMax = true;
        pyramidBeatTopMin = false;
    }

    if(pyramidBeatTopMax == true){
          pyramidMeshBottom.scale.x += heartbeatIncrement;
          pyramidMeshBottom.scale.z += heartbeatIncrement;  

      } else{ 
      pyramidMeshBottom.scale.x -= heartbeatDecrement;
      pyramidMeshBottom.scale.z -= heartbeatDecrement;
    }
};