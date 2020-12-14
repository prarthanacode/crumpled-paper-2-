  class Circle {
  constructor(x,y) {
    var options = {
        restitution:0.2,
        friction:0,
        density:1.5

    }
    this.body = Bodies.circle(x,y,25,options);
   // this.body = Bodies.loadImage(this.image = loadImage("sprites/paper.png"))
    //this.radius = radius;
    World.add(world, this.body);
    this.image = loadImage("sprites/paper.png");
  }
  display(){
   // var pos =this.body.position;
    //ellipseMode(RADIUS);
    push();
    translate(this.body.position.x,this.body.position.y)
    rectMode(CENTER);
    imageMode(CENTER);
    image(this.image, 0, 0,50,50);
    pop();
   // ellipse(pos.x, pos.y, this.radius);
  }
  };