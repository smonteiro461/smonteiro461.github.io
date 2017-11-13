var yoff = 0.0;  
var img;

function setup()
{

  createCanvas(596, 842);
  frameRate(1);
  img = loadImage("eva1.png");
 
}

function draw() 
{
  background(255);
  stroke(60);
  //criar retangulo
  rect (width/2, height/2, 500, 750, 20);
  rectMode (CENTER);
  stroke(30);
  noFill();
 
  //criar linhas random 
  for (var y=0; y<height+10; y+=10) 
  {
    beginShape();
    var xoff = 0;
    for (var x=0; x<width+10; x+=10) 
    { //criar noise
      var a = noise(xoff, yoff)+1;
      //definir vertex
      vertex(x, y*a); 
      xoff += 0.05;
    }
    yoff += 0.03;
    endShape();
  }
  // localização da imagem
  image(img, width/2, height/2, img.width/2, img.height/2);
}