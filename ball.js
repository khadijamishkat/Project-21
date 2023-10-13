class Ball{
    constructor(x,y,r){
        let options = {
            restitution: 1
        }

        this.body = Bodies.circle(x,y,r,options)
        this.r = r
        World.add(world, this.body)
    }

    display(){
        push()
        ellipseMode(RADIUS)
        stroke(200)
        fill(150)
        ellipse(this.body.position.x,this.body.position.y,this.r)
        pop()
    }
}