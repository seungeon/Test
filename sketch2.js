
var a=[];
var frame;

function setup(){

   createCanvas(420,600);
     background(128, 0, 64);

function anime(f){
   if(f<1){
      frame1();
   }else if(f<2){
      frame2();
   }else{

   }
}


function frame1(){
   fill(0);
   drawPumkin1(260,475,275,480,270,480);
}

function frame2(){
   fill(255,125,0);
   drawPumkin2(260,475,275,480,270,480);
}

}

function drawPumkin1(x,y,x1,y1,x2,y2){




triangle(x,y,x1,y1,x2,y2);
triangle(x+25,y,x1,y1,x2+10,y2);
rect(x+10,y+10,15,5);
triangle(x+140,y-5,x1+25,y1-5,x2+35,y2-5);
triangle(x+160,y-5,x1+45,y1-5,x2+45,y2-5);
rect(x+140,y+5,20,5);


}


function drawPumkin2(x,y,x1,y1,x2,y2){

triangle(x,y,x1,y1,x2,y2);
triangle(x+25,y,x1,y1,x2+10,y2);
rect(x+10,y+10,15,5);
triangle(x+140,y-5,x1+25,y1-5,x2+35,y2-5);
triangle(x+160,y-5,x1+45,y1-5,x2+45,y2-5);
rect(x+140,y+5,20,5);
}