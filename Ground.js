class Ground{
    constructor(x,y,width,height){
        var hello = {'isStatic':true}
        this.body2 = Matter.Bodies.rectangle(x,y,width,height,hello)
        Matter.World.add(world,this.body2)
        this.width = width;
        this.height = height;
    }

    display(){
        rect(this.body2.position.x,this.body2.position.y,this.width,this.height)
    }
}