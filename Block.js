  
class Block {
    constructor(x, y, width, height,color) {
        
      var sling;
      var options = {
            'restitution':0.2,
            'friction':0.6,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.color = color;
        this.Visiblity = 255;
        World.add(world, this.body);
      }
      display(){
        console.log(this.body.speed);
        if(this.body.speed < 3){
         sling.display();
        }
        else{
          World.remove(world, this.body);
        push();
        translate(this.body.position.x, this.body.position.y);
        rectMode(CENTER);
        fill(this.color)  
        this.Visiblity = this.Visiblity - 5;
        tint(255,this.Visiblity);
        rect( 0,0, this.width, this.height);
        pop();
      
          
        }
      }
    }