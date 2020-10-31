let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let box = 32;
let cobrinha = [];

// variaveis de direçoes do jogo

let direction = "right";

cobrinha[0]={
    x: 8 * box,
    y: 8 * box
}

function criarBG(){
    context.fillStyle = "lightgreen"
    context.fillRect(0, 0, 16 * box, 16 * box);
}

function criaCobrinha(){
    for(i=0; i < cobrinha.length; i++){
        context.fillStyle = "#ff7f50";
        context.fillRect(cobrinha[i].x, cobrinha[i].y, box, box);
    }
}

function startGame(){
    criarBG();
    criaCobrinha();
    
    let cobrinhaX = cobrinha[0].x;
    let cobrinhaY = cobrinha[0].y;

    if(direction == "right") cobrinhaX += box;
    if(direction == "left") cobrinhaX -= box;
    if(direction == "up") cobrinhaY -= box;
    if(direction == "down") cobrinhaY += box;

    cobrinha.pop();
    let newHead={
        x: cobrinhaX,
        y: cobrinhaY
    }

    cobrinha.unshift(newHead);
}

let game = setInterval(startGame,100);
