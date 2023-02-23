let colors=["#c9ab62","#dc4826","#a47f4d","#dfa91f","#ed9c4e"]
let gridSize=80

var img;
var xOff=0,yOff=0;
var theta = 0;
var r = 0;
var remain = 0;
var xSeed;
var wSeed;
var left =0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  pixelDensity(1);
  rs=random(1000)
  drawingContext.shadowOffsetX = gridSize/10;
  drawingContext.shadowOffsetY = gridSize/10;
  drawingContext.shadowBlur = gridSize;
  img = createGraphics(width,height);
  xSeed = round(0.6*width);
  wSeed = width-xSeed;
	img.pixelDensity(1);
	img.fill(0);
	img.noStroke();
	img.rect(0,0,width,height);
	img.fill(255);
	img.textFont("arial",40);
	for(var y = 1; y<height; y+=40){
		img.text("fountain    fragments    rocks    river    wood    ocean    warwarwarwarwarwarwarwarwarwarwarwar ", 20, y);
	}
	image(img,0,0);
	filter(THRESHOLD);
    setFrameRate(13);
	loadPixels();
}

function draw() {
  xOff=1;
  yOff=height-1;
  var w4 = (width*4);
  while(xOff<(width)){
		r = round(cos(theta)*random(0,xOff));
		var strt = yOff*w4;
		var end = strt+(r<<2);
		for(var i = end-4; i>strt; i-=4){
				pixels[i+4]=pixels[i+5]=pixels[i+6]=pixels[i];
		}
		left = Math.max(0,xSeed-r);
		remain = Math.max(0,(width-left));
		strt = (yOff-1)*w4+(left*4)+w4;
		end = strt+(remain*4);
		for(var i = strt; i<end; i+=4){
				pixels[i-w4]=pixels[i+1-w4]=pixels[i+2-w4]=pixels[i];
		}
  	    strt = (yOff*w4)+((width-r)*4);
		end = strt+(r*5);
		for(var i = strt+4; i<end; i+=4){
				pixels[i-4]=pixels[i-3]=pixels[i-2]=pixels[i];
				pixels[i-4+w4]=pixels[i-3+w4]=pixels[i-2+w4]=pixels[i+w4];
		}
		yOff--;
  }
	updatePixels();
	theta++;
    randomSeed(rs)
    noStroke()
    for(let x=0; x<width+gridSize; x+=gridSize){
    for(let y=0; y<height+gridSize; y+=gridSize){
    push()
    translate(x, y) 
    for (let i=gridSize/10; i<=gridSize; i+=gridSize/5){
    drawingContext.shadowColor =random(colors)
      fill(random(colors));
      triangle(gridSize*0.5, gridSize, gridSize, gridSize, gridSize, gridSize*0.5)
      fill(random(colors))
      triangle(0, gridSize*0.5, 0, gridSize, gridSize*0.5, gridSize)
      fill(random(colors))
      triangle(0, 0, gridSize*0.5, 0, 0, gridSize*0.5)
      triangle(gridSize*0.5, 0, gridSize, 0, gridSize, gridSize*0.5)
     }
	 pop()
   } 
  }
}