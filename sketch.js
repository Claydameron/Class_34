var database,ball,position;

function setup(){
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";

   database = firebase.database();

   var locOfChild = database.ref("Ball/Positions");
   locOfChild.on("value", readOperation,showError);
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+1);
    }
    drawSprites();
}



function readOperation(data) {
    position = data.val();
    ball.x = position.x;
    ball.y = position.y;
}

function writePosition(x,y){
    console.log(writePosition);
    //ar locOfChild1 = database.ref("Ball/Positions");
    database.ref("Ball/Positions").set({x: ball.x + x, y: ball.y + y });
}

function showError() {
    console.log("ERROR!");
}

