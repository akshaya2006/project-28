class Paper {
  constructor(x,y,r) {
    var options = {
        isStatic:false,
        restitution : 0.3,
        friction : 1,
        density : 1.2
  
    } 
    this.body = Bodies.circle(250,540,20,options);
    this.x=x;
    this.y=y;
    this.r = r;
    this.image = loadImage("paper.png");
    World.add(world, this.body)
  
  
  }
  display(){
  
     var pos =this.body.position;
     var angle = this.body.angle;
     push()
     fill(255);
     rotate(angle);
     imageMode(CENTER)
     image(this.image,pos.x,pos.y,33,33);
     pop()
     
      }
  }