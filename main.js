let circles= document.querySelectorAll('.photo');
let selectPhoto = document.querySelector('.selectPhoto');
let container = document.querySelector('.container');

console.dir(circles[1])
let angle = 1.58;
// toutes les 150 ms j'incremente l'angle
let centerX = window.innerWidth/2;
let centerY = window.innerHeight/2 ;
let widthImage = window.innerHeight*0.6
if (widthImage>window.innerWidth) {
   widthImage = window.innerWidth*0.7 

}

selectPhoto.style.width = widthImage + "px"
selectPhoto.style.height = widthImage + "px"

container.style.width = widthImage*1.1 + "px"
container.style.height = widthImage + 20 + "px"
container.style.left = (centerX - widthImage*1.1/2 )  +"px"  

selectPhoto.style.left = (centerX - widthImage/2 )  +"px"  
//selectPhoto.style.top =  "10px"//(centerY - selectPhoto.offsetHeight) +"px"
setInterval(move,15)
let size = 40

for (let i=0; i<circles.length ; i++){
   let circle = circles[i];
   circle.angle = 2*i*Math.PI/circles.length;   
 //  circle.size = 100;
   console.log(circle.style.backgroundImage)
   circle.src = `images/image${i+1}.jpg`
   circle.style.zIndex = i
   circle.style.borderColor = "rgb(255, 67, 67)"
}
function move(){

   for (let i=0; i<circles.length ; i++){
      let circle = circles[i];
      moveCircle(circle,i);
   }
}

function moveCircle(circle,i){

   circle.angle += 0.0015     
   if (circle.angle > (2*Math.PI )) circle.angle = 0;

   circle.size = size + size*Math.sin(circle.angle-Math.PI/2);
   let x = (centerX - circle.offsetWidth/2) - (selectPhoto.offsetWidth/1.5 + circle.offsetWidth*0.8 ) * Math.cos(circle.angle + Math.PI/2) // calcule la position en x
   let y = (widthImage - circle.offsetHeight/2) - 70* Math.sin(circle.angle + Math.PI/2) // idem en y

   // Repositionne le petit cercle avec les nouvelles coordonnées
   circle.style.top = y +"px"  
   circle.style.left = x +"px"
   circle.style.width = circle.size +"px"  
   circle.style.height = circle.size +"px"

   if (circle.angle>(Math.PI -  Math.PI/10) && circle.angle<(Math.PI + Math.PI/10)){
     selectPhoto.src = circle.src
     circle.style.borderColor = "rgb(255, 67, 67)"
   }
   else{
      circle.style.borderColor = "transparent"
   }
}





class Circle {
   constructor(rayon) {
      this.width = 100;
      this.height = 100;
      this.rayon = rayon;
      this.angle = 0;      
      this.zoom = 1;

   }
   draw(){

   }
 }