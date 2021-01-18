class Chain{
    constructor(bodyA,bodyB){
        var options={
            bodyA:bodyA,
            bodyB:bodyB,
            length:20,
            stiffness: 0.8
        }
        this.chain=Matter.Constraint.create(options);
        World.add(world,this.chain);

    }
    display(){
        var pointA=this.chain.bodyA.position;
        var pointB=this.chain.bodyB.position;

        line(pointA.x,pointA.y,pointB.x,pointB.y);
    }
}