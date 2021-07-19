let scoreboard = document.getElementById('scoreboard');
let lifeboard = document.getElementById('lifeRemaining');
let canvas = document.getElementById('canvasElement');
let context = canvas.getContext('2d');

let x = canvas.width / 2;
let y = canvas.height - 50;
let dx = 2;
let dy = -2;
let radius = 10;

let color = "#0095DD";
let score = 0;
let lives = 3;

let paddleHeight = 10;
let paddleWidth = 75;
let paddleX = (canvas.width - paddleWidth) / 2;
let paddleY = (canvas.height - paddleHeight);

let brickRowCount = 3;
let brickColumnCount = 5;
let brickWidth = 75;
let brickHeight = 20;
let brickPadding = 10;
let brickOffsetTop = 30;
let brickOffsetLeft = 30;

let bricks = [];
for(let r=0;r<brickRowCount;r++){
    bricks[r] = [];
    for(let c=0;c<brickColumnCount;c++){
        bricks[r][c] = {x:0, y:0, visible:1};
    }
}

document.addEventListener('mousemove', (event) =>{
    relativeX = event.clientX - canvas.offsetLeft;
    if(relativeX > 0 && relativeX < canvas.width)
        paddleX = relativeX - paddleWidth / 2;
})

function drawBricks(){
    for(let r=0;r<brickRowCount;r++){
        for(let c=0;c<brickColumnCount;c++){
            if(bricks[r][c].visible == 1){
                let brickX = brickOffsetLeft + c * (brickWidth + brickPadding);
                let brickY = brickOffsetTop + r * (brickHeight + brickPadding);
                bricks[r][c].x = brickX;
                bricks[r][c].y = brickY;
                context.beginPath();
                context.rect(brickX, brickY, brickWidth, brickHeight);
                context.fillStyle = color;
                context.fill();
                context.closePath();
            }
        }
    }
}

function drawPaddle(){
    context.beginPath();
    context.rect(paddleX, paddleY, paddleWidth, paddleHeight);
    context.fillStyle = color;
    context.fill();
    context.closePath();
}

function drawBall(){
    context.beginPath();
    context.arc(x,y,radius,0,Math.PI*2);
    context.fillStyle = color;
    context.fill();
    context.closePath();
}

function setRandomColor(){
    let rNew = Math.floor(256 * Math.random());
    let gNew = Math.floor(256 * Math.random());
    let bNew = Math.floor(256 * Math.random());
    let newColor = "rgb(" + rNew + "," + gNew + "," + bNew + ")";
    color = newColor;
}

function draw() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();
    drawPaddle();
    drawBricks();
    
    //Left or right
    if(x - radius + dx < 0 || x + radius + dx >= canvas.width)
        dx = -dx;
    else if(y - radius + dy < 0) //Top
        dy = -dy;
    else if(y + radius + dy >= canvas.height) { //Bottom
        if(x > paddleX && x < paddleX + paddleWidth)
            dy = -dy;
        else{
            lives--;
            lifeboard.innerHTML = "Lives: " + lives;
            if(lives == 0){
                alert('Game over.');
                document.location.reload();
            }
            else{
                
                dx = 2;
                dy = -2;
                x = canvas.width / 2;
                y = canvas.height - 50;
            }
        }
    }
    else{ //Bricks collision
        for(let r=0;r<brickRowCount;r++){
            for(let c=0;c<brickColumnCount;c++){
                let b = bricks[r][c];
                if(b.visible == 1 && x > b.x && x < b.x + brickWidth && y > b.y && y < b.y + brickHeight){
                    dy = -dy;
                    b.visible = 0;
                    score++;
                    scoreboard.innerHTML = "Score: " + score;
                    
                    if(score == brickRowCount * brickColumnCount){
                        let prompt = confirm("Congratulations! Play again?");
                        if(prompt)
                            window.location.reload();
                    }
                }
            }
        }
    }
    
    x += dx;
    y += dy;
    requestAnimationFrame(draw);
}

draw();