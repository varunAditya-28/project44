class Game{

constructor(){

}

play(){


    if (keyDown(UP_ARROW)){
        flight.y = flight.y - 2;
      }
    
      if(keyDown(DOWN_ARROW)){
        flight.y = flight.y + 2;
        }  

         if(bg.x < 0){
             bg.x = displayWidth/4;
         }

         spawnClouds();
        if(cloudsGroup.isTouching(flight)){
            cloudsGroup.setLifetimeEach(-1)
            
        }
        
        
        drawSprites();
        
}



}

