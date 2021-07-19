let canvas = document.getElementById('canvasElement');
let context = canvas.getContext('2d');

let x = canvas.width / 2;
let y = canvas.height / 2;
let dx = 1;
let dy = -1;
let radius = 10;
let color = "#0095DD";
let paddleHeight = 10;
let paddleWidth = 75;
let paddleX = (canvas.width - paddleWidth) / 2;
let paddleY = (canvas.height - paddleHeight);

let interval = setInterval(draw, 10);

document.addEventListener('mousemove', (event) =>{
    paddleX = event.clientX - paddleWidth;
    if(paddleX + paddleWidth > canvas.width)
        paddleX = canvas.width - paddleWidth;
    else if(paddleX < 0)
        paddleX = 0;
})


function drawPaddle(){
    context.beginPath();
    context.rect(paddleX, paddleY, paddleWidth, paddleHeight);
    context.fillStyle = "#0095DD";
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
    
    if(x - radius + dx < 0 || x + radius + dx >= canvas.width)
        dx = -dx;
    if(y - radius + dy < 0)
        dy = -dy;
    else if(y + radius + dy >= canvas.height)
    {
        if(x > paddleX && x < paddleX + paddleWidth)
            dy = -dy;
        else{
            alert('Game over.');
            document.location.reload();
            clearInterval(interval);
        }
    }
    
    x += dx;
    y += dy;
}

