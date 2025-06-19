
let listaNumerosSelecionadas = [];
let quantidadeDeChutes = 100;
let numeroSecreto = gerarNumero();
let tentativas = 1;

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag, texto);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, "Brazilian Portuguese Female",
    {rate:1.2})
}

function mensagemInicial() {
    exibirTextoNaTela("h1", "Jogo do Número Secreto");
    exibirTextoNaTela("p", "Escolha um número de 1 a 100!");
}
mensagemInicial();
function verificarChute() {
    let chute = document.querySelector("input").value;

    if (chute == numeroSecreto){
        exibirTextoNaTela("h1", "Acertou!!");
        let palavraTentativas = tentativas > 1 ? " tentativas!" : " tentativa!";
        let mensagemTentativas = ("Você acertou o número secreto com " + tentativas + palavraTentativas);
        exibirTextoNaTela("p", mensagemTentativas);
         document.getElementById("reiniciar").removeAttribute("disabled");

    } else {
        if (chute > numeroSecreto){
        exibirTextoNaTela("h1", "Você errou!");
        exibirTextoNaTela("p", "O número secreto é menor que o chute!");
        } else {
        exibirTextoNaTela("h1", "Você errou!");
        exibirTextoNaTela("p", "O número secreto é maior que o chute!");
        }
        tentativas++;
            limparChute();  
        }
    }
    
    function gerarNumero(){
        
        let numerosEscolhidos = parseInt(Math.random() * quantidadeDeChutes + 1);
        let quantidadeDeElemetos = listaNumerosSelecionadas.length
        if (quantidadeDeElemetos == quantidadeDeChutes){
            listaNumerosSelecionadas = []
        }
        
       
        if (listaNumerosSelecionadas.includes(numerosEscolhidos)){
            return gerarNumero();
        } else {
        listaNumerosSelecionadas.push(numerosEscolhidos);
            return numerosEscolhidos;
        }
    }

    function limparChute() {
        chute = document.querySelector("input");
        chute.value = "";
    }

    function reiniciarJogo(){
        numeroSecreto = gerarNumero();
        limparChute();
        tentativas = 1;
    mensagemInicial();
    document.getElementById("reiniciar").setAttribute("disabled", 
        false)
    }

