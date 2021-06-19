class Paper {

    constructor(x, y, r) {
     
       var options = {
           isStatic:false,
           resistution:0.3,
           friction:0,
           density:1.2
        }
        
     this.body = circle(x, y, 4, options);
     this.x = 50;
     this.y = 100;
     this.r = 5;
     World.add(world, this.body);

    };
    display(){
        var pos = this.body.position;
        Push();
        translate(pos.x, pos.y);
        strokeWeight(3);
        imageMode(CENTER);
        image(ths.image, 0, 0, this.width, this.height);
        Pop();
    }
}