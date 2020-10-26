class Chain{
 constructor(bodyA,bodyB){
 
var options={
 
    bodyA:bodyA,
    bodyB:bodyB,
    stiffness:0.8,
    length:35

}
this.chain=Constraint.create(options)
World.add(world,this.chain)
 }
display(){
var A=this.chain.bodyA.position
var B=this.chain.bodyB.position
strokeWeight(6)
stroke("blue")
line(A.x,A.y,B.x,B.y)


}


}