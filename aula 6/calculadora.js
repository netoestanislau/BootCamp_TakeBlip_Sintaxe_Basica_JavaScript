function calculadora(){
    const operacao = Number(prompt('Escolha uma opção:\n 1- Soma(+)\n 2- Subtração(-)\n 3- Mutoplicação(*)\n 4- Divisão(/)\n 5- Divisão inteira(%)\n 6- Potenciação(**)'));
    console.log(operacao);
}

let n1 = Number(prompt('Insira o primeiro valor'));
let n2 = Number(prompt('Insira o Segundo valor'));
let resultado;

function soma(){
    resultado = n1 + n2;
    alert(`${n1} + ${n2} = ${resultado}`);
}

if(operacao == 1){
    soma();
}else if (operacao == 2){
    subtracao();
}else if(operacao == 3){
    multiplicacao();
}else if(operacao == 4){
    divisão();
}else if(operacao == 5){
    divisãoInteira();
}else if(operacao == 6){
    potenciacao();
}

calculadora();