var img_=["0","1","2","3","4","5","6","7","8","9"];

var img1,img2,img3,img4,img5,img6;

var font;

var numc=0;

var ran_;

function preload() {
    img_[0]=loadImage("imgw.jpg");
    img_[1]=loadImage("1.jpg");
    img_[2]=loadImage("2.jpg");
    img_[3]=loadImage("6.jpg");
    img_[4]=loadImage("4.jpg");
    img_[5]=loadImage("5.jpg");

    ran_=loadImage("c.png");

    font=loadFont("font.ttf");
}

function setup() {
    createCanvas(windowWidth,windowHeight);

    img1=createSprite(width/2,height/2,40,40);
    img1.addAnimation("img0",img_[0]);
    
    if(width>height){
        img1.scale=height/500;
    }
    if(width<height){
        img1.scale=width/1000;
    }


    img2=createSprite(width/2,height/2,40,40);
    img2.addAnimation("img0",img_[1]);
    
    if(width<=height){
        img2.scale=height/500-0.5;
    }
    if(width>height){
        img2.scale=width/1000-1;
    }

    img3=createSprite(width/2,height/2,40,40);
    img3.addAnimation("img0",img_[2]);
    
    if(width<=height){
        img3.scale=height/500-0.5;
    }
    if(width>height){
        img3.scale=width/1000-0.5;
    }

    img4=createSprite(width/2,height/2,40,40);
    img4.addAnimation("img0",img_[3]);
    
    if(width>=height){
        img4.scale=height/500-1;
    }
    if(width<height){
        img4.scale=width/1000;
    }

    img5=createSprite(width/2,height/2,40,40);
    img5.addAnimation("img0",img_[4]);
    
    if(width>=height){
        img5.scale=height/500;
    }
    if(width<height){
        img5.scale=width/1000;
    }

    img6=createSprite(width/2,height/2,40,40);
    img6.addAnimation("img0",img_[5]);
    
    if(width>=height){
        img6.scale=height/500-1;
    }
    if(width<height){
        img6.scale=width/1000;
    }

    img1.visible=!false;
    img2.visible=false;
    img3.visible=false;
    img4.visible=false;
    img5.visible=false;
    img6.visible=false;

}
function draw() {
    background(220);

    if(frameCount%100==0) {
        img1.destroy();
        img2.visible=true;
    }
    if(frameCount%200==0) {
        img2.destroy();
        img3.visible=true;
    }
    if(frameCount%300==0) {
        img3.destroy();
        img4.visible=true;
    }
    if(frameCount%400==0) {
        img4.destroy();
        img5.visible=true;
    }
    if(frameCount%500==0) {
        img5.destroy();
        img6.visible=true;
    }
    if(frameCount%600==0) {
        img6.destroy();
    }
    if(frameCount>610) {
        fill("black")

        textFont(font);
        textSize(30);
        text("A very happy\nfather's day\nto my dear\nfather and uncle\nlove you lots",width/2-width/4,height/2);
        if(numc<5) {
            var ran=createSprite(Math.round(random(20,width-20)),Math.round(random(20,height-20)),40,40);
            ran.addAnimation("ran",ran_);
            ran.velocityX=Math.random(0.5,3);
            ran.velocityY=Math.random(0.5,3);
            ran.scale=0.5;
            numc+=1;
        }
    }

    if(frameCount>2000) {
        frameCount=0;
    }

    drawSprites();
    
    fill("black");
    textSize(17);
    text("Website &\nwishes \nby-\nAnuj\nDoddakaragi",width-100,height-100);
}
