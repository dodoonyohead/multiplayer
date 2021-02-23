var ball;
var database
function setup(){
    createCanvas(500,500);
    database=firebase.database()
    var databaseRef= database.ref("ball/position")
    databaseRef.on("value",readdata,errordata)
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    drawSprites();
}

function changePosition(x,y){
    var databaseRef= database.ref("ball/position")
    databaseRef.set({
        x:ball.x+x,
        y:ball.y+y
    })
    
}
function readdata(data){
var Position=data.val()
ball.x=Position.x
ball.y=Position.y
}
function errordata(){
    console.error("error in reading data")
}