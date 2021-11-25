# Curso de Desenvolvimento Web - Programador BR

## Certificados

> _:( Ainda não temos certificados_

- HTML, CSS e Javascript (Módulo 1 ao 14)
- Firebase, jQuery, Bootstrap (Módulo 17 ao 20)
- Node, Mongo (Módulo 21 ao 30)

## Índice

- [Curso de Desenvolvimento Web - Programador BR](#curso-de-desenvolvimento-web---programador-br)
  - [Certificados](#certificados)
  - [Índice](#índice)
  - [Anotações](#anotações)
    - [Módulo 2: HTML Básico](#módulo-2-html-básico)
    - [Módulo 3: CSS Básico](#módulo-3-css-básico)
    - [Módulo 4: CSS Intermediário](#módulo-4-css-intermediário)
    - [Módulo 5: HTML Intermediário](#módulo-5-html-intermediário)
    - [Módulo 8: Javascript Básico](#módulo-8-javascript-básico)
    - [Módulo 9: Javascript Intermediário](#módulo-9-javascript-intermediário)
    - [Módulo 11: HTML Avançado](#módulo-11-html-avançado)
    - [Módulo 12: CSS Avançado](#módulo-12-css-avançado)
    - [Módulo 13: CSS Animações](#módulo-13-css-animações)
    - [Módulo 14: Javascript Avançado](#módulo-14-javascript-avançado)
  - [Design Resources](#design-resources)
  - [Markdown](#markdown)

## Anotações

### Módulo 2: HTML Básico

- Tag
- Estrutura Básica
- Títulos e Parágrafos
- Comentários
- Formatação
- Links
- Imagens
- Quebra de Linha
- Listas
- Tabelas

<br>
<br>

### Módulo 3: CSS Básico

- CSS inline
- CSS interno
- CSS externo
- Classes e Ids
- Cores
- Background
- Div
- Ferramentas do Google Chrome
- Unidades de medida (fixas)
- Unidades de Medida (referência)
- Margin e Padding
- Border
- Box Model
- Ajustes de texto
- Fontes
- Usando fontes customizadas
- Estilo de link
- Listas

<br>
<br>

### Módulo 4: CSS Intermediário

- #### **Modos de exibição: `display`**

Controla como cada elemento é mostrado na tela.

```css
selector {
  display: none;
  /* Retira o elemento do layout da página (como se nunca tivesse sido colocado)*/
  display: block;
  /* Quebra de linha no final, possível especificar tamanho (width, height) */
  display: inline;
  /* Não tem quebra de linha, tamanho fixo */
  display: inline-block;
  /* Não tem quebra de linha, mas permite especificar tamanho */
}
```

**IMPORTANTE**: quando aplicado *inline-block*, uma margem de 4px é aplicada automaticamente devido a quebra de linha existente no HTML. [Mais informações e ideias de solução aqui](https://css-tricks.com/fighting-the-space-between-inline-block-elements/).

Propriedade `display` padrão dos elementos:

> `<div>`: block\
> `<span>`: inline\
> `<p>`: block\
> `<img>`: inline especial, age como inline-block

**_IMPORTANTE_**: Nunca colocar um elemento com `display: block` dentro de um parágrafo `<p>`, pois irá quebrar o fluxo do parágrafo (ex: `background-color`).

<br>

- #### **Controle de vazamento: `overflow`**

Controla como um conteúdo se comporta em relação ao seu container.

```css
selector {
  overflow: visible;
  /* Mostra todo o conteúdo, independente do elemento pai */
  overflow: hidden;
  /* Cropa o conteúdo usando o elemento pai */
  overflow: scroll;
  /* Cria uma barra de rolagem no elemento pai (vertical e horizontal) */
  overflow: auto;
  /* Cria uma barra de rolagem automaticamente quando necessário, ou altera o tamanho da div */

  overflow-x: scroll;
  /* Overflow HORIZONTAL, nesse caso adiciona somente barra de rolagem horizontal*/
  overflow-y: scroll;
  /* Overflow VERTICAL, nesse caso adiciona somente barra de rolagem vertical*/
}
```

<br>

- #### **Alinhamento horizontal**

Usar a propriedade `margin`.

Para `<div>`:

```css
selector {
  margin: auto;
  /* Centraliza horizontalmente, adicionando margens de ambos os lados preenchendo toda a largura da tela */
  margin-left: auto;
  /* Alinha a direita */
}
```

Para `<img>`:

> _Opção 1_:\
> Mudar para `display: block` e usar `margin` na imagem.\
> _Opção 2_:\
> Colocar a imagem dentro de uma `<div>` e usar `text-align` com `center`, `left` ou `right` na div.

<br>

- #### **Position - Static e Relative**

Usar a propriedade `position`.

```css
selector {
  position: static;
  /* Position padrão, posiciona conforme descrito em 'display' */

  position: relative;
  /* Posicionamento relativo ao padrão, pode ser usado com 'left', 'top'... */
  left: 20px;
  top: 20px;
  /* Muda a posição e sobrepõe outros elementos, só altera a posição do elemento afetado, diferente de 'margin' */
  /* O elemento é posicionado em relação a sua própria posição natural, se fosse 'static' */
  /* Posicionamentos usando relative são muito frágeis */
  /* Os outros elementos não ocupam o espaço deste elemento, mesmo que movimentado */
}
```

<br>

- #### **Position - Absolute**

```css
selector {
  position: absolute;
  /* Ancora o elemento com relação ao elemento pai, mas outros elementos passam a ocupar o mesmo espaço, como se este elemento não estivesse ali */
  /* A posição inicial do elemento é sua posição natural, porém em frente a outros elementos que também tomaram essa posição */
  /* Este elemento não é usado por outros como referência para seus posicionamentos */
  /* O elemento pai é usado somente se ele NÃO FOR ESTÁTICO, se for, o avô é usado como referência, e assim sucessivamente até o body ser usado como ref */
  right: 0px;
  bottom: 0px;
  /* Se o elemento pai não for static: cola este elemento ao canto inferior direito do pai*/
}
```

<br>

- #### **Position - Fixed**

```css
selector {
  position: fixed;
  /* Assim como em 'absolute', deixa outros elementos ocuparem seu lugar */
  /* Ancora o elemento com relação ao viewport, não ao pai ou ascendentes */
  /* O viewport é a parte da janela que está aparecendo na tela */
  /* Para efeitos de dimensionamento, não leva em conta o pai */
}
```

<br>

- #### **Position - Sticky**

```css
selector {
  position: sticky;
  /* Não deixa outros elementos ocuparem seu lugar */
  /* Continua sendo referência para outros elementos */
  /* Rola junto com o elemento pai/página */
  top: 0px;
  /* Rola com a página mas fica grudado no topo e não sai do viewport, neste momento o restante desliza por baixo para continuar rolando */
}
```

<br>

- #### **Float**

```css
selector {
  float: left;
  /* Elemento fica flutuando a esquerda do próximo */
  /* Ex: Uma imagem é envelopada por um texto */
}

selector2 {
  /* É possível impedir que algum elemento flutue ao redor deste usando 'clear'*/
  clear: left;
  /* Afeta somente o lado esquerdo, pode ser: both, left, right */
  clear: none;
  /* Valor padrão, não impede nada */
}
```

<br>

- #### **Alinhamento Vertical**

Para textos dentro de um `<div>`:

```css
selector {
  line-height: 100px;
  /* Linha de 100px, se o elemento pai tem 100px, o texto centralizado */
  /* DESVANTAGEM: TEM QUE SABER O TAMANHO DO ELEMENTO PAI */
}

selector {
  position: absolute;
  top: 50%;
  /* Lembrando que o pai não pode ter position: static */
  /* O topo da linha é alinhado com o centro do pai */
  transform: translateY(-50%);
  /* Translada o elemento -50% de seu tamanho, nesse caso a altura da linha, dessa forma o centro da linha fica alinhado com o centro do elemento pai */
}
```

Para centralizar um elemento:

```css
selector {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
```

<br>

- #### **Viewport**

Adicionar uma tag `<meta>` no `<head>` do HTML para que o navegador entenda como processar o site.

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
```

<br>

- #### **Responsividade**

Utilizar unidades de medida relativas ao tamanho da tela ou de elementos ascendentes, por exemplo `%`, `vw` ...

<br>

- #### **Media Queries**

Aplica as regras de CSS somente se a tela corresponder a um tamanho máximo (`max-width`) ou mínimo (`min-width`).

```css
@media screen and (max-width: 400px) {
  /* Executa somente em telas de no máximo 400px */

  selector {
    /* Regras */
  }
}
```

É possível adicionar diversos _Media Queries_, eles vão sendo aplicados consecutivamente:

```css
selector {
  background-color: white;
  color: blue;
}
@media screen and (max-width: 500px) {
  selector {
    background-color: black;
  }
}

@media screen and (max-width: 250px) {
  selector {
    color: red;
  }
}
/* No caso acima, temos:
Telas com mais de 500px: fundo branco e fonte azul
Telas com 250 a 500px: fundo preto e fonte azul
Telas com menos de 250px: fundo preto e fonte vermelha */
```

**_IMPORTANTE_**: A **ordem** dos _media queries_ **IMPORTA**, deve ser do **MAIOR** para o **MENOR** se usando `max-width`.

**_IMPORTANTE_**: Os _media queries_ devem ser colocados no **FINAL** do arquivo de CSS.

<br>

### Módulo 5: HTML Intermediário

- #### **Formulário: `form`**

`method`: método de envio de dados, `GET` ou `POST`\
`action`: endpoint, se estiver no domínio da página pode ser apenas `/nomeDoEndpoint`

```html
<!-- Exemplo de formulário para busca no youtube -->
<form method="GET" action="https://www.youtube.com/results">
  <input type="text" name="search_query" placeholder="Busca" />
  <input type="submit" />
</form>
```

<br>

- #### **Tipos de `input`**

`text`: Texto comum em uma linha.\
`password`: Esconde o que está sendo digitado.\
`checkbox`: Passa `on` se não tiver `value`, senão passa o `value`. Permite várias seleções.\
`radio`: Semelhante ao `checkbox`, mas só permite uma seleção entre tags com o mesmo `name`. `checked` indica o estado default como marcado.\
`reset`: Limpa todos os campos.\
`submit`: Envia os dados. `value` indica o texto escrito no botão. (Para enviar é melhor usar a tag `button`).

```html
<
<form method="POST" action="/">
  <input type="text" name="text" />
  <input type="password" name="password" />
  <input type="checkbox" name="checkbox" value="manterLogado" />
  <input type="radio" name="radio" value="M" checked />

  <!-- Botão -->
  <input type="submit" />
  <!-- Usar a tag button em vez de input para enviar -->
  <button>Submit</button>
</form>
>
```

<br>

- #### **Dropdown: `select`**

O `name` do `select` é enviado junto com o `value` do `option`.\
`selected` em `option` indica a posição padrão exibida no dropdown.\
`size` em `select` indica o número de opções exibidas, se houver mais uma barra de rolagem aparece. Não dá o efeito de dropdown.\
`multiple` em `select` permite a seleção de várias opções.

```html
<!-- Envia: estado=SP, por exemplo -->
<select name="estado" size="2">
  <option value="RJ">Rio de Janeiro</option>
  <option value="SP" selected>São Paulo</option>
  <option value="MG">Minas Gerais</option>
</select>
```

<br>

- #### **Caixa de texto: `textarea`**

Adiciona uma caixa para entrada de texto. É necessário conter um `name`, senão não é enviado.

```html
<form method="POST" action="">
  <textarea name="texto"></textarea>
  <button>Enviar</button>
</form>
```

<br>

- #### **HTML 5: tipos de `input`**

caniuse.com\
Buscar quais funcionalidades os navegadores suportam.

`color`: abre um seletor de cores e envia o HEX.\
`date`: calendário para selecionar data. Usar `max="{{data}}"` para definir uma data limite.\
`datetime-local`: permite a seleção de data e hora.\
`file`: envio de arquivos. O método deve ser `POST`.\
`number`: envio de números. Usar `min` e `max` para limitar os valores.\
`range`: cria um slider entre `min` e `max`. Usar `value` para setar o default. `step` define o passo\
`tel`: em mobile abre somente o teclado numérico.\
`email`: verifica se o input contém elementos de email, como ponto e arroba.

```html
<
<form method="POST" action="/">
  <input type="color" name="cor" />
  <input type="date" name="data" max="1995-01-24" />
  <input type="datetime-local" name="data" max="1995-01-24" />
  <input type="file" name="arquivo" />
  <input type="number" name="numero" min="0" max="10" />
  <input type="range" name="intervalo" min="0" max="10" value="6" step="1" />
  <input type="tel" name="telefone" />
  <input type="email" name="email" />
</form>
```

<br>

- #### **HTML5: Tags Semânticas**

Tags semânticas informam os buscadores sobre o conteúdo da página, dessa forma eles podem ser melhor interpretadas e ranqueadas por eles.

`header`: cabeçalho da página. Mesmo comportamento da tag `<div>`.\
`nav`: barra de navegação. Aparece dentro do `header`.\
`footer`: rodapé.\
`main`: principal conteúdo do site, só pode haver 1 por página.\
`section`: seção do site, para melhor organização.\
`article`: artigo do site, seu conteúdo deve fazer sentido independente da página.\

```html
<header>
  <h2>Logo</h2>
  <nav>
    <!-- Itens -->
  </nav>
</header>

<main>
  <!-- Conteúdo principal -->
  <section></section>
  <article></article>
</main>

<footer>
  <!-- Conteúdo -->
</footer>
```

<br>
<br>

### Módulo 8: Javascript Básico

- #### **Hello World**

Um script `javascript` pode ser adicionado ao `HTML` com a tag `<script>`, internamente ou em arquivos separados.

```html
<script>
  alert("Hello, World");
</script>

<!-- ou -->

<script src="script.js"></script>
```

Com _script.js_:

```js
alert("Hello, World");
```

<br>

- #### **Console**

Print no console:

```js
console.log("Hello, World");
```

<br>

- #### **Variáveis**

```js
var a = "Hello, World");
console.log(a);
```

<br>

- #### **Tipos de dados**

`Boolean` : True ou False\
`Null` : variável vazia\
`Undefined` : retorno de variáveis não inicializadas\
`Number` : número, console mostra em azul\
`"String"` : sequência de caracteres, console mostra em preto\
`{Object}` : dado estruturado, tem propriedades (atributos) e funcionalidades (métodos)\
`[Array]` : lista, agrupamento de dados

<br>

- #### **Operações aritméticas**

`+`: Adição\
`-`: Subtração\
`*`: Multiplicação\
`/`: Divisão\
`%`: Módulo (resto de divisão)\
`**`: Exponencial\
`++`: Incremento\
`--`: Decremento

Incremento e decremento podem aparecer antes ou depois da variável, isso muda como é feita uma atribuição, por exemplo:

```js
var a = 30;
var b = --a;
console.log("a = " + a); // a = 29
console.log("b = " + b); // b = 29 <<<
```

```js
var a = 30;
var b = a--;
console.log("a = " + a); // a = 29
console.log("b = " + b); // b = 30 <<<
```

<br>

- #### **Atribuições**

| Operator | Usage   | Meaning    |
| -------- | ------- | ---------- |
| `=`      | x = y   | x = y      |
| `+=`     | x += y  | x = x + y  |
| `-=`     | x -= y  | x = x - y  |
| `*=`     | x \*= y | x = x \* y |
| `/=`     | x /= y  | x = x / y  |
| `%=`     | x %= y  | x = x % y  |

<br>

- #### **Operadores comparativos**

| Operator | Usage                                            |
| -------- | ------------------------------------------------ |
| `==`     | igual                                            |
| `===`    | idêntico / estritamente igual (valor e tipo)     |
| `!=`     | diferente                                        |
| `!==`    | estritamente diferente (valor e tipo diferentes) |
| `>`      | maior                                            |
| `<`      | menor                                            |
| `>=`     | maior ou igual                                   |
| `<=`     | menor ou igual                                   |

Exemplo de uso:

```js
var a = 3;
var b = "3";

console.log(a == 3); // True
console.log(a === 3); // False
```

<br>

- #### **Operadores lógicos**

| Operator | Usage   |
| -------- | ------- |
| `&&`     | E       |
| `\|\|`   | OU      |
| `!`      | Negação |

<br>

- #### **Strings**

`str`\
Pode-se usar aspas "duplas" ou 'simples'.

```js
var str = "Texto";
var str = "Texto";
```

O operador `+` concatena strings.

Se a string for somente numérica, pode-se usar operadores matemáticos, mas o tipo passar a ser number:

```js
var numero = "5";
typeof numero; // string
numero *= 2; // numero = 10
typeof numero; // number

var str = "abc" * 2; // str = NaN
```

Para forçar uma mudança de tipo:\
`parseInt(var)` converte para inteiro por truncamento, tipo `number`

```js
var a = "5.5"; // "5.5"
typeof a; // string
a = parseInt(a); // 5
typeof a; // number
```

`parseFloat(var)` converte para float, tipo `number`

```js
var a = "5.5"; // "5.5"
typeof a; // string
a = parseFloat(a); // 5.5
typeof a; // number
```

`Number(var)` converte para tipo `number`

<br>

- #### **Alert e Prompt**

`alert("mensagem")`\
Cria um popup com a "mensagem" e um botão "ok".

`prompt("mensagem")`\
Cria um popup com um campo para receber input.

```js
var nome = prompt("Qual o seu nome?");
alert("Bom dia, " + nome + " :)");
```

Os dados recebidos por `prompt` são do tipo `string`.

<br>

- #### **Condicionais - IF**

Sintaxe:

```js
if (/*teste lógico*/) {
  // executa se o true
}
else if {
  // executa se o anterior é false
}
else {
  // executa se o anterior é false
}
```

Exemplo:

```js
var idade = 20;

if (idade >= 35) {
  console.log("Pode comprar");
  console.log("Qual o seu pedido?");
} else if (idade >= 18) {
  console.log("Pode comprar");
  console.log("Mostre seu documento de identidade");
} else {
  console.log("Não pode comprar");
  console.log("Volte futuramente");
}
```

<br>

- #### **Operador Ternário**

Recomendado para testes simples em uma única linha.

Sintaxe:

```js
var a = /*(teste lógico)*/ ? /*(executa se true)*/ : /*(executa se false)*/
```

Exemplo: verificar se maior de idade

```js
var idade = 15;

idade >= 18 ? console.log("Sim") : console.log("Não");

// Equivalente a:
var resposta = idade >= 18 ? "Sim" : "Não";
console.log(resposta);

// Equivalente a:
if (idade >= 18) {
  console.log("Sim");
} else {
  console.log("Não");
}
```

Exemplo: multiplicar por 2 se menor que 5, senão multiplicar por 10

```js
var numero = 1;

var resultado = numero < 5 ? numero * 2 : numero * 10;

// Equivalente a:
if (numero < 5) {
  resultado = numero * 2;
} else {
  resultado = numero * 10;
}
```

<br>

- #### **Condicionais - Switch**

Usado para comparar um valor com diversas referências.

Sintaxe:

```js
switch (valor) {
  case referencia1:
    // executa se valor == referencia1
    break;

  case referencia2:
    // executa se valor == referencia2
    break;

  case referencia2:
    // executa se valor == referencia2
    break;

  default:
    // executa se não entrar em nenhum caso anterior
    break;
}
```

Exemplo: organização de fila de embarque

```js
var tipoPassagem = "VIP";

switch (tipoPassagem) {
  case "VIP":
    console.log("Vá para a fila prioritária");
    break;

  case "Comum":
    console.log("Vá para a fila comum");
    break;

  default:
    console.log("Você não pode embarcar");
    break;
}
```

<br>

- #### **Repetição - FOR e WHILE**

Sintaxe `for`:

```js
for (var i = 0; i < 5; i++) {
  console.log(i); // imprime 0, 1, 2, 3, 4
}

console.log("i = " + i); // i = 5
```

Pode-se limitar o escopo do contador `i` declarando com `let`:

```js
for (let i = 0; i < 5; i++) {
  console.log(i); // imprime 0, 1, 2, 3, 4
}

console.log("i = " + i); // Erro "Uncaught ReferenceError: i is not defined"
```

Sintaxe `while`:

```js
var i = 0;
while (i < 5) {
  console.log(i); // imprime 0, 1, 2, 3, 4
  i++;
}

console.log("i = " + i); // i = 5
```

<br>

- #### **Arrays**

Lista de elementos separados por vírgula.

```js
var letras = new Array("A", "B", "C", "D", "E");
var letras = ["A", "B", "C", "D", "E"];

console.log(letras[0]); // "A"
console.log(letras[1]); // "B"
console.log(letras[2]); // "C"
```

Acessando valores com `for` (3 formas):

```js
var letras = ["A", "B", "C", "D", "E"];

for (let i = 0; i < letras.length; i++) {
  console.log(letras[i]); // imprime todos os itens
}

// Ou (pegando os índices)

for (let i in letras) {
  console.log(letras[i]); // imprime todos os itens, i recebe os índices
}

// Ou (pegando os itens)

for (let letra of letras) {
  console.log(letra); // imprime todos os itens, letra recebe o item
}
```

<br>

- #### **Funções**

Funções nomeadas estão sujeitas a _hoisting_.

Sintaxe:

```js
function nomeDaFuncao(parâmetros) {
  //Comandos
  return; //valor
}
// receber parâmetros e retornar valores é opcional

nomeDaFuncao(argumentos);
// os argumentos correspondem aos parâmetros da função quando ela está sendo invocada
```

Exemplo: cálculo de média

```js
function media(nota1, nota2) {
  let media = (nota1 + nota2) / 2;
  return media;
}

var resultado = media(10, 5);
console.log(resultado); // 7.5
```

É possível atribuir a própria função, passando seu nome, a uma outra variável, que passará a ser utilizável como função:

```js
function media(nota1, nota2) {
  return (nota1 + nota2) / 2;
}

console.log(media(10, 5)); // 7.5

m = media; // 'm' recebe a função 'media'

console.log(m(10, 2)); // 6
```

<br>

**ATENÇÃO: Variáveis em Funções**

Se uma variável for declarada em uma função SEM utilizar palavras reservadas (`var`, `let`, `const`), ela passar a ter ESCOPO GLOBAL:

```js
function soma(n1, n2) {
  total = n1 + n2;
}

soma(1, 5);
console.log(total); // 6, notar que 'total' foi declarada dentro da função e está sendo utilizada fora
```

Se uma variável é declarada dentro da função com QUALQUER palavra reservada, seu escopo é limitado ao escopo da função!

```js
function soma(n1, n2) {
  var total = n1 + n2; // poderia ser let ou const
}

soma(1, 5);
console.log(total); // ReferenceError: total is not defined
// Notar que 'total', mesmo declarada com 'var', não sai do escopo da função
```

<br>

**Função anônima**

Funções anônimas não estão sujeitas a _hoisting_.

Sintaxe:

```js
var nomeDaFuncao = function (parâmetros) {
  //Comandos
  return; //valor
};
```

Exemplo:

```js
var media = function (nota1, nota2) {
  return (nota1 + nota2) / 2;
};
```

<br>

**Função de seta / arrow function**

Sintaxe:

```js
var nomeDaFuncao = (parâmetros) => {
  //Comandos
  return; //valor
};
```

Exemplo:

```js
var media = (nota1, nota2) => {
  return (nota1 + nota2) / 2;
};
```

<br>

**Função de callback / callback function**

Quando uma função é passada como parâmetro de outra função, ela pode ser executada como uma callback function.

```js
function foo(callbackFunction) {
  console.log("Before callback function");

  callbackFunction();

  console.log("After callback function");
}

foo(() => {
  console.log("I'm inside a callback function! :)");
});

// Before callback function
// I'm inside a callback function! :)
// After callback function
```

<br>

- #### **Objetos - Propriedades**

São conjuntos de _propriedades_ separadas por vírgula.

As propriedades podem ser variáveis de qualquer tipo, com uma chave e um valor separados por dois pontos (:).

Um objeto também pode ser uma propriedade de outro objeto.

São parecidos com dicionários de python.

Sintaxe:

```js
// Declaração:
var nomeObjeto = new Object()
// ou
var nomeObjeto = new Object({
  chave1: valor1
  chave2: valor2
})
// ou
var nomeObjeto = {
  chave1: valor1
  chave2: valor2
}

// Acessar valores:
nomeObjeto.chave1 // retorna 'valor1'
nomeObjeto["chave1"] // retorna 'valor1'

// Adicionar propriedades:
nomeObjeto.chave3 = valor3
nomeObjeto["chave4"] = valor4
```

Deletar uma propriedade de um objeto:

```js
delete nomeObjeto.chave;
```

Exemplo:

```js
var aluno = {
  nome: "Igor",
  nota1: 7.5,
};

console.log(aluno.nome + " tirou " + aluno.nota1 + " na prova");
// Igor tirou 7.5 na prova

console.log(aluno["nome"] + " tirou " + aluno["nota1"] + " na prova");
// Igor tirou 7.5 na prova

delete aluno.nota1;

console.log(aluno);
// aluno = {
//   nome: "Igor"
// }
```

Objetos como argumentos:

```js
var aluno1 = {
  nome: "Igor",
  nota: 7.5,
};

var aluno2 = {
  nome: "Pedro",
  nota: 5.5,
};

var aluno3 = {
  nome: "Maria",
  nota: 9.5,
};

var alunos = { aluno1, aluno2, aluno3 };

console.log(alunos);

/*

{
  {
  nome: "Igor",
  nota: 7.5
  },

  {
  nome: "Pedro",
  nota: 5.5
  },
  
  {
  nome: "Maria",
  nota: 9.5
  }
}

*/
```

<br>

- #### **Objetos - Métodos**

Um objeto também pode conter funções, que são chamadas de métodos.

Os métodos podem ser funções definidas dentro ou fora do objeto.

```js
var aluno = {
  nome: "Igor",
  notas: [6, 7],

  media: function (n1, n2) {
    return (n1 + n2) / 2;
  },
};

// 'media' é um método de 'aluno'
console.log(aluno.media(aluno.notas[0], aluno.notas[1])); // 6.5
```

```js
function calcMedia(n1, n2) {
  return (n1 + n2) / 2;
}

var aluno = {
  nome: "Igor",
  notas: [6, 7],

  media: calcMedia,
};

// 'media' é um método de 'aluno'
console.log(aluno.media(aluno.notas[0], aluno.notas[1])); // 6.5
```

<br>

`this`\
Referencia o objeto internamente:

```js
var aluno = {
  nome: "Igor",
  notas: [6, 7],

  media: function () {
    return (this.notas[0] + this.notas[1]) / 2;
  },
};

// 'media' é um método de 'aluno'
console.log(aluno.media()); // 6.5
```

O método também pode ser definido externamente:

```js
function calcMedia() {
  return (this.notas[0] + this.notas[1]) / 2;
}

var aluno = {
  nome: "Igor",
  notas: [6, 7],

  media: calcMedia,
};

// 'media' é um método de 'aluno'
console.log(aluno.media()); // 6.5
```

<br>

- #### **Objetos - <s>Bob o</s> Construtor**

Funções para criar objetos de maneira mais fácil e estruturada, além de evitar erros de digitação.

```js
function criarAluno(nomeAluno, nota1, nota2) {
  let aluno = {
    nome: nomeAluno,
    notas: [nota1, nota2],
    media: function () {
      return (this.notas[0] + this.notas[1]) / 2;
    },
  };

  return aluno;
}

var turma = [
  criarAluno("Igor", 9, 6),
  criarAluno("João", 6, 7),
  criarAluno("Maria", 5, 10),
];

console.log(turma[1].media()); // 6.5 (média do João)
```

Funções também são objetos. Elas são usadas como `Construtores` para criar outros objetos com uma certa estrutura:

```js
// Objeto tipo 'aluno'
function aluno(nome, nota1, nota2) {
  this.nome = nome;
  this.nota = new Array();
  this.nota[0] = nota1;
  this.nota[1] = nota2;

  this.media = function () {
    return (this.nota[0] + this.nota[1]) / 2;
  };
}

// Criando objetos (instanciar)
var aluno1 = new aluno("Igor", 8, 7);
var aluno2 = new aluno("João", 6, 7);
// 'aluno1' e 'aluno2' são instâncias de 'aluno'

console.log(aluno1);
console.log(aluno2);
```

<br>

`forEach()`\
Método do objeto `Array`, recebe uma função cujo parâmetro será cada elemento do array. Semelhante a um loop for.

Sintaxe:

```js
objeto.forEach((elemento, index, array) => {
  // função
}, thisArg);
// 'thisArg' será o valor usado por 'this' na função, é opcional, assim como receber o index e o array
```

Exemplo:

```js
var alunos = ["Igor", "João", "Maria"];

alunos.forEach(function (elemento) {
  console.log(elemento); // Imprime Igor, João, Maria
});

// Usando função de seta:
alunos.forEach((elemento) => {
  console.log(elemento); // Imprime Igor, João, Maria
});

// Usando mais argumentos:
alunos.forEach((elemento, index, array) => {
  console.log(elemento, index, array);
});
/* Imprime:
Igor 0 ["Igor", "João", "Maria"]
João 1 ["Igor", "João", "Maria"]
Maria 2 ["Igor", "João", "Maria"]
*/

// A função que forEach recebe pode ser qualquer função, ela é aplicada a todos os elementos da array
var numeros = [1, 2, 3];

function dobro(num, i, arr) {
  arr[i] = num * 2;
}

console.log(numeros); // [1, 2, 3]
numeros.forEach(dobro);
console.log(numeros); // [2, 4, 6]
```

<br>

- #### **Datas**

Datas são objetos em JS.

```js
var d = new Date(); // Data atual
console.log(d);
// Sat Oct 23 2021 18:26:11 GMT-0300 (Brasilia Standard Time)
```

É possível declarar manualmente. Atenção: valor passado para o mês é um índice numa array que vai de 0 (Jan) a 11 (Dez)!!

Sintaxe:

```js
// Data atual
new Date();

// String de data
new Date("dateString");

// Argumentos
new Date(year, monthIndex, day, hours, minutes, seconds, milliseconds);

// Se apenas um parâmetro for passado, será considerado milissegundos
new Date(milliseconds);

// Timestamp
const d = new Date();
let timestamp = d.getTime();
```

Exemplos:

```js
var d = new Date(2021, 09, 23);
console.log(d);
// Sat Oct 23 2021 00:00:00 GMT-0300 (Brasilia Standard Time)

var d = new Date(0);
// Wed Dec 31 1969 21:00:00 GMT-0300 (Brasilia Standard Time) [epoch]

var d = new Date("12 24 2021 14:00");
// Fri Dec 24 2021 14:00:00 GMT-0300 (Brasilia Standard Time)
```

Datas têm métodos específicos, mais informações:

- [Date Objects](https://www.w3schools.com/js/js_dates.asp)
- [Date Formats](https://www.w3schools.com/js/js_date_formats.asp)
- [Date Get Methods](https://www.w3schools.com/js/js_date_methods.asp)
- [Date Set Methods](https://www.w3schools.com/js/js_date_methods_set.asp)

<br>

- #### **Var, Let e Const**

Palavras reservadas para declarar variáveis.

**`var`**: tem escopo global, dentro e fora de blocos (como `if`s, por ex), hoisting (declara a variável, mas não atribui valor).

**`let`**: tem escopo local, só existe dentro do bloco onde foi declarada (como um `if`, por ex).

```js
var a = 1;
let b = 2;
console.log(a); // 1
console.log(b); // 2

{
  var c = 3;
  let d = 4;
}
console.log(c); // 3
console.log(d); // Erro: Uncaught ReferenceError: d is not defined
```

**`const`**: tem escopo local e valor constante.

Não pode ter seu valor reatribuído:

```js
const a = 1;
a = 2; // Erro: Uncaught TypeError: Assignment to constant variable.
```

Não pode ser redeclarada:

```js
const a = 1;
const a = 2; // Erro: Uncaught SyntaxError: Identifier 'a' has already been declared
```

Contudo, pode ser modificada.

- Se for uma array, por exemplo, seu conteúdo pode mudar, mas não pode deixar de ser uma array nem ser atribuída outra array.

```js
const a = [1];
a[0] = 2;
console.log(a); // [2]

const b = [3];
b[1] = 4;
console.log(b); // [3, 4]

const c = [5];
c = [6]; // Erro: Uncaught TypeError: Assignment to constant variable.
```

**ATENÇÃO:** Funções têm escopo restrito, uma variável declarada com `var` dentro de uma função não estará disponível fora da função.

<br>
<br>

### Módulo 9: Javascript Intermediário

- #### **Window**

Objeto padrão de páginas da web, contém muitas propriedades, como o `console`.

Por ser o objeto padrão, não é necessário mencioná-lo:

```js
window.console.log("hello, js"); // hello, js
console.log("hello, js"); // hello, js
```

<br>

- #### **Document / Documento Object Model (DOM)**

`document` é uma propriedade do objeto `window`, com ele é possível acessar o DOM.\
As tags `head` e `body`, filhas de `html`, são objetos que podem ser acessados como uma propriedade de `document`:\
`document.head` e `document.body`

<br>

- #### **Acessando elementos HTML com JS**

\- Usando um `id`: `document.getElementById`\
\- Usando uma `class`: `document.getElementsByClassName`\
\- Usando a `tag` html: `document.getElementsByTagName`

Também é possível usar os seletores CSS:\
\- `.querySelector("#id")`\
\- `.querySelector(".class")`\
\- `.querySelector("name")`\
\- ...

<br>

- #### **Modificando elementos**

Obter e modificar o conteúdo de um elemento:

\- `.innerHTML`: recebe html e interpreta, retorna o conteúdo total, incluindo as tags.\
\- `.innerText`: recebe texto simples, retorna somente o texto visível que a tag contém.\
\- `.textContent`: recebe texto simples, retorna todo o texto que a tag contém, mesmo que algo esteja sendo escondido da visualização por meio de CSS, porém sem as tags.

```css
span {
  display: none;
}
```

```html
<p class="paragrafoTeste">paragrafo teste <span>texto oculto com css</span></p>
```

```js
let p = document.querySelector(".paragrafoTeste");
console.log(p.innerHTML); // retorna: "paragrafo teste <span>texto oculto com css</span>"
console.log(p.textContent); // retorna: "paragrafo teste texto oculto com css"
console.log(p.innerText); // retorna: "paragrafo teste"
```

Modificando **atributos clássicos** (ex: classes, style, etc):

\- Classes: `.className`

```js
let p = document.querySelector(".paragrafoTeste");
p.className = "newClassName";
```

\- Style: `.style`

```js
let p = document.querySelector(".paragrafoTeste");
p.style = "color: blue";
```

Modificando **atributos personalizados**:

```html
<p meuAtt="nomeDoMeuAtributo">Texto</p>
```

```js
let p = document.querySelector(".paragrafoTeste");
p.getAttribute("meuAtt"); // retorna: "nomeDoMeuAtributo"
p.setAttribute("meuAtt", "novoNome");
```

`.setAttribute` também serve para criar um novo atributo personalizado.

<br>

- #### **Eventos (DOM Events)**

Eventos podem ser adicionado a tags como atributos. Eles podem modificar elementos,
chamar funções, aplicar estilos, etc.\
Exemplos de eventos:

\- `onclick="funcao"` : Executa uma função quando clicado.\
\- `onchange="funcao"` : Colocado em uma tag `input`, executa quando o campo de texto perde o foco.\
\- `oninput="funcao"` : Colocado em uma tag `input`, executa conforme o texto é digitado.\
\- `onload="funcao"` : Colocado na tag `body`, executa depois que toda a página for carregada.\
\- `onmouseover="funcao"` : Executa quando o cursor passar sobre o elemento\
\- `onmouseout="funcao"` : Executa quando o cursor deixar o elemento.

<br>

Também é possível alterar os efeitos dos eventos no próprio JS, basta acessar o evento por meio
de notação de ponto:

```js
let div = document.querySelector(".divTeste");

div.onclick = novaFuncao; // em que 'novaFuncao' é o nome de outra função a ser executada

function novaFuncao() { ... }
```

Além disso, é possível adicionar um evento utilizando um Event Listener, com `.addEventListener`:

Sintaxe:

```js
element.addEventListener("<event>", "<function>"); // nome dos eventos sem 'on', ex: 'onclick' -> 'click', 'onmouseover' -> 'mouseover'...
```

Por exemplo:

```js
let div = document.querySelector(".divTeste");

div.addEventListener("click", novaFuncao);

function novaFuncao() { ... }
```

<br>

- #### **Comparando as maneiras de criar um evento**

\- Criando na `tag` html:

A propriedade `this` retorna o objeto `window`, não a `tag`.

```html
<p onclick="f1()">Clique Aqui 1</p>
```

```js
function f1() {
  console.log("teste1");
  console.log(this); // Imprime o objeto window
}
```

Nenhum argumento é enviado para a função, se não for explicitamente colocado.

```js
function f1(e) {
  console.log("teste1");
  console.log(e); // undefined
}
```

Para acessar a tag no js, é possível passar `this` como um argumento da função na `tag`, porém o parâmetro recebido pela função não pode se chamar `this`.

```html
<p onclick="f1(this)">Clique Aqui 1</p>
```

```js
function f1(tag) {
  console.log("teste1");
  console.log(this); // Imprime o objeto window
  console.log(tag); // Imprime a tag html
}
```

\- Criando com `.addEventListener`:

A propriedade `this` retorna a `tag` que teve um evento adicionado.

```html
<p id="ref">Clique Aqui 2</p>
```

```js
function f2() {
  console.log("teste2");
  console.log(this); // Imprime a tag p com id ref
}

window.onload = () => {
  let p = document.querySelector("#ref");

  p.addEventListener("click", f2);
};
```

O método `.addEventListener` envia como argumento o evento de clique `PointerEvent`, que é um objeto com inúmeras informações sobre o evento, como a tag que foi clicada:

```js
function f2(e) {
  console.log("teste2");
  console.log(e); // PointerEvent {isTrusted: true, pointerId: 1, width: 1, height: 1, pressure: 0, …}
  console.log(e.target); // Imprime a tag que foi clicada
}
```

<br>

- #### **Elementos pai e filhos**

Para acessar os elementos pai ou filhos a partir de um elemento:

\- `.parentElement` : acessa o elemento pai\
\- `.children` : acessa os elementos filhos

<br>

- #### **Biblioteca Math**

Biblioteca de funções matemáticas.

\- `Math.PI` : retorna o número pi\
\- `Math.E` : retorna o número e\
\- `Math.sqrt(<value>)` : retorna a raiz quadrada de \<value>\
\- `Math.pow(<val1>,<val2>)` : retorna a potência \<val1>^\<val2> \
\- `Math.random` : retorna um número aleatório entre 0 e 0.99... \
\- `Math.round(<value>)` : retorna \<value> arredondado para o **maior ou menor** inteiro mais próximo\
\- `Math.floor(<value>)` : retorna \<value> arredondado para o **maior** inteiro mais próximo\
\- `Math.ceil(<value>)` : retorna \<value> arredondado para o **menor** inteiro mais próximo\
\- `Math.trunc(<value>)` : retorna \<value> arredondando para o inteiro mais próximo **na direção do zero** 

Math.trunc() arredonda na direção do zero, ou seja, se o número for positivo, ele arredonda para menos, se for negativo, ele arredonda para mais. Enquanto Math.floor() sempre arredonda para menos e Math.ceil() sempre arredonda para mais. Ou seja, Math.trunc() funciona como Math.floor() para números positivos e como Math.ceil() para números negativos. Além disso, nenhuma dessas funções leva em conta o valor não inteiro do número.

Exemplos:\
-> 1.2\
Math.trunc(1.2) retorna 1\
Math.floor(1.2) retorna 1\
Math.ceil(1.2) retorna 2

-> -1.2\
Math.trunc(1.2) retorna -1\
Math.floor(1.2) retorna -2\
Math.ceil(1.2) retorna -1

<br>

- #### **JSON**

É a representação de um objeto: JavaScript Object Notation.

`JSON` possui dois métodos:

\- `JSON.parse` : pega uma string e transforma em um objeto JSON.

\- `JSON.stringfy` : pega um objeto JSON e transforma em uma string.

```js
let person = {
  name: "Vitor",
  age: "26",
};

console.log(JSON.stringify(person)); // string: {"name":"Vitor","age":"26"}

let cat = '{"name": "Tom", "sound": "meow"}';

console.log(JSON.parse(cat)); // objeto: {name: 'Tom', sound: 'meow'}
```

<br>

- #### **Local Storage - Persistência de dados**

`localStorage` é uma propriedade de `window`, ele permite a persistência de dados por meio dos métodos:

\- `.setItem()` : salva um dado na memória -> `localStorage.setItem("name", "Vitor")`

\- `.getItem()` : recupera um dado da memória -> `localStorage.getItem("name")`

\- `.removeItem()` : deleta um dado da memória -> `localStorage.removeItem("name")`

Os dados são armazenados conforme o domínio da página, ou seja, não podem ser acessados em páginas diferentes. Por exemplo, dados de um aluno salvos em escola.com não podem ser acessados em faculdade.com.

<br>

- #### **Timer e Intervalo**

\- Timer: executa uma função **uma vez** depois de um intervalo de tempo

`<name> = setTimeout(<function>, <time>)`, o tempo deve ser especificado em ms

\- Intervalo: executa uma função **repetidamente** a cada intervalo de tempo

`<name> = setInterval(<function>, <time>)`

\- Parar execução: `clearTimeout(<name>)` e `clearInterval(<name>)`

<br>
<br>

### Módulo 11: HTML Avançado

- #### **Atributos personalizados**

É possível criar atributos personalizado utilizando o método `.setAttribute(<attrName>,<attrValue>)`.

Para atributos com o nome precedido de "data-", é possivel acessar os atributos utilizando `el.dataset.<attrName>`:

```html
<ul id="list" data-num="5"></ul>
```

```js
const lista = document.querySelector("#list");
console.log(lista.dataset.num); // "5"
```

<br>

- #### **Vídeos**

Por padrão, os controles de vídeo ficam ocultos. Utilizar o atributo `controls` para mostrá-los.

```html
<video controls src="video.mp4"></video>
```

Atributos:

-> `autoplay` e `muted`: reproduzir automaticamente, alguns navegadores só reproduzem automaticamente se o som estiver mutado.\
-> `loop`: reprodução em loop.\
-> `poster="thumb.png"`: thumb do vídeo.\
-> `preload=<auto | metadata | none>`: configura como o vídeo deve ser carregado.

É possível criar players com controles personalizados para videos.
Ver referência com a [lista de métodos e propriedades](https://www.w3schools.com/tags/ref_av_dom.asp).

<br>

- #### **iFrame**

Utilizar a tag `iframe` para adicionar outras páginas html dentro de uma página html. É útil para adicionar vídeos do YouTube.

<br>

- #### **Audio**

Tag `audio`. É possivel adicionar audios em fallback, caso um formato principal não seja reconhecido (assim como se faz com fontes):

```html
<audio controls>
    <source src="./audio1.ogg" type="audio/ogg" />
    <source src="./audio2.mp3" type="audio/mpeg" />
</audio>
```

Assim como vídeos, há diversas [propriedades e métodos](https://www.w3schools.com/tags/ref_av_dom.asp) para controle e personalização.

<br>

- #### **Canvas:**

Utilizar canvas para desenhar. A tela de desenho é definida pela tag `canvas`, que deve possuir um id, width e height. É importante definir a largura e altura no html, para não ter problemas com o posicionamento dos desenhos depois.

Antes de começar a desenhar, é preciso acessar o contexto.

-> **Linhas:**

```html
<canvas id="canvas" width="500px" height="500px"> </canvas>
```

```js
const canvas = document.querySelector("#canvas");

const context = canvas.getContext("2d");

context.moveTo(2.5, 0);
context.lineTo(250, 250);
context.lineTo(497.5, 0);
context.lineTo(497.5, 497.5);
context.lineTo(2.5, 497.5);
context.lineTo(2.5, 0);
context.lineWidth = 5;
context.strokeStyle = "darkblue";
context.stroke();
```

<br>

-> **Retângulos:**

Os argumentos estão na ordem: (x, y, width, height).

```js
context.fillStyle = "lightskyblue";
context.fillRect(20, 380, 150, 100);

context.strokeRect(330, 380, 150, 100);

context.rect(200, 330, 100, 150);
context.fill();
context.stroke();

context.clearRect(40, 420, 400, 20);
```

<br>

-> **Path**

Para separar as curvas, utilizar `context.beginPath()`.
Após passar uma sequência de pontos, para fechar a curva: `context.closePath()`.

```js
context.beginPath();
context.strokeStyle = "gray";
context.fillStyle = "lightgray";
context.moveTo(25, 75);
context.lineTo(200, 250);
context.lineTo(25, 250);
context.closePath();
context.fill();
context.stroke();
```

<br>

-> **Circles**

Os argumentos estão na ordem: T

```js
context.beginPath();
context.strokeStyle = "black";
context.fillStyle = "lightgray";
const { x_center, y_center, radius, start, end } = {
    x_center: 250 + 250 * (2 / 3),
    y_center: 250 * (2 / 3),
    radius: 25,
    start: Math.PI * 0,
    end: Math.PI * 2,
};
context.arc(x_center, y_center, radius, start, end);
context.fill();
context.stroke();
```

<br>

-> **Animação**

É possível criar animações utilizando `setInterval` e as funções de desenho.

<br>

-> **Imagens**

É possível inserir imagens dentro de um canvas, para isso, criar um elemento usando `const img = new Image()`, definir a fonte da imagem `img.src = "./image.png"`, e adicionar ao canvas com `context.drawImg(img, <x>, <y>, <width>, <height>)`. Para acessar o tamanho da image, pode-se usar `img.naturalWidth` e `img.naturalHeight`.

Pode se necessário esperar a página carregar, nesse caso, utilizar o método `onload` e passar um função que contenha o código que desenha a imagem (nessa função, o elemento de imagem pode ser referenciado com `this`).

<br>
<br>

### Módulo 12: CSS Avançado

- #### **Pseudo Elementos**

Indicados por `::` após um seletor. Permitem funções adicionais no CSS. [Mais informações aqui](https://github.com/vitorhonna/rocketseat-discover/blob/main/CSS/css.md#pseudo-elements). [E aqui](https://www.w3schools.com/cssref/css_selectors.asp).

-> `::first-letter`\
-> `::first-line`\
-> `::before`\
-> `::after`\
-> `::selection`

<br>

- #### **Seletores**

Selecionam elementos para aplicação de estilos. [Mais informações aqui](https://github.com/vitorhonna/rocketseat-discover/blob/main/CSS/css.md#seletores-e-combinators). [E aqui](https://www.w3schools.com/cssref/css_selectors.asp).

<br>

- #### **Pseudo Classes**

Indicadas por `:` após um seletor. Permitem funções adicionais no CSS. [Mais informações aqui](https://github.com/vitorhonna/rocketseat-discover/blob/main/CSS/css.md#pseudo-classes---selecionando-elementos). [E aqui](https://www.w3schools.com/cssref/css_selectors.asp).

<br>

- #### **Função Calc CSS**

Permite a realização de cálculos para serem usados como valores de propriedades. [Mais informações aqui](https://developer.mozilla.org/en-US/docs/Web/CSS/calc()).

<br>

- #### **Transformações**

É possível aplicar transformações aos elementos selecionados utilizando `transform`. Essa propriedade tem como valor uma função, que vai determinar o tipo de transformação. Exemplos:

-> `transform: rotate(45deg)`\
-> `transform: scale(0.25)`\
-> `transform: skew(-15deg, -15deg)`\
-> `transform: translate(-50%, -50%)`

Também é possível combinar transformações: `transform: rotate(45deg) scale(0.25)`.

Mais opções [consultar aqui](https://developer.mozilla.org/pt-BR/docs/Web/CSS/transform).

<br>

- #### **Compatibilidade de navegadores**

Nem todos os navegadores são compatíveis com algumas propriedades CSS. Verificar compatibilidade em:

[Should I Prefix](http://shouldiprefix.com/)\
[Can I Use](https://caniuse.com/)

<br>

- #### **Variáveis em CSS**

É possível criar variáveis em CSS. 

```css
:root {
    --size: 200px;
    --azul: cornflowerblue;
    --margin: 100px;
}

div.square {
    width: var(--size);
    height: var(--size);
    background-color: var(--azul);
    margin: var(--margin);
}

div.circle {
    width: var(--size);
    height: var(--size);
    background-color: var(--azul);
    margin: var(--margin);
    
    border-radius: 50%;
}
```

<br>

- #### **FlexBox** 

[Mais informações aqui](https://github.com/vitorhonna/rocketseat-discover/blob/main/CSS/css.md#alinhando-os-planetas-flexbox).\
[E aqui](https://css-tricks.com/snippets/css/a-guide-to-flexbox/).\
[E aqui](https://origamid.com/projetos/flexbox-guia-completo/).\
[E testes interativos aqui](https://codepen.io/enxaneta/pen/adLPwv).

Treinar flexbox no [Flexbox Froggy](https://flexboxfroggy.com/).

-> **Flex Direction**: Determina a direção do eixo principal.

-> **Wrap**: Determina se os elementos devem ter seu tamanho modificado para caber em uma linha ou se deve ser aplicada uma quebra de linha (preserva o tamanho dos elementos).

-> **Flex Flow**: Shorthand para o flex direction e wrap.

-> **Justify Content**: Alinha os itens com relação ao EIXO PRINCIPAL (as linhas).

-> **Align Items**: Alinha os itens com relação ao EIXO TRANSVERSAL (as linhas).

-> **Align Content**: Alinha as ***linhas*** com relação ao container, nesse caso elas passam a ter apenas o tamanho necessário para conter os itens, em vez de preencher todo o espaço do elemento pai (padrão stretch).

-> **Grow/Shrink**: Determina como o elemento pode expandir para preencher o espaço restante. Ou encolher para caber no espaço disponível.

-> **Ordem**: Determina a ordem em que os elementos aparecem. Por padrão vale 0.

-> **Align Self**: Propriedade aplicada no elemento. Cria uma regra específica para aquele elemento e sobrescreve a regra geral definida no elemento pai. Com isso, é possível, por exemplo, alinhar todos os elementos ao centro (regra geral) e um elemento específico ao topo (regra específica).

<br>

- #### **Grid:**

-> **Template:**

\- `grid-template-rows: 1fr 1fr`: duas linhas de mesmo tamanho, que preenchem todo o espaço disponível.\
\- `grid-template-columns: 1fr 2fr 1fr`: três colunas, sendo a do meio com o dobro do tamanho das adjacentes. Preenchem todo o espaço disponível.\
\- `grid-template: 1fr fr / 1fr 2fr 1fr`: shorthand, com valores para as linhas primeiro, separados por uma barra dos valores para colunas.

É possível alterar o posicionamento dos elementos individualmente utilizando `grid-row` e `grid-colum`.

<br>

-> **Gap:**

Define o espaçamento entre os elementos do grid.

\- `row-gap: 10px`: espaçamento entre linhas.\
\- `colum-gap: 20px`: espaçamento entre colunas.\
\- `gap: 15px` shorthand, aplica o valor para linhas e colunas. Se forem passados dois valores, o primeiro corresponde ao gap das linhas e o segundo, ao das colunas.

<br>

-> **Justify e Align Items:**

`justify-items` e `align-items` posicionam os **elementos** dentro de sua célula do grid.

<br>

-> **Justify e Align Content:**

`justify-content` e `align-content` posicionam as **linhas e colunas (células)** do grid com relação ao elemento pai. Ao alterar uma dessas propriedades, as células deixam de crescer para ocupar todo o espaço disponível e passam a ter apenas o tamanho necessário para conter os elementos que estão em seu interior (perdem o valor padrão `stretch`).

<br>

-> **Template Area:**

[Mais informações aqui](https://github.com/vitorhonna/rocketseat-discover/blob/main/CSS/css.md#posicionando-foguetes).

<br>

-> **Column e Row Start e End:**

Para fazer um elemento ocupar mais de uma coluna, utilizar `grid-column-start` e `grid-colum-end` passando as referências das células do grid. Essa referência indica o **início** da célula, então para um elemento cobrir as três primeiras colunas, por exemplo, ele deve receber 1 e 4.
Para linhas, utilizar `grid-row-start` e `grid-row-end`.

Quando um elemento já começa em uma posição desejada, pode-se passar apenas onde ele deve terminar. Assim, para indicar apenas a quantidade de células que um elemento deve ocupar, pode-se passar `span` antes do número de espaços a ocupar. Por exemplo, para ocupar 3 colunas: `grid-column-end: span 3` (sem o `span` ele ocuparia apenas 1 espaço na última coluna). 

<br>
<br>

### Módulo 13: CSS Animações

- #### **Keyframes**:

Para criar uma animação, criar um `@keyframe` com o nome da animação e definir o estado inicial, com `from` e o estado final, com `to`. Em seguida, aplicar a animação a um elemento utilizando a propriedade `animation-name` e definir a duração com `animation-duration`.

```css
@keyframes changeColor {
    from {
        background-color: lightcyan;
        color: black;
    }
    to {
        background-color: darkblue;
        color: white;
    }
}

.animation .square {
    animation-name: changeColor;
    animation-duration: 5s;
}
```

<br>

- #### **Adicionando estados a animação**:

Além do estado inicial e final, é possível definir estados intermediários utilizando porcentagens:

```css
@keyframes changeColorAndWidth {
    0% {
        background-color: lightcyan;
        color: black;
    }
    50% {
        background-color: purple;
        width: 200px;
    }
    100% {
        background-color: darkblue;
        color: white;
    }
}

.animation .square {
    animation-name: changeColorAndWidth;
    animation-duration: 5s;
}
```

<br>

- #### **Delay**:

É possível determinar um delay antes da animação começar, para isso, setar no elemento a propriedade `animation-delay` passando um valor de tempo.

```css
.animation .square {
    animation-name: changeColorAndWidth;
    animation-duration: 5s;
    animation-delay: 2s;
}
```

<br>

- #### **Loop**:

Para repetir uma animação, setar no elemento a propriedade `animation-iteration-count` passando um número de repetições ou `infinite`.

```css
.animation .square {
    animation-name: changeColorAndWidth;
    animation-duration: 5s;
    animation-iteration-count: infinite;
}
```

<br>

- #### **Direction**:

É possível determinar a direção da animação utilizando a propriedade `animation-direction`. Passando o valor `reverse` por exemplo, a animação começará do estado final e irá para o estado inicial. Já o valor `alternate` inicia pelo estado inicial, vai para o estado final, porém reinicia a partir do estado final.

```css
.animation .square {
    animation-name: changeColorAndWidth;
    animation-duration: 3s;
    animation-iteration-count: infinite;
    animation-direction: alternate;
}
```

<br>

- #### **Fill Mode**:

Para determinar o estado de uma animação ao carregar a página ou ao terminar a animação, utilizar a propriedade `animation-fill-mode`.

-> `animation-fill-mode: forwards` congela no último frame após o término da animação.

```css
.animation .square {
    animation-name: changeColorAndWidth;
    animation-duration: 3s;
    animation-fill-mode: forwards;
}
```

-> `animation-fill-mode: backwards` mostra o elemento no estado inicial da animação assim que a página é carregada. Só funciona se a propriedade `animation-delay` estiver determinada. 

```css
.animation .square {
    animation-name: changeColorAndWidth;
    animation-duration: 3s;
    animation-delay: 500ms;
    animation-fill-mode: backwards;
}
```

-> `animation-fill-mode: both` combina as duas funções anteriores: inicia o elemento após o carregamento da página com o estado inicial da animação e congela o ultimo frame após o término.


<br>

- #### **Timing Function**:

A propriedade `animation-timing-function` define a velocidade do movimento.

```css
.animation .square:nth-child(1) {
    animation-timing-function: linear; /* Velocidade Linear */
}
.animation .square:nth-child(2) {
    animation-timing-function: ease; /* Médio no início, muito rápido no meio e lento no final */
}
.animation .square:nth-child(3) {
    animation-timing-function: ease-in; /* Lento no início */
}
.animation .square:nth-child(4) {
    animation-timing-function: ease-out; /* Lento no final */
}
.animation .square:nth-child(5) {
    animation-timing-function: ease-in-out; /* Lento no início e no final */
}
```

<br>

- #### **Short Hand**:

É possível passar todos os valores em uma única propriedade: `animation`.

```css
animation: <name> <duration> <timing-function> <delay> <iteration-count> <direction> <fill-mode>;
```

<br>

- #### **Transitions**:

Sem a definição de uma transição, a aplicação de uma pseudo-classe (`:hover`, por exemplo) é instantânea. Para alterar esse comportamento, escolher a/as propriedades com `transition-property` e determinar a duração com `transition-duration`. Deve-se aplicar as definições de transição no elemento que já está sendo exibido na página (sem a pseudo-classe).

```css
.transition div {
    margin: 20px;
    transition-property: background-color color border-radius;
    transition-duration: 500ms;
}

.transition .square:hover {
    background-color: darkblue;
    color: white;
    border-radius: 50%;
}
```

Quando nenhuma propriedade é escolhida, mas uma duração é determinada, ela é aplicada a todas as propriedades do elemento no momento que a página é carregada.

<br>
<br>

### Módulo 14: Javascript Avançado

- #### **Strict mode**

Para tornar obrigatória a declaração de todas as variáveis dentro do escopo que estão sendo utilizadas, adicionar `"use strict"` no início do script. Assim, problemas de escopo são evitados. Exemplo: uma variável utilizada dentro de uma função porém não declarada com uma palavra reservada (`var`, `let`, `const`) tem escopo global, pois é declarada no momento do hoisting da função. Ao utilizar o strict mode isso não é mais possível. Da mesma forma que declarar uma variável fora de uma função e depois tentar usá-la dentro da função não funcionará.

<br>

- #### **This e Bind**

`this` faz referência ao objeto em contexto. Por exemplo, um método dentro de um objeto pode acessar informações do próprio objeto utilizando `this` e notação de ponto. Com isso, também é possível criar funções genéricas para determinadas classes de objetos que possuam atributos com mesma key. Ex:

```js
function speakGeneric() {
    print(this.sound);
    console.log(this.sound);
}

const Dog = {
    sound: "Woof woof",
    speak: speakGeneric,
};

const Cat = {
    sound: "Meow meow",
    speak: speakGeneric,
};

Dog.speak(); // Woof woof
Cat.speak(); // Meow meow
```

Se a função não tiver um contexto (fora de um objeto, por exemplo), o `this` será indefinido. Para dar contexto a função, utilizar `bind` para passar um objeto como argumento que a função irá considerar para o valor de `this`.

```js
speakGeneric(); // undefined

let function_bind = speakGeneric.bind(Dog);

function_bind(); // Woof woof
```

<br>

- #### **Arrow Functions**



<br>

- #### **Callback**



<br>

- #### **Promises**



<br>

- #### **Async Await - Uma outra maneira de usar promises**



<br>

- #### **Filter**



<br>

- #### **Map**



<br>

- #### **Valor vs Referência**



<br>

- #### **Spread Operator**



<br>

- #### **Desestruturando um objeto**



<br>

- #### **Reduce**



<br>

- #### **Desafio - JS Avançado**



<br>

- #### **Fetch**



<br>

- #### **try catch**


<br>
<br>

---

## Design Resources

- [Pinterest](https://www.pinterest.com)
- [Behance](https://www.behance.net)
- [freepik](https://www.freepik.com)
- [streamline icons](https://egostreamlineicons.com/)
- [steamline hq](https://streamlinehq.com/)
- [envato](https://envato.com/)
- [unsplash](https://unsplash.com/)
- [flaticon](https://www.flaticon.com/)
- [pexels](https://www.pexels.com/)
- [Material Design Icons](https://fonts.google.com/icons?selected=Material+Icons)
- [PNG Egg](https://www.pngegg.com/)

<br>
<br>

## Markdown

- [Cheatsheet](https://www.markdownguide.org/cheat-sheet/)
- [Basic Syntax](https://www.markdownguide.org/basic-syntax/)
- [Extended Syntax](https://www.markdownguide.org/extended-syntax/)
