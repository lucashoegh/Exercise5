let x=0;
function setup() {
createCanvas(800,800);
background(255,100,100);
rect(250,250,300,300,20); //rektangel til mit navneskilt
textFont('Courier New');
textSize(20);
text('Mit navn er Lucas',300,400);

}


function draw() {
  fill(55,120,80);
ellipse(x,680,200,200); //tegner min cirkel
x+=2; //få cirklen til at bevæge sig
  fill(55,120,80);
ellipse(x,100,200,200); //tegner min cirkel
x+=2; //få cirklen til at bevæge sig
}
