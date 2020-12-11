class Paper {
    constructor(x, y, width, height) {
      var options = {
        'isStatic':false,
          'restitution':0.3,
          'friction':0.5,
          'density':1.2
          
      }
      this.body = Bodies.rectangle(x, y, 20, 20, options);
      this.width = 20;
      this.height = 20;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      strokeWeight(4);
      stroke("green");
      fill(255);
      ellipse(0, 0, this.width, this.height);
      pop();
    }
  };
  