let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let box = 32;
let cobrinha = [];
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

criarBG();
criaCobrinha();