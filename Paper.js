class Paper{
    constructor(x,y,r){
      var options={
        isStatic:false,
        restitution:0.3,
        friction:0.5,
        density:1.2
      }
      this.body=Bodies.circle(x,y,r,options);
      this.width=r;
      this.height=r;
      World.add(world,this.body);
      this.image=loadImage("paper.png/images")
      image(this.image, this.body.position.x, this.body.position.y, 70);
     
    }
    display(){
      var pos = this.body.position;
      image(paperImage,pos.x,pos.y,this.width,this.height);
    
   
    }
    
   };
   