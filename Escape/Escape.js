var canvas = document.getElementById("canvas");
var processing = new Processing(canvas, function(processing) {
    processing.size(400, 400);
    processing.background(0xFFF);

    var mouseIsPressed = false;
    processing.mousePressed = function () { mouseIsPressed = true; };
    processing.mouseReleased = function () { mouseIsPressed = false; };

    var keyIsPressed = false;
    processing.keyPressed = function () { keyIsPressed = true; };
    processing.keyReleased = function () { keyIsPressed = false; };

    function getImage(s) {
        var url = "https://www.kasandbox.org/programming-images/" + s + ".png";
        processing.externals.sketch.imageCache.add(url);
        return processing.loadImage(url);
    }

    function getLocalImage(url) {
        processing.externals.sketch.imageCache.add(url);
        return processing.loadImage(url);
    }

    // use degrees rather than radians in rotate function
    var rotateFn = processing.rotate;
    processing.rotate = function (angle) {
        rotateFn(processing.radians(angle));
    };

    with (processing) {
        

var ScreenSize = 4;
var shading = 60;
var fading = true;

//All Code
var Button = function(Config) {
    this.x = Config.x || 0;
    this.y = Config.y || 0;
    this.Width = Config.Width || 150;
    this.Height = Config.Height || 50;
    this.Draw = Config.Draw || function() {
        fill(25, 105, 0);
        rect(this.x, this.y, this.Width, this.Height, 5);
    };
};
Button.prototype.BntDraw = function() {
    this.Draw();
};
Button.prototype.IsMouseInside = function() {
    return  mouseX > this.x &&
            mouseX < (this.x + this.Width) &&
            mouseY > this.y &&
            mouseY < (this.y + this.Height);
};

var buttons = {
    Buttons : [
        new Button({
            x :  10,
            y : 350,
            Width  : 90,
            Height : 40, 
            Draw : function() {
                if(this.IsMouseInside())
                {
                    fill(0, 0, 0, 125);
                    if(mouseIsPressed)
                    {
                         fill(0, 0, 0 , 155);
                    }
                }else{
                fill(0, 0, 0, 100);
                }
                rect(this.x, this.y, this.Width, this.Height);
                fill(0, 0, 0);
    text("Bnt1",this.x - 10 + this.Width / 2 ,this.y + 4 + this.Height / 2);
            },
        }),
        new Button({
            x : 300,
            y : 350,
            Width  : 90,
            Height : 40, 
            Draw : function() {
                if(this.IsMouseInside())
                {
                    fill(0, 0, 0, 125);
                    if(mouseIsPressed)
                    {
                         fill(0, 0, 0 , 155);
                    }
                }else{
                fill(0, 0, 0, 100);
                }
                rect(this.x, this.y, this.Width, this.Height);
                fill(0, 0, 0);
    text("Bnt2",this.x - 10 + this.Width / 2 ,this.y + 4 + this.Height / 2);
            },
        }),
        new Button({
            x : 150,
            y : 275,
            Width  : 90,
            Height : 40, 
            Draw : function() {
                if(this.IsMouseInside())
                {
                    fill(0, 0, 0, 125);
                    if(mouseIsPressed)
                    {
                         fill(0, 0, 0 , 155);
                    }
                }else{
                fill(0, 0, 0, 100);
                }
                rect(this.x, this.y, this.Width, this.Height);
                fill(0, 0, 0);
    text("Bnt3",this.x - 10 + this.Width / 2 ,this.y + 4 + this.Height / 2);
            },
        })
    ],
    Draw : function() {
       for(var i = 0; i < this.Buttons.length; i++)
       {
           this.Buttons[i].Draw();
       }
    },
};

var enemycount = 0;
var showDebugMenu = false;
var showTime = false;
var useSavedPower = false;
var showSavedPowerUps = false;
var stop = false;

//ppstop = true;

var kills = 0;
var rawkills = 0;
var keys = [];

var keyPressed = function() 
{
    keys[keyCode] = true;
    if(key.toString() === "d")
    {
        if(showDebugMenu === true)
        {
            showDebugMenu = false;
        }else if(showDebugMenu === false)
        {
            showDebugMenu = true;
        }
        
    }
    if(key.toString() === "s")
    {
        if(showTime === true)
        {
            showTime = false;
        }else if(showTime === false)
        {
              showTime = true;
        }
        
    }
     if(key.toString() === "p")
    {
        if(stop === true)
        {
            stop = false;
        }else if(stop === false)
        {
            stop = true;
        }
        
    }
    if(key.toString() === "u")
    {
        if(useSavedPower === true)
        {
            useSavedPower = false;
        }else if(useSavedPower === false)
        {
            useSavedPower = true;
        }
    }
    if(key.toString() === "i")
    {
        if(showSavedPowerUps === true)
        {
            showSavedPowerUps = false;
        }else if(showSavedPowerUps === false)
        {
            showSavedPowerUps = true;
        }
        
    }
};
var keyReleased = function()
{
    keys[keyCode] = false;
};

var level;
var makingLevel = false;
var levelMakingNum = 21;

//All functions, NO editing.
{
{
    for(var i = 0; i < 5; i++)
    {
        if(makingLevel === true)
        {
            level = levelMakingNum;
        }else{
            level = 1;
        }
    }
   level -= 1;
}
var gridSize = 40;
var deaths = 0;
var falls = 0;
// Background 

var backRange = function(start,stop,ssqSize,transparentcy)
{
    this.start = start;
    this.stop = stop;
    this.ssqSize = ssqSize;
    this.transparentcy = transparentcy;
    this.rectx = [];
};
backRange.prototype.Create = function()
{
    if(this.rectx.length < width)
    {
        for (var i = 0; i < width; i += this.ssqSize) {
            this.rectx.push(random(this.start,this.stop));
        }
    }
};
backRange.prototype.Draw = function()
{
   for (var i = 0; i < this.rectx.length; i += this.ssqSize) {
        fill(this.rectx[i]/2, this.rectx[i]/4, 0,this.transparentcy);
        rect(i,this.rectx[i],this.ssqSize,1000);
    }
};
var backgrd = new backRange(200,309,20,116);
var cloud = function(X,Y) 
{
    this.X = X;
    this.Y = Y;
};
cloud.prototype.Draw = function() {
    var xPos = this.X;
    var yPos = this.Y;
    pushMatrix();
    translate(xPos,yPos);
    scale(0.5,0.5);
    fill(255, 255, 255);
    ellipse(0, 150, 100, 80);
    ellipse(-40, 150, 70, 60);
    ellipse(40, 150, 70, 60);
    popMatrix();
};

var CloudRange = function(CloudsAmt,XStart,XEnd,YStart,YEnd) 
{
    this.CloudsAmt = CloudsAmt;
    this.XStart = XStart;
    this.XEnd = XEnd;
    this.YStart = YStart - 100;
    this.YEnd = YEnd;
    this.Clouds = [];
};
CloudRange.prototype.Create = function() {
    this.Clouds.length = 0;
    for(var i = 0; i < this.CloudsAmt; i++)
    {
    this.Clouds.push(new cloud(random(this.XStart,this.XEnd),
                     random(this.YStart,this.YEnd)));
    }
};
CloudRange.prototype.Draw = function() {
    for(var i = 0; i < this.Clouds.length; i++)
    {
        this.Clouds[i].Draw();
    }
};
var CloudsRange1 = new CloudRange(random(10,15),-20,width,0,70);
var drawBackground = function() {
    //background(129, 165, 222);
    // background(36, 133, 224);
   // background (121, 150, 196);
   // background(160, 180, 232);
   // background(177, 205, 245);
    noStroke();
    for (var i = 0; i < 2; i++) {
        //fill(i*2, 153-i*10, 255-i*10);
        background(-i*2, 153+i*10, 255+i*10,i*180);
        //rect(i*40,i*40,400-80*i,400-80*i); 
    }
    CloudsRange1.Draw();
    backgrd.Draw();
};

/* Colliding Object */
var Colliding = function(x1,y1,w1,h1,x2,y2,w2,h2) {
   var  colliding = false;
    if (y1 + h1 > y2 &&
            y1        < y2 + h2 &&
            x1 + w1 > x2 &&
            x1        < x2 + w2){
               colliding = true;
                
            }
    return colliding;
};

/* Player Object */
var Player = function(x,y,w,h) {
    
    this.x = x; 
    this.y = y;
    this.w = w - 2; 
    this.h = h - 2;
    
    this.xvel = 0;
    this.yvel = 0;
    this.falling = true;
    
    this.gravity = 0.4;
    this.jumpHeight = 9;
    this.maxFallSpeed = 12;
    
    this.moveSpeed = 0.5;
    this.maxMoveSpeed = 5;
    
    this.life = 1;
    this.savedPowerUps = 0;
    this.update = function(OBJs) 
    {
        
        /* Player Events */
        if(keys[LEFT]) 
        { 
            this.xvel -= this.moveSpeed;
        }
        if(keys[RIGHT])
        { 
            this.xvel += this.moveSpeed; 
        }
        
        if(!keys[LEFT] && !keys[RIGHT]) 
        {
            if(this.xvel > 0) 
            {
                this.xvel -= this.moveSpeed;
            }
            if(this.xvel < 0) 
            {
                this.xvel += this.moveSpeed;
            }
            /*A quick fix to stop player from
                moving in a single direction.*/
            if(this.xvel < 0.1 && this.xvel > 0)
            {
                this.xvel = 0;
            }
            if(this.xvel > -0.1 && this.xvel < 0)
            {
                this.xvel = 0;
            }
        }

        // Checks if we're able to jump
        if(keys[UP] && !this.falling) 
        {
            this.yvel = -this.jumpHeight;
        }
        
        // Adds gravity to player
        this.yvel += this.gravity;
        
        // Checks x and y max velocity speeds
        if(this.yvel > this.maxFallSpeed) 
        {
            this.yvel = this.maxFallSpeed;
        }
        
        if(this.xvel > this.maxMoveSpeed) 
        {
            this.xvel = this.maxMoveSpeed;
        }
            
        if(this.xvel < -this.maxMoveSpeed) 
        {
            this.xvel = -this.maxMoveSpeed;
        }
        this.x += this.xvel;
        // Checks LEFT and RIGHT collision
        //this.collideWith(this.xvel,0,platforms);
        for(var i = 0; i < OBJs.length; i++)
        {
            this.collideWith(this.xvel,0,OBJs[i]);
        }
        

        // Always asume that the player is in the air.
        // NOTE: This will be set to false if the collideWith function
        //       finds that the player is on a platform.
        this.falling = true;
        
        
        this.y += this.yvel;
        // Checks TOP and BOTTOM collision
        //this.collideWith(0,this.yvel,platforms);
        for(var i = 0; i < OBJs.length; i++)
        {
            this.collideWith(0,this.yvel,OBJs[i]);
        }
        //NOTE: The order we check the player's collision with the platforms matter.
    };
    
    /*
    The collideWith function loops through all the platforms and
    uses x and y velocity to check which direction the player is colliding.
    */
    this.collideWith = function(xv,yv,obj) 
    {
        for (var i = 0; i < obj.length; i++) 
        {
            var p = obj[i];
            if(Colliding(this.x,this.y,this.w,this.h,p.x,p.y,p.w,p.h))
            {
                // BOTTOM
                if(yv > 0) 
                {
                    this.yvel = 0;
                    this.falling = false;
                    this.y = p.y - this.h;
                }
                // TOP
                if(yv < 0) 
                {
                    this.yvel = 0;
                    this.falling = true;
                    this.y = p.y + p.h;
                }
                // RIGHT
                if(xv > 0) 
                {
                    this.xvel = 0;
                    this.x = p.x - this.w;
                }
                // LEFT
                if(xv < 0) 
                {
                    this.xvel = 0;
                    this.x = p.x + p.w;
                }
            }
        }
    };
    
    this.draw = function() 
    {
        if(this.life === 1)
        {
        noStroke();
        fill(255, 255, 255);
        rect(this.x,this.y,this.w,this.h,4);
        
        }
        if(this.life === 2)
        {
        noStroke();
        fill(16, 8, 130);
        rect(this.x,this.y,this.w,this.h,4);
        }
        fill(0, 0, 0);
        ellipse(this.x+this.w/3,this.y+this.h/3,7.5,7.5);
        ellipse(this.x+this.w*2/3,this.y+this.h/3,7.5,7.5);
        fill(117, 14, 14);
        rect(this.x,this.y+this.h-5,this.w,5);
    };
    
};
var player = new Player(200,200,gridSize,gridSize);

//Objects in Game
{
/* Block Object */
var Block = function (x,y,w,h,color) {
    this.x = x; this.y = y;
    this.w = w; this.h = h;
    this.color = color;
};
Block.prototype.draw = function() {
    fill(this.color);
    rect(this.x,this.y,this.w,this.h);
};
// Platforms array will hold the block objects.
var platforms = [];
platforms.add = function(x,y,w,h,c) {
    platforms.push(new Block(x,y,w,h,c));
};
platforms.draw = function() {
    for (var i = 0; i < platforms.length; i++) {
        platforms[i].draw();
    }
};

/* Block Object */
var powerUpBlock = function (x,y,w,h,color) {
    this.x = x; this.y = y;
    this.w = w; this.h = h;
    this.color = color;
};
powerUpBlock.prototype.draw = function() {
    fill(this.color);
    rect(this.x,this.y,this.w,this.h);
    fill(255, 0, 0);
    textSize(15);
    text("Power",this.x,this.y+this.w/2);
};
// Platforms array will hold the block objects.
var powerUpplatforms = [];
powerUpplatforms.add = function(x,y,w,h,c) {
     powerUpplatforms.push(new  powerUpBlock(x,y,w,h,c));
};
powerUpplatforms.draw = function() {
    for (var i = 0; i < powerUpplatforms.length; i++) {
        powerUpplatforms[i].draw();
    }
};
powerUpplatforms.colliding = function() {
   var IsColliding = false;
   for (var i = 0; i < powerUpplatforms.length; i++) {
       if(Colliding(player.x,player.y,player.w,player.h,
      powerUpplatforms[i].x,powerUpplatforms[i].y,powerUpplatforms[i].w,powerUpplatforms[i].h))
       {
           powerUpplatforms[i].y = -1000;
           powerUpplatforms[i].h = 0;
           IsColliding = true;
       }
   }
   return IsColliding;
};


/* Block Object */
var badBlock = function (x,y,w,h,color) {
    this.x = x; this.y = y;
    this.w = w; this.h = h;
    this.color = color;
};
badBlock.prototype.draw = function() {
    fill(this.color);
    rect(this.x,this.y,this.w,this.h);
};

var badplatforms = [];
badplatforms.add = function(x,y,w,h,c) {
    badplatforms.push(new badBlock(x,y,w,h,c));
};
badplatforms.draw = function() {
    for (var i = 0; i < badplatforms.length; i++) {
        badplatforms[i].draw();
    }
};
/* Block Object */
var goodBlock = function (x,y,w,h,color) {
    this.x = x; this.y = y;
    this.w = w; this.h = h;
    this.color = color;
};
goodBlock.prototype.draw = function() {
    fill(this.color);
    rect(this.x,this.y,this.w,this.h);
};
var goodplatforms = [];
goodplatforms.add = function(x,y,w,h,c) {
goodplatforms.push(new goodBlock(x,y,w,h,c));
};
goodplatforms.draw = function() {
    for (var i = 0; i < goodplatforms.length; i++) {
        goodplatforms[i].draw();
    }
};



/* JumpBlock Object */
var JumpBlock = function (x,y,w,h,color) {
    this.x = x; this.y = y;
    this.w = w; this.h = h;
    this.color = color;
};
JumpBlock.prototype.draw = function() {
    fill(this.color);
    rect(this.x,this.y,this.w,this.h);
};

// Jumpplatforms array will hold the Jumpblock objects.
var Jumpplatforms = [];
Jumpplatforms.add = function(x,y,w,h,c) {
    Jumpplatforms.push(new JumpBlock(x,y,w,h,c));
};
Jumpplatforms.draw = function() {
    for (var i = 0; i < Jumpplatforms.length; i++) {
        Jumpplatforms[i].draw();
    }
};
Jumpplatforms.colliding1 = function() {
    var IsColliding = false;
    for (var i = 0; i < Jumpplatforms.length; i++) {
    if(Colliding(player.x,player.y,player.w,player.h,
    Jumpplatforms[i].x,Jumpplatforms[i].y,Jumpplatforms[i].w,Jumpplatforms[i].h))
       {
       IsColliding = true;
       }
    }
    return IsColliding;
};

/* WinBlock Object */
var WinBlock = function (x,y,w,h,color) {
    this.x = x; 
    this.y = y;
    this.w = w; 
    this.h = h;
    this.color = color;
};
WinBlock.prototype.draw = function() {
    fill(this.color);
    rect(this.x,this.y,this.w,this.h);
};
WinBlock.prototype.colliding = function() {
   var IsColliding = false;
   if(Colliding(player.x,player.y,player.w,player.h,this.x,this.y,this.w,this.h))
   {
       IsColliding = true;
   }
   return IsColliding;
};
// Goal array will hold the WinBlock objects.
var Goal = [];
Goal.add = function(x,y,w,h,c) {
    Goal.push(new WinBlock(x,y,w,h,c));
};
Goal.draw = function() {
    for (var i = 0; i < Goal.length; i++) {
        Goal[i].draw();
    }
};
Goal.colliding1 = function() {
    for (var i = 0; i < Goal.length; i++) {
       return Goal[i].colliding();
    }
};

var StartBlock = function (x,y,w,h,color) {
    this.x = x; 
    this.y = y;
    this.w = w; 
    this.h = h;
    this.color = color;
};
StartBlock.prototype.draw = function() {
    fill(this.color);
    ellipse(this.x+this.w/2,this.y+this.h/2,this.w,this.h);
};
StartBlock.prototype.colliding = function() {
    var IsColliding = false;
   if(Colliding(player.x,player.y,player.w,player.h,this.x,this.y,this.w,this.h))
   {
       IsColliding = true;
   }
   return IsColliding;
};
//Start array will hold the StartBlock objects.
var Start = [];
Start.add = function(x,y,w,h,c) {
    Start.push(new StartBlock(x,y,w,h,c));
};
Start.draw = function() {
    for (var i = 0; i < Start.length; i++) {
          Start[i].draw();
    }
};

var LavaBlock = function (x,y,w,h,color) {
    this.x = x; 
    this.y = y;
    this.w = w; 
    this.h = h;
    this.color = color;
};
LavaBlock.prototype.draw = function() {
    fill(this.color);
    rect(this.x,this.y,this.w,this.h);
};
// Lava array will hold the LavaBlock objects.
var Lava = [];
Lava.add = function(x,y,w,h,c) {
    Lava.push(new LavaBlock(x,y,w,h,c));
};
Lava.draw = function() {
    for (var i = 0; i < Lava.length; i++) {
        Lava[i].draw();
    }
};
Lava.colliding1 = function() {
    var IsColliding = false;
    for (var i = 0; i < Lava.length; i++) {
    if(Colliding(player.x,player.y,player.w,player.h,Lava[i].x,Lava[i].y,Lava[i].w,Lava[i].h))
       {
       IsColliding = true;
       }
    }
    return IsColliding;
};


var Chicken = function (x,y,w,h,color,speed,chargeSpeed) {
    this.x = x; 
    this.y = y;
    this.w = w; 
    this.h = h;
    this.color = color;
    this.range1 = 100;
    this.range2 = 300;
    this.speed = 1;
    this.chargeSpeed = 4;
    this.dir = "Left";
    this.chargingLeft = false;
    this.chargingRight = false;
    this.xvel = 0;
    this.yvel = 0;
    this.falling = true;
    
    this.gravity = 0.4;
    this.jumpHeight = 8;
    this.maxFallSpeed = 12;
    
    this.moveSpeed = 0.5;
    this.maxMoveSpeed = 2.5;
    this.pps = 2.5;
    this.update2 = function(OBJs) 
    {
        if(this.xvel < 0.1 && this.xvel > 0)
        {
            this.xvel = 0;
        }
        if(this.xvel > -0.1 && this.xvel < 0)
        {
            this.xvel = 0;
        }
        this.yvel += this.gravity;
        if(this.yvel > this.maxFallSpeed) 
        {
            this.yvel = this.maxFallSpeed;
        }
        
        if(this.xvel > this.maxMoveSpeed) 
        {
            this.xvel = this.maxMoveSpeed;
        }
            
        if(this.xvel < -this.maxMoveSpeed) 
        {
            this.xvel = -this.maxMoveSpeed;
        }
        this.x += this.xvel;
        for(var i = 0; i < OBJs.length; i++)
        {
            this.collideWith(this.xvel,0,OBJs[i]);
        }
        this.falling = true;
        this.y += this.yvel;
        for(var i = 0; i < OBJs.length; i++)
        {
            this.collideWith(0,this.yvel,OBJs[i]);
        }
    };
    
};

Chicken.prototype.draw = function() {
    if(this.h > 0)
    {
    fill(this.color/2);
    rect(this.x,this.y,this.w,this.h);
    fill(29, 33, 153);
    rect(this.x+4,this.y,this.w-8,5);
    fill(0, 0, 0);
    ellipse(this.x+this.w/3,this.y+this.h/3,7.5,7.5);
    ellipse(this.x+this.w*2/3,this.y+this.h/3,7.5,7.5);
    fill(255, 0, 0);
    rect(this.x,this.y+4,5,this.h-8);
    fill(255, 0, 0);
    rect(this.x+this.w-4,this.y+4,5,this.h-8);
    }
};
Chicken.prototype.MoveLeft = function()
{
   this.xvel -= this.moveSpeed; 
};
Chicken.prototype.MoveRight = function()
{
   //this.x += this.speed;
    this.xvel += this.moveSpeed; 
};
Chicken.prototype.direct = function()
{
        if(this.x > this.range2)
        {
            this.dir = "Left";
        }
        if(this.x < this.range1)
        {
            this.dir = "Right";
        }
};
Chicken.prototype.ChargeLeft = function()
{
    if(player.x + player.w < this.x && player.y + player.h > this.y&&
    player.y < this.y + this.h)
    {
        this.maxMoveSpeed = this.chargeSpeed;
        this.xvel = -this.chargeSpeed;
    }else{
        this.maxMoveSpeed = this.pps;
    }
};
Chicken.prototype.ChargeRight = function()
{
    if(player.x > this.w + this.x && player.y + player.h > this.y &&
    player.y < this.y + this.h)
    {
        this.maxMoveSpeed = this.chargeSpeed;
        this.xvel = this.chargeSpeed;
       
    }else{
        this.maxMoveSpeed = this.pps;
    }
};
Chicken.prototype.collideWith = function(xv,yv,obj) {
        for (var i = 0; i < obj.length; i++) 
        {
            var p = obj[i];
            if(Colliding(this.x,this.y,this.w,this.h,p.x,p.y,p.w,p.h))
            {
                // BOTTOM
                if(yv > 0) 
                {
                    this.yvel = 0;
                    this.falling = false;
                    this.y = p.y - this.h;
                }
                // TOP
                if(yv < 0) 
                {
                    this.yvel = 0;
                    this.falling = true;
                    this.y = p.y + p.h;
                }
                // RIGHT
                if(xv > 0) 
                {
                    this.x = p.x - this.w;
                    this.dir = "Left";
                    this.yvel = -random(this.jumpHeight,-3+this.jumpHeight);
                }
                // LEFT
                if(xv < 0) 
                {
                    this.x = p.x + p.w;
                    this.dir = "Right";
                    this.yvel = -random(this.jumpHeight,-3+this.jumpHeight);
                }
            }
        }
};
Chicken.prototype.update = function() {
   
        if(this.dir === "Left")
        {
            this.MoveLeft();
            this.ChargeLeft();
        }
        if(this.dir === "Right")
        {
            this.MoveRight();
            this.ChargeRight();
        }
    if(this.x <  -this.w + 0 || this.x > width)
    {
        this.xvel = 0;
    }
        //println(this.dir);
};
// ChickenArray array will hold the Chicken objects.
var ChickenArray = [];
ChickenArray.add = function(x,y,w,h,c) {
   ChickenArray.push(new Chicken(x,y,w,h,c));
};
ChickenArray.draw = function() {
    for (var i = 0; i < ChickenArray.length; i++) {
        ChickenArray[i].draw();
        
    }
};
ChickenArray.update = function() {
    for (var i = 0; i < ChickenArray.length; i++) {
        ChickenArray[i].update();
    }
};
ChickenArray.update2 = function(n) {
    for (var i = 0; i < ChickenArray.length; i++) {
        ChickenArray[i].update2(n);
    }
};
var IsColliding2 = false;
ChickenArray.killcolliding1 = function() {
   var IsColliding = false;
   
    for (var i = 0; i < ChickenArray.length; i++) {
if(Colliding(player.x,player.y,player.w,player.h, ChickenArray[i].x, ChickenArray[i].y, ChickenArray[i].w, ChickenArray[i].h))
       {
        if(player.y +  player.h < ChickenArray[i].y + 10) //&& player.yvel > 0) 
           {
               //&&///||
               /*)// 5)
           // && 
           //player.x + player.w > ChickenArray[i].x + 4&& 
           //player.x < ChickenArray[i].x + ChickenArray[i].w- 8)
           //if(*/
            //if(player.yvel > 0)
           //&&player.y +  player.h < ChickenArray[i].y + 10)
             {
              // println("Your Alive, chicken dead");
               IsColliding2 = true;
            //   IsColliding2 = false;
              enemycount--;
              ChickenArray[i].y = 2000;
              ChickenArray[i].h = 0;
              kills++;
             }
           }else{
              // println("Your dead, chicken alive");
               IsColliding = true;
                //IsColliding = false;
   
           }
//if(player.yvel === 0 && player.y +  player.h < ChickenArray[i].y + 10 )
        //   {
            //   IsColliding2 = false;
        //   }
    // if(player.yvel <= 0 && player.y + player.h < ChickenArray[i].y + 10 )
        //   {
            //   IsColliding = false;
           }
    //   }else{
            // return IsColliding;
    //   }
        
 // if(player.y +  player.h > ChickenArray[i].y + 10 && player.yvel <= 0)
        {
            //  IsColliding = false;
            //    IsColliding2 = false;
        }
    }
     return IsColliding;
   
    
};
ChickenArray.deadlycolliding1 = function() {
    return IsColliding2;
};


var moving = function (x,y,w,h,color,speed,chargeSpeed) {
    this.x = x; 
    this.y = y;
    this.w = w; 
    this.h = h;
    this.color = color;
    this.range1 = 100;
    this.range2 = 300;
    this.speed = 1;
    this.chargeSpeed = 3;
    this.dir = "Left";
    this.chargingLeft = false;
    this.chargingRight = false;
    this.xvel = 0;
    this.yvel = 0;
    this.falling = true;
    
    this.gravity = 0;
    this.jumpHeight = 8;
    this.maxFallSpeed = 12;
    
    this.moveSpeed = 0.5;
    this.maxMoveSpeed = 2.5;
    this.pps = 2.5;
    this.update2 = function(OBJs) 
    {
        if(this.xvel < 0.1 && this.xvel > 0)
        {
            this.xvel = 0;
        }
        if(this.xvel > -0.1 && this.xvel < 0)
        {
            this.xvel = 0;
        }
        this.yvel += this.gravity;
        if(this.yvel > this.maxFallSpeed) 
        {
            this.yvel = this.maxFallSpeed;
        }
        
        if(this.xvel > this.maxMoveSpeed) 
        {
            this.xvel = this.maxMoveSpeed;
        }
            
        if(this.xvel < -this.maxMoveSpeed) 
        {
            this.xvel = -this.maxMoveSpeed;
        }
        this.x += this.xvel;
        for(var i = 0; i < OBJs.length; i++)
        {
            this.collideWith(this.xvel,0,OBJs[i]);
        }
        this.falling = true;
        this.y += this.yvel;
        for(var i = 0; i < OBJs.length; i++)
        {
            this.collideWith(0,this.yvel,OBJs[i]);
        }
    };
    
};

moving.prototype.draw = function() {
    if(this.h > 0)
    {
    fill(this.color);
    rect(this.x,this.y,this.w,this.h);
    }
};
moving.prototype.MoveLeft = function()
{
   this.xvel -= this.moveSpeed; 
};
moving.prototype.MoveRight = function()
{
   //this.x += this.speed;
    this.xvel += this.moveSpeed; 
};
moving.prototype.direct = function()
{
        if(this.x > this.range2)
        {
            this.dir = "Left";
        }
        if(this.x < this.range1)
        {
            this.dir = "Right";
        }
};
moving.prototype.collideWith = function(xv,yv,obj) {
        for (var i = 0; i < obj.length; i++) 
        {
            var p = obj[i];
            if(Colliding(this.x,this.y,this.w,this.h,p.x,p.y,p.w,p.h))
            {
                // BOTTOM
                if(yv > 0) 
                {
                    //this.yvel = 0;
                    this.falling = false;
                    //this.y = p.y - this.h;
                }
                // TOP
                if(yv < 0) 
                {
                    //this.yvel = 0;
                    //this.falling = true;
                    //this.y = p.y + p.h;
                }
                // RIGHT
                if(xv > 0) 
                {
                    this.x = p.x - this.w;
                    this.dir = "Left";
                    //this.yvel = -random(this.jumpHeight,-3+this.jumpHeight);
                }
                // LEFT
                if(xv < 0) 
                {
                    this.x = p.x + p.w;
                    this.dir = "Right";
                    //this.yvel = -random(this.jumpHeight,-3+this.jumpHeight);
                }
            }
        }
};
moving.prototype.update = function() {
   this.yvel = 0;
        if(this.dir === "Left")
        {
            this.MoveLeft();
        }
        if(this.dir === "Right")
        {
            this.MoveRight();
        }
    if(this.x <  -this.w + 0 || this.x > width)
    {
        this.xvel = 0;
    }
        //println(this.dir);
};
// movingArray array will hold the moving objects.
var movingArray = [];
movingArray.add = function(x,y,w,h,c) {
   movingArray.push(new moving(x,y,w,h,c));
};
movingArray.draw = function() {
    for (var i = 0; i < movingArray.length; i++) {
        movingArray[i].draw();
    }
};
movingArray.update = function() {
    for (var i = 0; i < movingArray.length; i++) {
        movingArray[i].update();
    }
};
movingArray.update2 = function(n) {
    for (var i = 0; i < movingArray.length; i++) {
        movingArray[i].update2(n);
    }
};
movingArray.colliding2 = function() {
   var IsColliding1 = false;

    for (var i = 0; i < ChickenArray.length; i++) {
if(Colliding(player.x,player.y,player.w,player.h, movingArray[i].x, movingArray[i].y, movingArray[i].w, movingArray[i].h))
       {
           IsColliding1 = true;
       }
    }
    return IsColliding1;
    
};


}

}

//open this to what is in the array
/*
var block = 1;
var end = 2;
var start = 3;
var lava = 4;
var Jump = 5;
var chicken = 6;
var blocks that the chickens cannot go through but you can = 7;
var blocks that the chickens can go through but you cannot = 8;
var PowerUp = 9;
*/

var m = 10;// moving block
//all the levels!
//Open this to make your own levels.
var levels = [
    [
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [0,0,0,1,0,0,0,0,0,0,0,0,1,0,9],
        [3,0,9,1,6,0,0,0,0,0,0,6,1,0,2],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    ],
    [
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [0,0,0,1,0,0,0,0,0,0,0,0,1,0,1],
        [3,0,0,1,0,0,0,0,0,0,0,6,1,0,2],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    ],
    [
        [],
        [],
        [0,0,0,9,0,0,0,0,0,9,0,0],
        [0,0,0,1,0,0,0,0,0,1,0,0],
        [0,0,0,1,0,0,0,0,0,1,0,0],
        [0,0,0,1,0,0,0,0,m,1,0,0],
        [0,0,5,1,1,0,0,m,1,1,0,0],
        [3,1,1,1,1,0,0,0,1,1,0,2],
        [1,1,1,1,1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,1,1,1,1,1],              
    ],
    [
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [3,0,0,0,0,0,0,0,2],
        [1,1,1,1,0,0,1,1,1],
    ],
    [
        [],
        [],
        [],
        [],
        [],
        [],
        [0,0,0,0,1],
        [0,0,0,0,1],
        [3,0,0,5,1,0,0,0,2],
        [1,1,1,1,1,1,1,1,1],
    ],
    [
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [3,0,0,0,4,4,0,0,2],
        [1,1,1,1,1,1,1,1,1],
    ],
    [
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [3,0,0,0,0,0,0,0,0,2],
        [1,1,1,0,0,0,0,0,1,1],
        [1,1,1,4,4,4,4,4,1,1],
        [1,1,1,1,1,1,1,1,1,1],
    ],
    [
        [0,0,3,0,0,0],
        [0,0,1,1,1,0],
        [0,0,1,2,1,0],
        [0,0,1,0,0,0],
        [0,0,1,0,0,0],
        [0,0,1,0,0,0],
        [0,0,1,1,1,0],
    ],
    [
        [0,1,3,1,0,0],
        [0,1,1,1,0,0],
        [0,0,0,0,0,0],
        [0,0,0,0,0,0],
        [0,0,0,0,0,0],
        [0,0,0,2,0,0],
        [0,1,1,1,1,0],
    ],
    
    [
        [], 
        [], 
        [0,0,0,0,0,0,3,0,0,9,0,0,0,0,4,0],
        [0,0,1,1,1,1,1,1,1,1,1,7,1,1,1,1,1],
        [0,0,1,0,0,0,2,1,6,0,0,0,0,0,6,6,1],
        [0,0,1,0,1,1,1,1,1,1,1,1,7,1,1,1,1],
        [0,0,1,0,0,0,0,0,0,0,0,0,0,1],
        [0,0,1,1,1,1,1,1,1,1,1,1,1,1],
    ],
    [
        [1,0,1], 
        [1,0,1,3],
        [1,0,1,1,1,4],
        [1,0,1],
        [1,0,1,0,0,0,4,0,0,0,5],
        [1,0,1,1,1,1,1,1,0,1,1,1,1,1],
        [1,0,1,2,0,0,0,0,0,0,0,0,0,1],
        [1,0,1,1,1,1,1,1,1,1,1,1,1,1],
    ],
    [
        [1,0,1], 
        [1,0,1,1,1,1,1,0,4,0],
        [1,0,1,0,0,0,0,0,1],
        [1,0,1,3,0,0,0,0,0,0,1],
        [1,0,1,0,0,4,0,0,0,5,1,4],
        [1,0,1,1,1,1,1,1,1,1,1,1,0,1],
        [1,0,1,2,0,0,0,0,0,0,0,0,0,1],
        [1,0,1,1,1,1,1,1,1,1,1,1,1,1],
    ],
    [
      [1,0],
      [1,0,0],
      [1,0,0,4,0,1,1,1],
      [1,3,0,0,1],
      [1,1,0,0,1],      
      [1,0,4,4,4,0,1,0,0,1,0,0,1],
      [1,0],
      [1,0,0,0,0,0,4,0,0,4,4,4],
      [1,1,2,0,0,1,0,1],
      [1,0,1,1,0,0,0,0,0,1,4,4,4,4,4,4],
    ],
    [
        [1,1,1,1,1,1,1,1,1],
        [1,0,0,7,7,7,0,0,1],
        [1,0,1,5,5,5,1,0,1],
        [1,5,1,6,6,6,1,0,1],
        [1,0,1,6,6,6,1,0,1],
        [1,0,1,2,6,6,7,0,1],
        [1,5,1,1,1,1,1,1,1],
        [1,0,0,0,0,0,1],
        [1,1,1,0,3,0,1],
        [1,1,1,0,0,0,1],
        [1,1,1,1,1,1,1]
    ],
    [
      [1,0,0,0,0,0,0,0,0,0,4],
      [1,3,0,0,0,1,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
      [1,1,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,1,4,4],
      [1,1,0,0,1,0,1,4,0,1,0,0,0,0,4,4,1],
      [1,0,0,1,4,0,0,0,0,0,0,0,1,4,0,0,0,1,0,1,1,0,0,0,4],
      [0,0,0,0,1,0,0,1,1,0,0,1,0,0,0,0,0,1,0,0,0,1,0],
      [0,0,1,1,0,0,1,0,1,0,1],
      [1,0,0,0,0,0,0,0,0,4,0,0,0,4,4,4,0,4,4,1,1,1,1,1,0,0,1,0,0,2],
      [1,1,1,1,1,1,1,1,1,1],
    ],
    [
      [1,1,0,0,0,0,0,1,0,0,0,4,4,4,4,0,0,0,0,0,1,0,0],
      [1,3,0,0,4,0,0,1,0,0,0,1,4,4,4],
      [1,1,1,1,1,0,1,1,1,1,1,1,0,0,4],
      [1,4,0,0,0,0,0,0,4,0,0,0,0,0,4],
      [1,0,0,1,1,0,1,0,4,0,1,0,1,0,1],
      [1,0,0,1,0,0,1,0,0,0,1,4,1,0,1],
      [1,0,1,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,2],
      [1,0,0,0,1,0,1,0,0,0,0,0,0,0,1,1,0,0,0,1,0,1,1,1],
      [1,1,0,0,1,4,1,0,0,0,0,1,1,0,0,1,0,0,1,1],
      [1,1,1,0,0,0,0,0,0,0,1,1,1,0,0,0,0,1,1,1],
      [0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1],
      [0,0,0,0,0,0,0,1,1,1],
      [0,0,0,0,0,0,1,1,1,1],
      [0,0,0,0,1,1,1,1,1,1],
    ],
    [
      [1,-0,0,0,0,0,0,0,0],
      [1,3,0,0,4,0,0,1,0,0,0,0,4,0,0,0,0,0,0,0,4],
      [1,1,0,0,4,0,0,0,4,1,0,0,4,0,0,0,0,0,0,0,0,0,0,0,1,4,0,0,1,4],
      [1,0,0,0,4,1,0,0,0,1,1,0,4,0,0,0,0,0,1,1,0,1,0,0,0,0],
      [1,1,0,0,0,0,0,1,0,0,0,0,4,0,0,0,0,0,4,0,0,0,4,0,0],
      [1,0,0,1,0,0,1,4,1,0,0,1,4,1,0,0,0,1,0,0,0,0,0,4,0,4,0,0,0,4,0,2],
      [1,0,1,4,1,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,1,4,1,1,1,4,1,1],
      [1,0,0,0,0,1,1,1,0,0,1,0,0,0,0,1],
      [1,1,0,0,0,0,0,0,4,1,0,0,0,0,0,0,4],
    ],
    [
      [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1],
      [1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,1],
      [1,0,0,0,0,5,0,0,0,0,0,0,0,0,4,1,4,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1],
      [1,0,0,0,0,0,0,0,5,0,0,0,5,0,0,0,0,4,0,0,0,0,0,4,0,0,0,1,0,0,0,1,1],
      [0,0,0,1,1,4,5,5,4,4,4,4,4,0,0,4,0,0,5,0,0,0,0,4,0,0,0,1,0,0,0,0,1],
      [0,0,0,4,0,1,0,3,1,0,0,0,0,1,4,4,4,0,0,1,1,5,0,4,0,0,0,1,1,0,0,0,1,0,0,4],
      [1,0,0,4,0,5,1,1,0,0,0,0,0,0,1,4,1,1,0,0,1,4,1,1,1,0,0,5,0,0,0,1,1,0,0,4],        
      [1,0,5,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,4,5,0,0,0,1,1,1,1,1,0,0,1,2],
      [1,1,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1],
    ],
    [
      [1,0,0,0,0,1,0,1,0,1,0,1,0,0,0,1,4,4,4,4,4,2,0,0],
      [1,0,1,0,1,1,0,0,0,0,0,0,0,0,0,1,0,1,4,4,4,5,4,1,1,1,1,1,1],
      [1,0,0,0,0,1,0,0,0,0,0,0,0,5,0,1,0,1,4,4,4,5,4,1,0,0,4],
      [1,1,0,1,0,1,1,4,4,4,4,0,0,0,0,5,0,0,1,1,1,5,1,0,0,0,0,0],
      [1,0,0,0,0,1,1,0,0,0,0,0,0,5,0,5,0,0,5,5,5,5,1,0,0,0,0,0,0,0,5],
      [1,0,1,0,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,1,0,1,0],
      [1,0,0,0,0,1,1,0,0,0,5,0,0,5,0,0,0,0,0,0,0,0,0,0,5,5,5,5,5],
      [1,1,0,1,0,1,3,0,0,5,1,1,0,0,0,0,0,0,0,0,0,0],
      [1,0,0,0,0,1,5,1,1,1,1,1,1,5,1,0,1,0,1,0,1,0,1,0,1],
      [1,0,1,0,1,1,5,5,5,5,0,0,0,1,1,0,0,0,0,0,0,0,0],
      [1,0,0,0,0,1,1,1,1,1,5,1,1,1,0,5,0,5,0,5,0,5,0,5,0,5],
      [1,1,0,1,0,0,0,0,5,5,5,1,1,1,0,0,0,0,0,0,0,0,0,0],
      [1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,5,0,5,0,5,0,5,0,5],
      [1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0],
    ],
    [
      [1,0,0,4,4,4,4,0,0,0,0,0,0,0,0],
      [1,3,9,5,5,5,5,0,0,0,0,0,0],
      [1,1,1,4,4,4,0,0,m,0,0,7,1],
      [1,0,0,0,0,0,0,0,0,0,7,6,0,7],
      [7,0,0,0,0,m,0,0,0,4,1,1,1,0,2],
      [7,0,0,0,0,0,1,0,1,0,4,1,1,1,1],
      [1,0,0,4],
      [1,0,0,4,0,0],
      [1,1,1,0,5,0,0,0,0,0,0,0,0,1],
    ],
    [
        [],
        [],
        [],
        [],
        [],
        [0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2],
        [0,0,0,0,1,0,0,0,0,0,0,0,4,0,0,0,0,4,0,0,0,1,0],
        [3,0,0,9,1,6,0,0,0,0,0,1,1,0,0,4,0,1,0,0,1,1,0],
        [1,1,1,5,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    ],
    //Put your levels above this text.
    

    //Copy this to make you own levels and put it above the text.
   /* 
   [
      [1,2],
      [1,3],
      [1,0],
      [1,0],
      [1,0],
      [1,0],
      [1,0],
      [1,0],
      [1,1,1],
    ],
    */
    //create a blank slate for when your making levels
    [
      [1,2],
      [1,3],
    ]
];
//Everything else, NO editing.
{
levels.addElements = function()
{
    platforms.length = 0;
    powerUpplatforms.length = 0;
    badplatforms.length = 0;
    goodplatforms.length = 0;
    Jumpplatforms.length = 0;
    Goal.length = 0;
    Start.length = 0;
    Lava.length = 0;
     ChickenArray.length = 0;
     movingArray.length = 0;
    for(var y = 0; y < levels[level].length; y++)
    {
        for(var x = 0; x < levels[level][y].length; x++)
        {
            if(levels[level][y][x] === 1)
            {
            platforms.add(x * gridSize,y * gridSize, gridSize, gridSize, color(0, 174, 255));
            }
            if(levels[level][y][x] === 2)
            {
            Goal.add(x * gridSize,y * gridSize, gridSize, gridSize, color(0, 255, 55));
            }
            if(levels[level][y][x] === 3)
            {
        Start.add(x * gridSize+2,y * gridSize+2, gridSize-4, gridSize-4, color(67, 85, 247));
            }
            if(levels[level][y][x] === 4)
            {
                Lava.add(x * gridSize,y * gridSize, gridSize, gridSize, color(255, 0, 0));
            }
            if(levels[level][y][x] === 5)
            {
        Jumpplatforms.add(x * gridSize,y * gridSize, gridSize, gridSize, color(255, 125, 125));
            }
            if(levels[level][y][x] === 6)
            {
ChickenArray.add(x * gridSize,y * gridSize, gridSize, gridSize, color(7, 10, 5),
1,3);
            }
            if(levels[level][y][x] === 7)
            {
    goodplatforms.add(x * gridSize,y * gridSize, gridSize, gridSize, color(0, 0, 0,50));
            }
             if(levels[level][y][x] === 8)
            {
    badplatforms.add(x * gridSize,y * gridSize, gridSize, gridSize, color(255, 0, 17,80));
            }
             if(levels[level][y][x] === 9)
            {
    powerUpplatforms.add(x * gridSize,y * gridSize, gridSize, gridSize, color(232, 218, 219));
            }
           if(levels[level][y][x] === 10)
            {
movingArray.add(x * gridSize,y * gridSize, gridSize, gridSize, color(107, 69, 3),
1,3);
            }
        }
    }
    
};
var showNoMoreLevels = false;
var nextLevel = function()
{
    if(level < -2 + levels.length)
    {
        if(makingLevel === false)
        {
        level++;
        }
    }else{
        showNoMoreLevels = true;
    }
    levels.addElements();
    player.x = Start[0].x;
    player.y = Start[0].y;
};
//showNoMoreLevels = true;
var Scroll = function(StopLeft,StopRight)
{
    if(player.x < StopLeft)
    {
        for (var i = 0; i < platforms.length; i++) {
            platforms[i].x -= (player.xvel - 1)/1.5;
        } 
        for (var i = 0; i < powerUpplatforms.length; i++) {
            powerUpplatforms[i].x -= (player.xvel - 1)/1.5;
        } 
        for (var i = 0; i < badplatforms.length; i++) {
            badplatforms[i].x -= (player.xvel - 1)/1.5;
        } 
        for (var i = 0; i < goodplatforms.length; i++) {
            goodplatforms[i].x -= (player.xvel - 1)/1.5;
        } 
        for (var i = 0; i < Jumpplatforms.length; i++) {
            Jumpplatforms[i].x -= (player.xvel - 1)/1.5;
        } 
        for (var i = 0; i < Goal.length; i++) {
            Goal[i].x -= (player.xvel - 1)/1.5;
        } 
        for (var i = 0; i < Start.length; i++) {
            Start[i].x -= (player.xvel - 1)/1.5;
        } 
        for (var i = 0; i < Lava.length; i++) {
           Lava[i].x -= (player.xvel - 1)/1.5;
        } 
        for (var i = 0; i < ChickenArray.length; i++) {
           ChickenArray[i].x -= (player.xvel - 1)/1.5;
           ChickenArray[i].range1 -= (player.xvel - 1)/1.5;
           ChickenArray[i].range2 -= (player.xvel - 1)/1.5;
        } 
         for (var i = 0; i < movingArray.length; i++) {
           movingArray[i].x -= (player.xvel - 1)/1.5;
           movingArray[i].range1 -= (player.xvel - 1)/1.5;
           movingArray[i].range2 -= (player.xvel - 1)/1.5;
        } 
        player.x = StopLeft;
    }
    if(player.x > StopRight)
    {
        for (var i = 0; i < platforms.length; i++) {
            platforms[i].x -= (player.xvel + 1)/1.5;
        } 
        for (var i = 0; i < powerUpplatforms.length; i++) {
            powerUpplatforms[i].x -= (player.xvel + 1)/1.5;
        } 
         for (var i = 0; i < badplatforms.length; i++) {
            badplatforms[i].x -= (player.xvel + 1)/1.5;
        } 
        for (var i = 0; i < goodplatforms.length; i++) {
            goodplatforms[i].x -= (player.xvel + 1)/1.5;
        } 
        for (var i = 0; i < Jumpplatforms.length; i++) {
            Jumpplatforms[i].x -= (player.xvel + 1)/1.5;
        } 
        for (var i = 0; i < Goal.length; i++) {
            Goal[i].x -= (player.xvel + 1)/1.5;
        }
        for (var i = 0; i < Start.length; i++) {
            Start[i].x -= (player.xvel + 1)/1.5;
        } 
         for (var i = 0; i < Lava.length; i++) {
           Lava[i].x -= (player.xvel + 1)/1.5;
        } 
        for (var i = 0; i < ChickenArray.length; i++) {
           ChickenArray[i].x -= (player.xvel + 1)/1.5;
           ChickenArray[i].range1 -= (player.xvel + 1)/1.5;
           ChickenArray[i].range2 -= (player.xvel + 1)/1.5;
        } 
        for (var i = 0; i < movingArray.length; i++) {
           movingArray[i].x -= (player.xvel + 1)/1.5;
           movingArray[i].range1 -= (player.xvel + 1)/1.5;
           movingArray[i].range2 -= (player.xvel + 1)/1.5;
        }
        player.x = StopRight;
    }
};
var load = 0;
var loadtime = 17 + backgrd.ssqSize;
var resetGame = function()
{
    load = 0;
    level = 0;
    deaths = 0;
    falls = 0;
    player.savedPowerUps = 0;
    levels.addElements();
    player.x = Start[0].x;
    player.y = Start[0].y;
};
var playerUpdatedanger = false;
var timer = -millis(); 
var pause = function()
{
    fill(0,0,0,25);
    rect(30,0,400-60,400);
    pushMatrix();
    translate(150,125);
    scale(1.1,2);
    scale(1.7,1.7);
    fill(44, 18, 148);
    text("Paused",0,0);
    popMatrix();
    
};
var Fade = function(fadeTime,fadeSpeed,darkval) 
{
    this.fadeTime = fadeTime;
    this.fadeSpeed = fadeSpeed;
    this.darkval = darkval;
    this.fadeVal = 0;
    this.fadeVal2 = 0;
    this.fadeVal3 = 0;
};
Fade.prototype.rst = function(fadeTime1,fadeSpeed1,darkval1) 
{
   
    this.fadeTime = fadeTime1;
    this.fadeSpeed = fadeSpeed1;
    this.darkval = darkval1;
    this.fadeVal = 0;
    this.fadeVal2 = 0;
    this.fadeVal3 = 0;
};
Fade.prototype.draw = function() {
    this.fadeVal3 += this.fadeSpeed;
    if(this.fadeVal3 < this.fadeTime * 2)
    {
        if(this.fadeVal2 < 1)
        {
           this.fadeVal = this.fadeSpeed;
        }
        if(this.fadeVal2 > this.fadeTime)
        {
           this.fadeVal = -this.fadeSpeed;
        }
        this.fadeVal2 = this.fadeVal2 + this.fadeVal;
    }
    
    fill(0, 0, 0,this.fadeVal2 * this.darkval);
    rect(-10,-10,width + 11,height + 10);
};
var drawFade = false;
var myFade = new Fade(255,2.5,1);


var Game = function()
{ 
   
    drawBackground();
    if(makingLevel === true)
    {
        loadtime = 2;
    }
    if(load < loadtime)
    {
        if(makingLevel === false)
        {
        if(load > backgrd.ssqSize + 2 && load < backgrd.ssqSize + 4)
            {
               levels.addElements();
               player.x = Start[0].x;
               player.y = Start[0].y;
               //textSize(30);
               //text("2",100,100.5);
            }
            if(load < backgrd.ssqSize + 2)
            {
               backgrd.Create();
               //textSize(30);
               //text("1",150,170);
            }
            if(load > backgrd.ssqSize + 2 && load < backgrd.ssqSize + 4)
            {
               CloudsRange1.Create();
            }
            rawkills = kills;
        }else{
            levels.addElements();
            player.x = Start[0].x;
            player.y = Start[0].y;
            textSize(30);
            fill(0, 0, 0);
            text("2",150,170);
        }
         enemycount = (ChickenArray.length);
    }
    if(load < 60 * 5.5 && makingLevel === false)
    {
        textSize(20);
        fill(0, 0, 0);
        pushMatrix();
        translate(0,120);
        text("Press  'd'  to debug.",130,50);
        text("Press  's'  to see the time.",100,70);                              text("Press  'p'  to Pause.",120,90);
        text("Press  'i'  to Show usedpowerUps.",75,110);
        text("Press  'u'  to Use a saved powerUp.",75,130);
        fill(0, 0, 0,75);
        rect(60,25,300,120);
        popMatrix();
        fill(0, 0, 0,75);
        rect(140,77.5,120,60);
        pushMatrix();
        textSize(15);
        scale(2,3);
        fill(0, 0, 0);
        text("Loading",75,40.5);
        popMatrix();
        fill(0,0,0,shading);
        rect(80,0,250,70);
        textSize(20);
        textAlign(CENTER, CENTER);
        fill(8, 7, 8);
        pushMatrix();
        scale(1.3,1.2);
        scale(3,3);
        text("Escape",52.5,7);
        textAlign(LEFT, LEFT);
        popMatrix();
    }else{
        if(showNoMoreLevels === true)
        {
            fill(18, 18, 18);
            textSize(70);
            text("You Win",70,150); 
            textSize(20);
            if(key.toString() === "r" && keyIsPressed)
            {
                resetGame();
                showNoMoreLevels = false;
                timer = 0;
                kills = 0;
                deaths = 0;
                falls = 0;
                if(fading === true)
                {
                    drawFade = true;
                }
            }
        }else{
            timer += millis();
        }
        
        Lava.draw();
        Start.draw();
        player.draw();
        platforms.draw();
        powerUpplatforms.draw();
        badplatforms.draw();
        goodplatforms.draw();
        Jumpplatforms.draw();
        ChickenArray.draw();
        movingArray.draw();
        Goal.draw();
        if(Goal.colliding1())
        {
            player.x = Goal[0].x;
            player.y = Goal[0].y;
            Goal[0].color = color(255, 255, 255);
            if(myFade.fadeVal3 > myFade.fadeTime || fading === false)
            {
                nextLevel();
                player.x = Start[0].x;
                player.y = Start[0].y;
                player.xvel = 0;
                player.yvel = 0;
                rawkills = kills;
                enemycount = (ChickenArray.length);
            }
            if(fading === true)
            {
                drawFade = true;
            }
        }
        if(Jumpplatforms.colliding1())
        {
            player.yvel = -11;
        }
        if(powerUpplatforms.colliding())
        {
            if(player.life === 2 && player.savedPowerUps <= 5)
            {
               player.savedPowerUps++; 
            }
            player.life = 2;
        }


        
   
                
        if(Lava.colliding1() || player.y > 1000 || 
        ChickenArray.killcolliding1())
        {
            if(player.life === 2)
            {
                player.life = 1;
                if(Lava.colliding1()) 
                {
                    player.falling = false;
                    if(player.yvel > 0)
                    {
                            player.yvel = -10;
                    }else
                    if(player.yvel < 0)
                    {
                        player.yvel = 10;
                    }
                }
                if(player.xvel > 0)
                {
                        player.xvel = -120;
                }
                else if(player.xvel < 0)
                {
                        player.xvel = 120;
                   }
            }else
            if(player.life === 1)
            {
                if(fading === true)
                {
                    drawFade = true;
                }
                if(myFade.fadeVal3 > myFade.fadeTime || fading === false)
                {
                    if(player.y > 1000)
                    {
                        falls++;
                    }
                    levels.addElements();
                    player.x = Start[0].x;
                    player.y = Start[0].y;
                    player.life = 1;
                    kills = rawkills;
                    enemycount = (ChickenArray.length);
                    deaths++;
                }
            }
            if(player.y > 1000)
            {
                player.life = 1;
            }
        }else
        {
        Scroll(gridSize*2,400 - gridSize*4);
        }
        if(drawFade === false)
        {
         movingArray.update();
movingArray.update2([platforms,Lava,goodplatforms,player,ChickenArray]);

         player.update([platforms, badplatforms,movingArray]);
         
        ChickenArray.update();
        ChickenArray.update2([platforms,Lava,goodplatforms,movingArray]);
        }
         
        
        
        if(useSavedPower === true && player.life === 1 && 
        player.savedPowerUps > 0 && keyIsPressed)
        {
            player.savedPowerUps--; 
            player.life = 2;
        }
        if(showNoMoreLevels === true)
        {
            fill(0, 0, 0);
            text("NoMore Levels",140,50); 
            text("Press R to Play again",120,70); 
        }
       
        textSize(20);
        fill(0, 0, 0);
        if(showTime === false)
        {
            text("Level : "+(1+level),250,25);
        }else{
            text("Time : ",250,25);
            pushMatrix();
            translate(300,2);
            scale(1.5,1);
            text(round(timer/10000000),5,10,120,20);
            popMatrix();
        }
         text("Deaths : "+deaths,300,50);
        
        if(showNoMoreLevels === true)
        {
            if(showDebugMenu === false)
            {
                text("Enemy kills : " + kills,1,50);
            }
        }else{
            if(showDebugMenu === false)
            {
                text("Enemy kills : " + kills,20,50);
            }
        }
        if(showSavedPowerUps === true)
        {
            text("SavedPowers : " + player.savedPowerUps,150,50);
        }else{
            text("Falls : " + falls,220,50);
        }
        if(showDebugMenu === false)
        {
            text("Enemy count : " + enemycount,20,25);
        }
        /* DEBUG MENU */
        if(showDebugMenu === true)
        {
            textSize(15);
            fill(0, 0, 0);
            text('Player: ',16,20);
            text('X: '+player.x.toFixed(2),16,20*2);
            text('Y: '+player.y.toFixed(2),16,20*3);
            text('Velocity X: '+ player.xvel.toFixed(2),16,20*4);
            text('Velocity Y: '+ player.yvel.toFixed(2),16,20*5);
            text('is falling: '+ player.falling,16,20*6);
            text("Press  'd'  to Close",16,20*7);
            fill(0,0,0,shading);
            rect(0,60,135,150-60);
        }
        fill(0,0,0,shading);
        rect(0,0,400,60);
        textSize(20);
        textAlign(CENTER, CENTER);
        fill(8, 7, 8);
        pushMatrix();
        scale(1.3,1.2);
        scale(0.9,1.7);
        text("Escape",170,7);
        textAlign(LEFT, LEFT);
        popMatrix();
        
    }      
    
    fill(0,0,0,shading);
    rect(0,0,width,height);
};

var addpause = 0;
draw = function() {
    load++;
    if(load >= (60 * 5.5)-60*1.5 &&load <= (60 * 5.5)+60*1 )
    {
        drawFade = true;
    }
    if(ScreenSize === 5)
    {
        var Amt = 1.117;
        scale(Amt,Amt);
    }
    if(ScreenSize === 6)
    {
        var Amt = 1.224;
        scale(Amt,Amt);
    }
    if(stop === true)
    {
        
        if(load < 60*2)
        {
            stop = false;
        }
        if(addpause < 2.5)
        {
            addpause++;
            pause(); 
        }
    }
    if(stop === false )
    {
        addpause = 0;
        Game();
    }
    if(myFade.fadeVal3 > myFade.fadeTime * 2)
    {
        drawFade = false;
    }
    if(drawFade === true)
    {
        myFade.draw();
    }else{
        myFade.rst(255,2.5,1);
    }
    
};
}

/*if(Colliding(player.x,player.y,player.w,player.h,movingArray.x,movingArray.y,movingArray.w,movingArray.h))
        {
          /*levels.addElements();
            //    player.x = Start[0].x;
            //    player.y = Start[0].y;
            //    player.yvel = -20;
            //    deaths++;
               //  keys = false;
               if(player.xvel > 0)
                   {
                       player.xvel = -120;
                   }else if(player.xvel < 0)
                   {
                       player.xvel = 120;
                      
                   }
        }*/
/*  if(Colliding(player.x,player.y,player.w,player.h,platforms.x,platforms.y,platforms.w,platforms.h))
        {
         /*levels.addElements();
            //    player.x = Start[0].x;
            //    player.y = Start[0].y;
            //    player.yvel = -20;
            //    deaths++;
               //  keys = false;
               if(player.xvel > 0)
                   {
                       player.xvel = -120;
                   }else if(player.xvel < 0)
                   {
                       player.xvel = 120;
                      
                   }
        } */

    }
    if (typeof draw !== 'undefined') processing.draw = draw;
});
