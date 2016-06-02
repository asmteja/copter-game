var c = document.getElementById('copter_game');

var ctx = c.getContext("2d");


var bgimage = new Image();
bgimage.src = "images/bg.png";
var copterimage = new Image();
copterimage.src = "images/copter.png";
var coinimage = new Image();
coinimage.src = "images/coin.png";
var birdimage = new Image();
birdimage.src = "images/bird.png"
var score =0;
var bgx=0;
var bgy =0;
var acx = false;
var acx2 = true;
var dy = 0;
var scorep =0;
var dead =false;
var copterAF;
var coinAF;
var birdAF;
var coinsAF;
var z=1;
bg();

function bg(){
if(acx2){
bgx=bgx-3;}
if(bgx <= -850){

  bgx = 0;
}
ctx.drawImage(bgimage,bgx,bgy);
ctx.drawImage(bgimage,bgx+850,bgy);
if(acx2){
ctx.font = "30px comic sans ms";
ctx.fillStyle="#000000";
ctx.fillText("SCORE:",680,25);
ctx.fillText(score,790,25);
}
if(!acx2){
  ctx.font = "50px comic sans ms";
  ctx.fillStyle="#FF0000";
  ctx.fillText("He's  dead JIM!",210,240);
  ctx.font = "30px comic sans ms";
  ctx.fillText("SCORE:",680,25);
  ctx.fillText(score,790,25);

}
 requestAnimationFrame(bg);
}

var copterx = 30 ;
var coptery = 240;
var copwidth = 131;
var copheight =34;
var copframe = 0;



function copter(){

if(dy>1){dy=1;}
if(dy<-1){dy=-1}

  if(acx){
  dy = dy-0.2;
}else {
  dy = dy+0.2;

}

  coptery = coptery+dy*2;
if(!acx && !acx2){

coptery =coptery-dy*2;

}
if(coptery<0){

  coptery = 0;
}


copframe++;
if(copframe === 3){

  copframe = 0;
}

ctx.drawImage(copterimage,copwidth*copframe,0,copwidth,copheight,copterx,coptery,copwidth,copheight);
 copterAF =requestAnimationFrame(copter);

if(coptery>440){
 dead =true;

}

}

document.onkeydown = function(event){

 if(event.keyCode === 32){

acx =true;

 }

}
document.onkeyup = function(event){

if(event.keyCode === 32){

acx = false;

}

}
var coinwidth1 = 31;
var coinwidth2 = 31;
var coinheight = 46;
var coinframep =1;
var coinx = 860;
var coinx2= 1290;
var coiny2 = 240;
var coiny = 240;
var fps =30;
var p;
p = Math.random();
if(p<0.5){
coiny = coiny + Math.floor(Math.random()*180);
coiny2 = coiny2 - Math.floor(Math.random()*180);
}
else{
  coiny = coiny - Math.floor(Math.random()*180);
  coiny2 = coiny2 + Math.floor(Math.random()*180);

}

coin();

function coin(){
coinframep = coinframep+0.25;
var coinframe = Math.floor(coinframep);
if(coinframep >= 8){

  coinframep=1;

}
if(acx2){
coinx = coinx -3;
coinx2 =coinx2-3;}
if(coinx<-30){
  coinwidth1 = 31;
 coinx =860;
 coiny = 240;
 p= Math.random();
 if(p<0.5){
 coiny = coiny + Math.floor(Math.random()*180);
}else{

  coiny = coiny - Math.floor(Math.random()*180);

}

}
if(coinx2<-30){
coinwidth2 = 31;
  coinx2 =860;
coiny2 = 240;
p= Math.random();
if(p<0.5){
coiny2 = coiny2 - Math.floor(Math.random()*180);
}else{

 coiny2 = coiny2 + Math.floor(Math.random()*180);

}
}

ctx.drawImage(coinimage,0,coinheight*coinframe,coinwidth1,coinheight,coinx,coiny,coinwidth1,coinheight);
ctx.drawImage(coinimage,0,coinheight*coinframe,coinwidth2,coinheight,coinx2,coiny2,coinwidth2,coinheight);

requestAnimationFrame(coin);


//console.log(coptery);
}

var birdwidth = 101;
var birdheight = 110.75;
var birdframep =1;
var birdx = 860;
var birdy = 240;

var p;
p = Math.random();
if(p<0.5){
birdy = birdy + Math.floor(Math.random()*100);
}
else{
  birdy = birdy - Math.floor(Math.random()*280);

}

bird();

function bird() {
birdframep = birdframep+0.125;
var birdframe = Math.floor(birdframep);
if(birdframep >= 4){

  birdframep=1;

}
if(acx2){
birdx = birdx -(9+z);
console.log(z);
}
if(birdx<0){
 birdx =860;
 birdy = 240;
 p= Math.random();
 if(p<0.5){
 birdy = birdy + Math.floor(Math.random()*100);
}else{

  birdy = birdy - Math.floor(Math.random()*280);

}
}
ctx.drawImage(birdimage,0,birdheight*birdframe,birdwidth,birdheight,birdx,birdy,birdwidth,birdheight);

requestAnimationFrame(bird);

}


copter();

setInterval(function pp() {
  if (coinx < copterx + copwidth  && coinx + coinwidth1  > copterx &&
	coiny < coptery + copheight && coiny + coinheight > coptery) {
// The objects are touching
scorep =1;
coinwidth1 = 0;
coinx = -10;
}
if (coinx2 < copterx + copwidth  && coinx2 + coinwidth2  > copterx &&
coiny2 < coptery + copheight && coiny2 + coinheight > coptery) {
// The objects are touching
scorep = 1;

coinwidth2 = 0;
coinx2 =-10;
}

score = scorep+score ;

scorep =0;
z = 2*(score/10);

if (birdx < copterx + copwidth  && birdx + birdwidth  > copterx &&
birdy +50 < coptery + copheight && birdy + birdheight-20 > coptery) {
// The objects are touching
dead =true;
}

},1);

setInterval(function Dead(){



if(dead){

acx = false ;
acx2 =false;


}



},1);
