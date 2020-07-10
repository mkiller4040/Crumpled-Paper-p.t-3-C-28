class Paperball
{
    constructor(x, y, radius)
    {
      var options = 
      {
        'isStatic':false,
        'restitution':0.3,
        'friction':1,
        'density':1.2
      }

      this.body = Matter.Bodies.circle(x, y, radius, options);
      this.radius = radius;
      this.image = loadImage("PaperBall.png");

      World.add(world, this.body);
    }

    display()
{
    var pos = this.body.position;

    imageMode(CENTER);
    image(this.image, pos.x, pos.y, 60, 60);
}
};
