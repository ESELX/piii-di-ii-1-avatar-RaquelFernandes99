
let posX, posY;
let velX, velY;

function setup() {
  var canvasDiv = document.getElementById('ex1');
  var width = canvasDiv.offsetWidth;
  var sketchCanvas = createCanvas(width,width*.75);
  console.log(sketchCanvas);
  sketchCanvas.parent('ex1');


}

function draw() {
  background(211, 194, 240);



 //cabelo parte de tras

 fill(69, 26, 204)
   ellipse(200, 230, 250,300)

 //pescoço

 fill(244, 223, 182)
 rect(150, 252, 100, 155, 30);

 //mangas

  fill(9, 2, 30)
 rect(80, 320, 240, 205, 30);
 //CALCAS

  fill(0)
 rect(120, 320, 70, 405, 30);

 fill(0)
rect(200, 320, 70, 405, 30);

 //camisola

  fill(9, 2, 30)
 rect(100, 320, 200, 200, 30);

   //orelhas

 fill(244, 223, 182)
   ellipse(200, 200, 230,90)

 //cara
 fill(244, 223, 182)
 circle(200, 200, 200)

  //sobrancelha1
  fill(20,20,20)
 rect(110, 170, 50, 5, 50);
 //sobrancelha2
  fill(20,20,20)
 rect(220, 170, 50, 5, 50);

 //madeixas
   fill(69, 26, 204)
triangle(90, 180, 148, 98, 206, 105);
   fill(69, 26, 204)
triangle(310, 180, 268, 108, 206, 109);

   //chapeu
 fill(20,20,20)
 rect(120,60, 155, 65, 30);
   ellipse(200, 110, 200,40)

 //olho1
   fill(250,250,250)
 circle(135, 200, 40)
 fill(126, 41, 23)
 circle(135, 200, 24)
  fill(20,20,0)
 circle(135, 200, 10)
    fill(250,250,250)
 circle(140, 195, 5)

 //olho2
   fill(250,250,250)
 circle(240, 200, 40)
 fill(126, 41, 23)
 circle(240, 200, 24)
   fill(20,20,0)
 circle(240, 200, 10)
   fill(250,250,250)
 circle(245, 195, 5)

 //nariz
 fill(244, 223, 182)
   circle(180, 220, 20)

 //boca
  fill(250,20,20)
 ellipse(186, 260, 55, 4);


  //balão de fala
 fill(250)
 triangle(100, 180, 18, 98, 76, 95);

 fill(250)
   circle(0, 0, 300)


 //Brincos
   fill(25)
   circle(99, 220, 5)
 fill(25)
   circle(85, 200, 5)
 fill(25)
   circle(299, 220, 5)
   fill(25)
   circle(305, 215, 5)
 fill(25)
   circle(310, 210, 5)

 //CAchecol

    fill(225, 61, 17)
 rect(150, 320, 60, 205, 30);
  fill(225, 61, 17)
 ellipse(186, 320, 165, 45);

 //texto
 fill(87, 37, 144)
 textSize(20);
textAlign(CENTER);
text('Olá, ', 50, 30);
 textAlign(CENTER);
text('o meu nome', 62, 50);
   textAlign(LEFT);
text('é Raquel!', 8, 70);

//texto
fill(87, 37, 144)
textSize(40);
textAlign(CENTER);
text('Sou aluna do, ', 700, 50);
textAlign(CENTER);
text('3º J do Curso AVT ', 700, 150);
  textAlign(CENTER);
text('na ESELX!', 700, 250);

}
