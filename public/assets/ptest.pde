float count=0;
float scaleval = .5;
float mx, my;
void setup() 
{
  size(1024, 1024);
  noStroke();
  smooth();
  noLoop();
}

void draw() 
{
  //for some reason using background doesn't work
  fill(150);
  rect(0,0,width,height);
  
  mx = mouseX/scaleval;
  my = mouseY/scaleval;
  fill(0);
  ellipse(mx, my, 200,200);
  
  noFill();
  strokeWeight(2);
  stroke(0);
  for (int i=0; i<20; i++) {
    line(random(width), 0, random(width), height);
  }
}

void drawCircle(int x, int radius, int level) 
{                    
  float tt = 126 * level/4.0;
  fill(tt);
  ellipse(x, 400+count, radius*2, radius*2);      
  if(level > 1) {
    level = level - 1;
    drawCircle(x - radius/2, radius/2, level);
    drawCircle(x + radius/2, radius/2, level);
  }
}