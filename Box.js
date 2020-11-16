class Box {
  constructor(x, y, width, height){
    var options = {
      restitution: 0.3,
      friction: 0.3,
      density: 0.3
    }

    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width
    this.height = height
    World.add(world,this.body)

  }
  display() {
    rectMode(CENTER);
    fill("red");
    var pos = this.body.position;
    rect(pos.x,pos.y,this.width,this.height);
  }

}
