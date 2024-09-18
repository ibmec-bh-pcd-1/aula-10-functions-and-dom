# [PCD1][Aula 11] Document Object Model (DOM)

### Conteúdos
 - <a href="https://github.com/ibmec-bh-pcd-1/aula-10-dom-js/blob/main/README.md#introdução">Introdução</a>
 - <a href="https://github.com/ibmec-bh-pcd-1/aula-10-dom-js/blob/main/README.md#acessando-elementos">Acessando elementos</a>
 - <a href="https://github.com/ibmec-bh-pcd-1/aula-10-dom-js/blob/main/README.md#métodos-que-selecionam-elementos-individuais">Métodos que selecionam elementos individuais</a>
 - <a href="https://github.com/ibmec-bh-pcd-1/aula-10-dom-js/blob/main/README.md#nodelists-consultas-dom-que-retornam-mais-de-um-elemento">NodeLists: _Consultas DOM que retornam mais de um elemento_</a>
- <a href="https://github.com/ibmec-bh-pcd-1/aula-10-dom-js/blob/main/README.md#percorrendo-o-dom">Percorrendo o DOM</a>
- <a href="https://github.com/ibmec-bh-pcd-1/aula-10-dom-js/blob/main/README.md#adicionando-elementos">Adicionando elementos</a>

## Introdução

O Document Object Model (DOM) especifica como os navegadores devem criar um modelo de página HTML e como o JavaScript pode acessar e atualizar o conteúdo de uma página web enquanto ela está na janela do navegador.

O DOM não é parte do HTML e nem é parte do JavaScript; é um conjunto distinto de regras. Ele é implementado por todos os principais fabricantes de navegadores, e abrange duas áreas principais:

### Criação de um modelo da página HTML

Ao carregar uma página web, o navegador cria um modelo da página na memória.
O DOM especifica a maneira como o navegador deve estruturar esse modelo usando uma **árvore DOM**.
O DOM é chamado *modelo de objeto* porque o modelo (a árvore DOM) é feito de objetos.
Cada objeto representa uma parte diferente da página carregada na janela do navegador.

### Acesso e alteração da página HTML

O DOM também define métodos e propriedades para acessar e atualizar cada objeto nesse modelo o que, por sua vez, atualiza aquilo que o usuário vê no navegador.

### A árvore DOM é o modelo de uma página web

Considere os exemplos de código e de árvore DOM demonstrados a seguir, para maior entendimento. Observe que a árvore DOM está representando, especificamente, o código à esquerda.

<img src="https://github.com/tamaratryber/functions-and-dom/blob/main/code.png" width="500px" height="333px"> <img src="https://github.com/tamaratryber/functions-and-dom/blob/main/arvore-dom.png" width="500px">

À medida que um navegador carrega uma página web, ele cria um modelo dessa página. O modelo é chamado árvore DOM, e é armazenado na memória dos navegadores. Consiste em quatro tipos principais de nós:

 Nó Document  | Nós de Elemento   | Nós de atributo | Nós de texto
 ------------ | ----------------- | --------------- | ------------
Acima, você pode ver o código HTML para uma lista de compras, e logo após está a **árvore DOM**. Cada elemento, atributo e fragmento de texto na HTML é represemtado por um **nó DOM** próprio. No topo da árvore, está o **nó document**; ele representa toda a página. Ao acessar qualquer elemento, atributo ou nó do texto, você pode navegar por ele via _nó document_. Ele é o ponto de partida para todas as visitas à árvore DOM. | Elementos HTML descrevem a estrutura de uma página HTML. Exemplo: os elementos **h1** a **h6** descrevem quais partes são títulos; as tags **p** indicam onde parágrafos de texto começam e terminam, etc. Para acessar a árvore DOM, você começa procurando os elementos. Depois de encontrar o elemento desejado, você pode acessar os nós de texto e de atributo que quiser. É por isso que você começa aprendendo métodos que permitem acessar nós de elemento, antes de aprender a acessar e alterar o texto ou atributos. | As tags de abertura dos elementos HTML podem conter atributos e esses são representados por nós de atributo na árvore DOM. Nós de atributo não são filhos do elemento que os contém; são parte desse elemento. Depois de acessar um elemento, há métodos e propriedades JavaScript específicos para ler ou modificar os atributos desse elemento. Por exemplo, é comum alterar os valores dos atributos _class_ para disparar novas regras CSS que afetam sua apresentação. | Depois de ter acessado um nó de elemento, você pode então buscar o texto dentro desse elemento. Isso é armazenado em nó de texto próprio. Nós de texto não podem ter filhos. Se um elemento contiver texto e outro elemento filho, o elemento filho não é um filho do nó de texto, mas sim, apenas um filho do elemento que o contém. _Exemplo: Veja na imagem acima que o elemento **em** está no primeiro item **li**. Isso ilustra como o nó de texto sempre é um novo ramo da árvore DOM, mas nenhum outro ramo sai dele._

