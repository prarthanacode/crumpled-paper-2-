  class dustbin {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
      this.image = loadImage("sprites/dustbingreen.png");
      
    }
    display(){
        
      var pos =this.body.position;
      push();
      rectMode(CENTER);
     imageMode(CENTER);
        image(this.image,pos.x , pos.y-50, this.width, this.height+100);
      fill("green");
     // rect(pos.x, pos.y, this.width, this.height);
      pop();
     
    }
}