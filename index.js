let resultado = document.getElementById('resultado');

let valor_salvo = null;
let operador_salvo = null;

let bntNumeros = document.getElementsByClassName('botao');

for (let botao of bntNumeros) {
    botao.addEventListener('click', clica_numero);
}
function clica_numero(event) {
    if (isNaN(resultado.innerHTML)) {
        resultado.innerHTML = resultado.innerHTML + event.target.innerHTML;
    } else {
        resultado.innerHTML = event.target.innerHTML;
    }
}

let bntOperadores = document.getElementsByClassName('botao-operador');
for (let botao of bntOperadores) {
    botao.addEventListener('click', clica_operador);
}

function clica_operador(event) {
    if (isNaN(resultado.innerHTML) === false) {
        if (valor_salvo === null) {
            valor_salvo = Number(resultado.innerHTML);
        } else {
            valor_salvo = executa_operacao(valor_salvo, operador_salvo, Number(resultado.innerHTML));
        }

    }

    operador_salvo = event.target.innerHTML;
    resultado.innerHTML = event.target.innerHTML;
}

let botaoC = document.getElementById('botaoC');
botaoC.addEventListener("click", limpa_resultado);
function limpa_resultado(event) {
    resultado.innerHTML = "";
    valor_salvo = null;
    operador_salvo = null;
}

let botaoIgual = document.getElementById('botaoIgual');
botaoIgual.addEventListener("click", calcula_resultado);

function calcula_resultado(event) {
    if (valor_salvo != null && operador_salvo != null && isNaN(resultado.innerHTML) === false) {

        resultado.innerHTML = executa_operacao(valor_salvo, operador_salvo, Number(visor.innerHTML));

        valor_salvo = null;
        operador_salvo = null;
    }
}

function executa_operacao(valor1, operador, valor2) {
    if (operador === '+') {
        return valor1 + valor2;
    }else if(operador === "-"){
        return valor1 - valor2;
    }else if(operador === '*'){
        return valor1 * valor2;
    }else if(operador === '/'){
        return valor1 / valor2;
    }
}

let body = document.getElementsByTagName('body')[0];

body.addEventListener('keydown', pressionou_tecla);

function pressionou_tecla(event){
    if (event.key === "*"){
        document.getElementById('botao-multiplicacao');
    }else if(event.key === "+"){
        document.getElementById('botao-adicao');
    }else if (event.key === "-"){
        document.getElementById('botao-subtracao');
    }else if (event.key === "/"){
        document.getElementById('botao-divisao');
    }else if (event.key === "0"){
        document.getElementById('botao-0');
    }else if (event.key === "1"){
        document.getElementById('botao-1');
    }else if (event.key === "2"){
        document.getElementById('botao-2');
    }else if (event.key === "3"){
        document.getElementById('botao-3');
    }else if (event.key === "4"){
        document.getElementById('botao-4');
    }else if (event.key === "5"){
        document.getElementById('botao-5');
    }else if (event.key === "6"){
        document.getElementById('botao-6');
    }else if (event.key === "7"){
        document.getElementById('botao-7');
    }else if (event.key === "8"){
        document.getElementById('botao-8');
    }else if (event.key === "9"){
        document.getElementById('botao-9');
    }
}