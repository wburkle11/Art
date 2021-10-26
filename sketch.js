let t = 0;
let r, g, b;
var button1; //variable to create a button object
var button2; //variable to create a button object
var button3; //variable to create a button object

var cg; //create a variable for a new canvas

const numbers = `1234567891011121314151617181920` //Creates Random Numbers for Home background

function setup() {
  createCanvas(windowWidth, windowHeight);
  cg = createGraphics(400,400);//this creates a second canvas
  background(0);
  textSize(24);
  noStroke();
  textFont("Times")
  r = random(255)
  g = random(255)
  b = random(255)
  
  
  button1 = createButton("Ⅰ");
  button1.position(windowWidth/3, windowHeight/2);
  button1.style('font-size', '70px');
  button1.style('background-color', 'gold');
  
  button2 = createButton("Ⅱ");
  button2.position(windowWidth/3, windowHeight/2);
  button2.style('font-size', '70px');
  button2.style('background-color', 'gold');
  
  button3 = createButton("Ⅲ");
  button3.position(windowWidth/3, windowHeight/2);
  button3.style('font-size', '70px');
  button3.style('background-color', 'gold');
  
  img1 = loadImage('assets/pi.jpeg');
  img2 = loadImage('assets/binary.jpeg');
  img3 = loadImage('assets/greece3.jpeg');
  
    
}

function draw() {
  let x = mouseX;
  let y = mouseY;
  let ix = width - mouseX;  // Inverse X
  let iy = height - mouseY; // Inverse Y
  background(0);
  fill(255, 150);
  ellipse(x, height/2, y, y);
  fill(0, 159);
  ellipse(ix, height/2, iy, iy);
  
  
  button1.mousePressed(one);
  button2.mousePressed(two); 
  button3.mousePressed(three);
  image(cg,0,0); //this displays the new canvas
  
  // make a x and y grid of ellipses
  for (let x = 0; x <= width; x = x + 30) {
    for (let y = 0; y <= height; y = y + 30) {
      // starting point of each circle depends on mouse position
      const xAngle = map(mouseX, 0, width, -4 * PI, 4 * PI, true);
      const yAngle = map(mouseY, 0, height, -4 * PI, 4 * PI, true);
      // and also varies based on the particle's location
      const angle = xAngle * (x / width) + yAngle * (y / height);

      // each particle moves in a circle
      const myX = x + 20 * cos(2 * PI * t + angle);
      const myY = y + 20 * sin(2 * PI * t + angle);

      ellipse(myX, myY, 10); // draw particle
    }
  }

  t = t + 0.01; // update time
  
   stroke(231, 185, 0);
  line(0, y, width, y);

  y++;
  if (y > height) {
    y = 0;
  }
drawnumbers(); 
}


function drawnumbers() {
  
for(let i = 0; i<8; i++){
    const rand = int(random(0, numbers.length-1)); 
    fill(0);
    textSize(random(5, 50));
    text(numbers[rand], random(width), random(height));
     
    fill(r, g, b, 255);
    ellipse(mouseX, mouseY, 40);
   } 
  
}




function one() {
 
  var rX = random(width);//random x location
  var rY =  random(height)//random  y location
 
  cg.background(img2);//this makes the image draw on the new canvas
  
  
}   

  

function two() {
  cg.background(img1);
  ellipse(mouseX, mouseY, 55);
  
  
  
}

function three(){
  
  cg.background(img2);
 
}
  

