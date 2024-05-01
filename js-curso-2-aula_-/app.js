let listaDeNumerosSorteados = [];
let numeroLimite = 100;
let numeroSecreto = geradorDeNumeroAleatorio();
let tentativas = 1;
//let Titulo = document.querySelector('h1');
//Titulo.innerHTML = 'Jogo do numero secreto';

//let Paragrafo = document.querySelector('p');
//Paragrafo.innerHTML = 'Chute um numero de 0 a 100'


function exibirTextoNaTela(Tag, Texto){
    let campo = document.querySelector(Tag);
    campo.innerHTML = Texto;
}
function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do Numero Secreto');
    exibirTextoNaTela('p', `Chute um numero de 0 a ${numeroLimite}`);
    document.getElementById('reiniciar').setAttribute('disabled', 'disabled');

}

exibirMensagemInicial();

function verificarChute(){
    let chute = parseInt(document.querySelector('input').value);
    console.log(chute === numeroSecreto);

    if (chute === numeroSecreto) {
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Isso mesmo o numero secreto era ${numeroSecreto} com apenas ${tentativas} ${palavraTentativa}`;
        document.getElementById('reiniciar').removeAttribute('disabled')

        exibirTextoNaTela('h1', 'Parabéns você acertou o número secreto');
        exibirTextoNaTela('p', mensagemTentativas);

    } else if (chute < numeroSecreto) {
        exibirTextoNaTela('h1', 'Que pena você errou');
        exibirTextoNaTela('p', 'tente um numero maior na proxima vez ;)'); 
    }else if (chute > numeroSecreto) {
        exibirTextoNaTela('h1', 'Que pena você errou');
        exibirTextoNaTela('p', 'tente um numero menor na proxima vez ;)');
    }
    tentativas++;
    limparCampo();

}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function geradorDeNumeroAleatorio() {
    let quantidadeDeNumerosSorteadosNaLista = listaDeNumerosSorteados.length;
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);

    if (quantidadeDeNumerosSorteadosNaLista == numeroLimite) {
        listaDeNumerosSorteados = [];
    }

    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return geradorDeNumeroAleatorio();
    }else {
        listaDeNumerosSorteados.push(numeroEscolhido)
        console.log(listaDeNumerosSorteados)
        return numeroEscolhido
    }
    
}

function reiniciarJogo() {
    console.log('botão de novo jogo clicado')
    numeroSecreto = geradorDeNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
}