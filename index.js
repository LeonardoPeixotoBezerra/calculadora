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

}