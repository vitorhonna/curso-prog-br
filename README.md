# Curso de Desenvolvimento Web - Programador BR

## Certificados

> _:( Ainda não temos certificados_

- Html, CSS e Javascript (Módulo 1 ao 14)
- Firebase, jQuery, Bootstrap (Módulo 17 ao 20)
- Node, Mongo (Módulo 21 ao 30)

## Índice

- [Módulo 2: HTML Básico](https://github.com/vitorhonna/cursoProgramadorBR#módulo-2-html-básico)
- [Módulo 3: CSS Básico](https://github.com/vitorhonna/cursoProgramadorBR#módulo-3-css-básico)
- [Módulo 4: CSS Intermediário](https://github.com/vitorhonna/cursoProgramadorBR#módulo-4-css-intermediário)
- [Módulo 5: HTML Intermediário](https://github.com/vitorhonna/cursoProgramadorBR#módulo-5-html-intermediário)
- [Módulo 8: Javascript Básico](https://github.com/vitorhonna/cursoProgramadorBR#módulo-8-javascript-básico)
- [Módulo 9: Javascript Intermediário](https://github.com/vitorhonna/cursoProgramadorBR#módulo-9-javascript-intermediário)

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
delete nomeObjeto.chave
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

delete aluno.nota1

console.log(aluno)
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

<br>

- #### **Document**

<br>

- #### **Acessando elementos HTML com JS**

<br>

- #### **Modificando elementos**

<br>

- #### **Eventos (DOM Events)**

<br>

- #### **O que é o This?**

<br>

- #### **Tirando dúvida sobre o lance dos parênteses nas funções**

<br>

- #### **Comparando as maneiras de criar um evento**

<br>

- #### **Elementos pai e filhos**

<br>

- #### **Biblioteca Math**

<br>

- #### **JSON**

<br>

- #### **Local Storage - Persistência de dados**

<br>

- #### **Criando uma página para sorteio**

<br>

- #### **Timer e Intervalo**

<br>

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

<br>
<br>

## Markdown

- [Cheatsheet](https://www.markdownguide.org/cheat-sheet/)
- [Basic Syntax](https://www.markdownguide.org/basic-syntax/)
- [Extended Syntax](https://www.markdownguide.org/extended-syntax/)
