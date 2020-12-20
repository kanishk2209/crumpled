class Crumpled{
    constructor(x,y,radius){
        var options = {' restitution': 0.8, 'isStatic': false, 'density':1.0}
        this.body = Matter.Bodies.circle(x,y,radius,options)
        Matter.World.add(world,this.body)
        console.log(this.body)
    }

    display(){

        circle(this.body.position.x,this.body.position.y,this.body.circleRadius)
    }
}