## Acessando elementos


- **getElementById('id'):** Seleciona um elemento individual dado o valor de seu atributo _id_. A HTML deve ter um atributo id para que ela possa ser selecionável dessa forma.


- **querySelector('seletor css'):** Usa a sintaxe do seletor CSS que selecionaria um ou mais elementos. Esse método só retorna _o primeiro_ dos elementos correspondentes.


- **getElementsByClassName('classe'):** Seleciona um ou mais elementos dado o valor de seu atributo _class_. A HTML deve ter um atributo class para que ela seja selecionável. Esse método é mais rápido do que _querySelectorAll_.


- **getElementsByTagName('nome da tag'):** Seleciona todos os elementos na página com o nome de tag especificado. Esse método é mais rápido do que _querySelectorAll_.


- **querySelectorAll('seletor css'):** Usa a sintaxe do seletor CSS para selecionar um ou mais elementos e retorna todos aqueles que correspondem. 

## Métodos que selecionam elementos individuais

Veja o exemplo:

<img src="https://github.com/tamaratryber/functions-and-dom/blob/main/dom.png" width="700px">

## NodeLists: _Consultas DOM que retornam mais de um elemento_

Quando um método DOM pode retornar mais de um elemento, ele retorna uma NodeList (mesmo se encontrar somente um elemento que corresponde.

Um NodeList é uma coleção de nós de elemento. Cada nó recebe um número de índice (um número que começa em zero, como um array).
A ordem em que os nós de elemento são armazenados em uma NodeList é a mesma ordem que apareceu na página HTML.

Quando uma consulta DOM retorna uma NodeList, talvez você queira:
- Selecionar um elemento a partir do NodeList.
- Fazer um loop em cada item do NodeList e executar as mesmas instruções em cada um dos nós de elemento.

NodeLists se parecem com arrays e são numerados como arrays, mas na verdade não são arrays; são um tipo de objeto chamado *coleção*.

Como qualquer outro objeto, uma NodeList tem propriedades e métodos, nomeadamente:

- A propriedade **lenght** informa quandos itens estão no NodeList.
- O método **item()** retorna um nó específico do NodeList quando você informa o número de índice do item que você quer (entre parênteses). Mas é mais comum usar a sintaxe de array (com colchetes) para recuperar o item de uma NodeList.

<img src="https://github.com/tamaratryber/functions-and-dom/blob/main/nodelists.png" width="700px">

_Aqui você pode ver quatro diferentes consultas DOM que retornam uma NodeList. Para cada consulta, você pode ver os elementos e seus números de índice no NodeList que é retornado._

#### - getElementsByTagName('h1'):
Embora essa consulta retorne um único elemento, o método ainda retorna uma NodeList por causa do potencial de retornar mais de um elemento.

| Número de Índice | Elemento |
|---|---|
| 0 | `<h1>`| 

#### - getElementsByTagName('li'):
Esse método retorna quatro elementos, um para cada um dos elementos `<li>` na página. Eles aparecem na mesma ordem em que são exibidos na página HTML.

| Número de Índice | Elemento |
|---|---|
| 0 | `<li id="one" class="hot">`| 
| 1 | `<li id="two" class="hot">`| 
| 2 | `<li id="three" class="hot">`| 
| 3 | `<li id="four">`| 
 
#### - getElementsByClassName('hot'):
Essa NodeList contém apenas três dos elementos `<li>` porque estamos procurando elementos pelo valor de seu atributo _class_, e não pelo nome de tag.

| Número de Índice | Elemento |
|---|---|
| 0 | `<li id="one" class="hot">`| 
| 1 | `<li id="two" class="hot">`| 
| 2 | `<li id="three" class="hot">`| 

#### - querySelectorAll('li[id]'):
Esse método retorna quatro elementos, um para cada um dos elementos `<li>` da página que tem um atributo _id_ (independentemente dos valores dos atributos id).

| Número de Índice | Elemento |
|---|---|
| 0 | `<li id="one" class="hot">`| 
| 1 | `<li id="two" class="hot">`| 
| 2 | `<li id="three" class="hot">`| 
| 3 | `<li id="four">`| 

## Percorrendo o DOM

Quando você tem um nó de elemento, você pode selecionar outro elemento em relação a ele usando estas cinco propriedades. Isso é conhecido como _percorrer_ ou navegar pelo DOM.

<img src="https://github.com/tamaratryber/functions-and-dom/blob/main/percorrendo-dom.png" width="700px">

- **parentNode**

Essa propriedade encontra o nó do elemento pai na HTML.
**(1)** Se você começou com o primeiro elemento `<li>`, então o nó pai seria o único representando o elemento `<ul>`.

- **previousSibling** e **nextSibling**

Essas propriedades encontram o irmão anterior ou posterior, _respectivamente_, de um nó se houver irmãos.
Se você começou com o primeiro elemento `<li>`, ele não teria um irmão anterior. Mas seu irmão posterior **(2)** seria o nó representando o segundo `<li>`.

- **firstChild _ou_ firstElementChild** e **lastChild _ou_ lastElementChild**

Essas propriedades encontram o primeiro ou o último filho do elemento atual.
Se você começou com o elemento `<ul>`, o primeiro filho seria o nó representando o primeiro elemento `<li>` e **(3)** o último filho seria o último `<li>`.

## Adicionando elementos

O DOM fornece técnicas diferentes para adicionar novo conteúdo a uma página HTML. Abaixo, estão as mais usadas:

### Manipulação DOM

Uma dessas técnicas é conhecida pela documentação como **Manipulação DOM** e envolve três passos:

| 1. CRIE O ELEMENTO  | 2. INSIRA CONTEÚDO   | 3. ADICIONE-O AO DOM |
| --- | ---| --- |
| <center>**createElement()**</center> | <center>**createTextNode()**</center> | <center>**appendChild()**</center> | 
| Você começa criando um novo nó de elemento usando o método `createElement()`. Esse nó de elemento é armazenado em uma variável.<br><br>Quando o nó de elemento é criado, ele ainda não faz parte da árvore DOM. Ele só é adicionado à árvore DOM depois do passo 3. | `createTextNode()` cria um novo nó de texto. Mais uma vez, o nó é armazenado em uma variável. Ele pode ser adicionado ao nó de elemento usando o método `appendChild()`.<br><br>Isso fornece o conteúdo para o elemento, embora você possa pular esse passo se quiser anexar um elemento vazio à árvore DOM. | Agora que você tem o elemento (opcionalmente com algum conteúdo em um nó de texto), você pode adicioná-lo à árvore DOM usando o método `appendChild()`.<br><br>O método `appendChild()` permite especificar a qual elemento você quer adicionar esse nó como filho. | 

### _elemento_.innerHTML

- **Abordagem**

Usando a propriedade `innerHTML`, você pode acessar e alterar o conteúdo de um elemento, incluindo quaisquer elementos filho.
Ao obter HTML de um elemento, a propriedade `innerHTML` obterá o conteúdo de um elemento e irá retorná-lo como uma longa string, incluindo qualquer marcação que o elemento contém. Quando usada para definir um novo conteúdo para um elemento, essa propriedade aceitará uma string que pode conter marcação HTML e processará essa string, adicionando quaisquer elementos dentro dela à árvore DOM.

- **Exemplo: Adicionando conteúdo**

Para adicionar o novo conteúdo:
1. Armazene o novo conteúdo (incluindo a marcação) como uma string em uma variável.
2. Selecione o elemento cujo conteúdo você quer substituir.
3. Configure a propriedade `innerHTML` do elemento como a nova string.

<hr>

Agora que você possui o aporte teórico sobre esse assunto, que tal realizar alguns exercícios? **Clone esse repositório, crie a sua branch e pratique!**

<hr>
Fonte:
<a href="https://www.javascriptbook.com/about/"> DUCKETT, Jon. JavaScript & jQuery: Desenvolvimento de interfaces web interativas. Rio de Janeiro: Alta Books, 2015.</a>
