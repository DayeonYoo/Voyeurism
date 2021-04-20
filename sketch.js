var eagle = [];
let cheetah;
let imgperson, imgeagle; 
let imgreverseEagle;
var Eagle;
var Cheetah
let x,y;
let pupilX;
let pupilY;
let t=-750
let u=-530
function preload() {
 imgperson = createImg("personwalking.gif");  
	imgeagle = loadImage('eagle.png');
  imgreverseEagle = loadImage('reverse_eagle.png');
  //imgblink = createImg("blinking.gif");
   imgeye = loadImage('version3.png');
  imageMode(CENTER);
}

function setup() {
    r = random(255);
  g = random(255);
  b = random(255);
	createCanvas(700,700);
	imageMode(CENTER);
	noStroke();

//	cheetah = new Cheetah(width/2, height/2);


}

function draw() {
	background(r,g,b);

	for (var i = 0; i < 20; i++) {
      eagle.push( new Eagle(random(width),0) );
    eagle[i].move();
    eagle[i].display();
   
   }
  ellipse(width/2,height/2,250)
        imgperson.size(250, 300);
  imgperson.position(width/2-130, height/2-150);
 //imgblink.size(170, 170);
    // imgblink.position(t,u);
	//cheetah.display();
  image(imgeye,t,u,250,250)
  
}
 function mousePressed(){
     hasClicked = true;
   var d= dist(mouseX,mouseY,width/2,height/2);
   

  
  if (d<125){
fill(31);
   ellipse(width/2, height/2,250);
  
  imgperson.hide();
  background( r,g,b); 
      r = random(255);
    g = random(255);
    b = random(255);
  imgeagle= imgreverseEagle;
    t=width/2;
   u= height/2;
     
 }
 }
function mouseReleased(){
  var d= dist(mouseX,mouseY,width/2,height/2)
   if (d<125){
   r = random(255);
    g = random(255);
    b = random(255);
  hasClicked=false;

   }
  fill(255);
    ellipse(width/2, height/2);
    imgperson.show();
   
    imgeagle=loadImage('eagle.png');
  t=-500;
   u= -500;
 }
  
function Eagle(x,y) {
		this.x = x;
	this.y = y;
	this.sz = 150;
	this.xspeed = random(1,7);
  this.yspeed=5;
  
 this.move = function() {
    this.x += this.xspeed;
		this.y += this.xspeed;
      
     if(this.x>width+80){
      this.x=-50;}
   if(this.y>height+80){
       this.y=-50;
    }
}
	this.display = function() {
		   
          image(imgeagle,this.x,this.y, this.sz,this.sz);
        
 
	}

 
}
