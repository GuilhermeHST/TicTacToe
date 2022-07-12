function reiniciar(){
    location.reload()
    /*for (let i = 0; i < botoes.length; i++) {
        botoes[i].innerText = "";
    }*/
}

function atualizaStatus(){
    let status = document.getElementById("status")
    status.innerText = vez + " GANHOU !!!"
}

function verificaVitoriaHorizontal(){
    if(
        botoes[0].innerText == vez && 
        botoes[1].innerText == vez && 
        botoes[2].innerText == vez
        ){
        return true
    } else if (
        botoes[3].innerText == vez && 
        botoes[4].innerText == vez && 
        botoes[5].innerText == vez
        ){
        return true
    }else if(
        botoes[6].innerText == vez && 
        botoes[7].innerText == vez && 
        botoes[8].innerText == vez
        ){
        return true
    }
}

function verificaVitoriaVertical(){
    if(
        botoes[0].innerText == vez && 
        botoes[3].innerText == vez && 
        botoes[6].innerText == vez
        ){
        return true;
    } else if (
        botoes[1].innerText == vez && 
        botoes[4].innerText == vez && 
        botoes[7].innerText == vez
        ){
        return true
    }else if(
        botoes[2].innerText == vez && 
        botoes[5].innerText == vez && 
        botoes[8].innerText == vez
        ){
        return true
    }
}

function verificaVitoriaDiagonal(){
    if(
        botoes[0].innerText == vez && 
        botoes[4].innerText == vez && 
        botoes[8].innerText == vez
        ){
        return true
    } else if (
        botoes[2].innerText == vez && 
        botoes[4].innerText == vez && 
        botoes[6].innerText == vez
        ){
        return true
    }else if(
        botoes[6].innerText == vez && 
        botoes[7].innerText == vez && 
        botoes[8].innerText == vez
        ){
        return true
    }
}

function verificarDeuVelha(){
    let deuVelha = true;
    for(let i = 0; i<botoes.length; ++i){
        if(botoes[i].innerText == ""){
            deuVelha = false;
        }
    }
    return deuVelha
}

function verificarVitoria(){
    //horizontal
    let vitoriaH = verificaVitoriaHorizontal()
    let vitoriaV = verificaVitoriaVertical()
    let vitoriaD = verificaVitoriaDiagonal()

    if(vitoriaH == true || vitoriaV == true || vitoriaD == true){
        return true
    }else{
        let velha = verificarDeuVelha()
        if(velha == true){
            atualizaStatus("deu velha")
        }
    }
}


function trocarVez(){
    if(vez == "X"){
        vez = "O"
    } else if(vez == "O"){
        vez = "X"
    }
}

function gerarVetor(){
    for(let i = 0; i<9; ++i ){
        let botaoElemento = document.getElementById(i);
        botoes.push(botaoElemento);
    }
}

function botao(numeroDoBotao){
    if(botoes[numeroDoBotao].innerText == ""){
        botoes[numeroDoBotao].innerText = vez;
        let resultado = verificarVitoria()
        if(resultado==true){
            atualizaStatus()
        }
    }
    trocarVez()

}



var botoes = [];
gerarVetor();

var vez = "X";

console.log(botoes);