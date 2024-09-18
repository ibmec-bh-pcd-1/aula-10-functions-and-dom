// Questão 1: Capture diferentes elementos do arquivo html por: id, classe, tag e seletor CSS.
const primeiraLi = document.getElementById("filho-um");
console.log(primeiraLi);

const todasLi = document.getElementsByClassName("exercicio");
console.log(todasLi);

const segundaLi = document.getElementsByClassName("exercicio")[1];
console.log(segundaLi);

const section = document.getElementsByTagName("section");
console.log(section)

const h3 = document.querySelector("#paragrafo-1");
console.log(h3)

const exercicio = document.querySelectorAll(".exercicio");
console.log(exercicio);


// Questão 2: Acesse o último filho da div "questão-2", percorrendo o DOM. 
// Confira o resultado no console.log.

// Questão 3: Na div "questao-1", há uma lista não ordenada com quatro items <li>. 
// Insira mais um elemento <li> via manipulação do DOM.

const pai = document.getElementById("pai");
const novoFilho = document.createElement("li");
novoFilho.innerHTML = "Eu sou o novo filho, injetado via JS"
// Pai recebe o novo filho
pai.appendChild(novoFilho);

// Questão 4: Por meio do método innerHTML, insira um novo parágrafo na div "questao-3".

// // a. Indicar quem é o elemento pai

const elementoPai = document.getElementById("questao-3")

// // b. Criar o elemento filho

const elementoFilho = document.createElement("p")

// // c. Adicionar um texto a esse novo filho

elementoFilho.innerHTML = "buccini chatao"

// // d. Relacionar pai e filho, nessa ordem

elementoPai.appendChild(elementoFilho)

/* Questão 5: A div "questao-4" contém um formulário. 
Crie uma função que receba um nome digitado no campo "Digite seu nome", 
gere uma saudação e mostre na página, no momento em que o botão "Clique aqui!" for acionado. */

function saudacao() {
    let nome = document.getElementById("nome").value;
    let paragrafo = document.getElementById("mensagem");
    paragrafo.innerHTML = `Olá, ${nome}! Só regresso...`;
}

const botao = document.getElementById("boasVindas");
botao.addEventListener("click", saudacao)
