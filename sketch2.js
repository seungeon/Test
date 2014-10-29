

var grow;
var growCount;

function setup(){

   createCanvas(420,600);
     background(128, 0, 64);
     operCount=0;
     growCount=0;

/*function anime(f){
   if(f<1){
      frame1();
   }else if(f<2){
      frame2();
   }else{

   }
}
*/
function draw(){


	drawPumkin2(255,215,0,grow);
	grow=grow-1;
	if(grow<-10){
		grow=-10;
}
	growCount=growCount+1;
	if(growCount>200){
		grow=0;
		growCount=0;
	}

/*function frame1(){
   fill(0);
   drawPumkin1(60,70,75,85);
}

function frame2(){
   fill(255,125,0);
   drawPumkin2(60,70,10,25);
}

}
*/




fill(0);
stoke(0);

triangle(260,475,275,480,270,480);
triangle(285,475,285,480,280,480);
rect(270,485,15,5);
triangle(300,470,300,475,305,475);
triangle(320,470,320,475,315,475);
rect(300,480,20,5);


}


function drawPumkin2(r,g,b,a){


triangle(260,475,275,480,270,480,r,g,b,a);
triangle(285,475,285,480,280,480,r,g,b,a);
rect(270,485,15,5,r,g,b,a);
triangle(300,470,300,475,305,475,r,g,b,a);
triangle(320,470,320,475,315,475,r,g,b,a);
rect(300,480,20,5,r,g,b,a);

}

