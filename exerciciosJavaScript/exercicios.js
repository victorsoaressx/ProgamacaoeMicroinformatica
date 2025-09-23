// Exercicio 1 
// Declarando as variáveis

let meuNome = "Victor Gabriel";
let minhaIdade = 23;
let jaAlmocei = true;

// Exibindo o tipo de cada variável no console
console.log(typeof meuNome);
console.log(typeof minhaIdade);
console.log(typeof jaAlmocei);



// Exercicio 2
// Variáveis numéricas

let num1 = 20;
let num2 = 5;

// Calculando e exibindo a soma
console.log("Soma:", num1 + num2);

// Calculando e exibindo a subtração
console.log("Subtração:", num1 - num2);

// Calculando e exibindo a multiplicação
console.log("Multiplicação:", num1 * num2);

// Calculando e exibindo a divisão
console.log("Divisão:", num1 / num2);



// Exercicio 3
// Concatenação e interpolação

let minhaCidade = "Carapicuiba"
let meuEstado = "São Paulo"

// Concatenação com o operador +
let fraseConcatenada = "Eu moro em " + minhaCidade + ", " + meuEstado + ".";
console.log(fraseConcatenada);

// Interpolação de strings 
let fraseInterpolada = `Eu moro em ${minhaCidade}, ${meuEstado}.`;
console.log(fraseInterpolada);



//Exercicios 4 
// Verirficação de idade para habilitação

let idade = prompt("Qual a sua idade?");

// Converte a entrada do prompt (string) para um número
idade = parseInt(idade);

if (idade >= 18) {
    alert("Você pode tirar CNH!");
} else {
    let anosRestantes = 18 - idade;
    alert("Faltam " + anosRestantes + " anos para você poder tirar CNH.");
}



// Exercicio 6

let numer = 25
let numertxt = "25"

// Comparação com o operador (==)
console.log(numer == numertxt);

// Comparação com o operador (===)
console.log(numer === numertxt);

/* Explicação:
   - O operador '==' (igualdade) compara apenas o valor. Por isso, ele retorna 'true', pois o valor numérico 25 é considerado igual ao valor da string "25".

   - O operador '===' (igualdade estrita) compara tanto o valor quanto o tipo de dado. Como a primeira variável é um 'number' e a segunda é uma 'string', os tipos são diferentes, e o operador retorna 'false'.
*/



// Exercicio 10
// Minicalculadora

let primeiroNum = prompt("Digite um numero");
let segundoNum = prompt("Digite outro numero");
let operacao = prompt("Escolha a operação que voce deseja realizar: +, -, *, /")


if(operacao == "+"){
    let conta = primeiroNum + segundoNum;
    alert("O resultado é:" + conta);
}
else if (operacao == "-"){
    let conta2 = primeiroNum - segundoNum;
    alert("O resultado é:" + conta2);
}
else if (operacao == "*"){
    let conta3 = primeiroNum * segundoNum;
    alert("O resultado é:" + conta3);
}
else{
    let conta4 = primeiroNum / segundoNum;
    alert("O resuldado é:" + conta4);
}



