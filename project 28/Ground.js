class Ground {
constructor() {
  var options = {
   isStatic: true
  } 
  this.body = Bodies.rectangle(600,590,1200,15,options);
  this.widht = 1200;
  this.height = 15;
  World.add(world, this.body);
  }
  display(){
  rectMode(CENTER);
   var pos =this.body.position;
  fill("yellow");
    rect(pos.x,pos.y, this.widht, this.height);
     }
 }