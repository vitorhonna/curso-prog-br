# Curso de Desenvolvimento Web - Programador BR

## Certificados

> *:( Ainda não temos certificados*

- Html, CSS e Javascript (Módulo 1 ao 14)
- Firebase, jQuery, Bootstrap (Módulo 17 ao 20)
- Node, Mongo (Módulo 21 ao 30)

## Índice

- [Módulo 2: HTML Básico](https://github.com/vitorhonna/cursoProgramadorBR#módulo-2-html-básico)
- [Módulo 3: CSS Básico](https://github.com/vitorhonna/cursoProgramadorBR#módulo-3-css-básico)
- [Módulo 4: CSS Intermediário](https://github.com/vitorhonna/cursoProgramadorBR#módulo-4-css-intermediário)

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

***IMPORTANTE***: Nunca colocar um elemento com `display: block` dentro de um parágrafo `<p>`, pois irá quebrar o fluxo do parágrafo (ex: `background-color`).

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
> *Opção 1*:\
> Mudar para `display: block` e usar `margin` na imagem.\
> *Opção 2*:\
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

Para centralizar um elemento:
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
<meta name="viewport" content="width=device-width, initial-scale=1.0">
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

É possível adicionar diversos *Media Queries*, eles vão sendo aplicados consecutivamente:
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

***IMPORTANTE***: A **ordem** dos *media queries* **IMPORTA**, deve ser do **MAIOR** para o **MENOR** se usando `max-width`.

***IMPORTANTE***: Os *media queries* devem ser colocados no **FINAL** do arquivo de CSS.

<br>

### Módulo 5: HTML Intermediário

- #### **Formulário: `form`**

`method`: método de envio de dados, `GET` ou `POST`\
`action`: endpoint, se estiver no domínio da página pode ser apenas `/nomeDoEndpoint`

```html
<!-- Exemplo de formulário para busca no youtube -->
<form method="GET" action="https://www.youtube.com/results">
    <input type="text" name="search_query" placeholder="Busca">
    <input type="submit">
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
<<form method="POST" action="/">
    <input type="text" name="text">
    <input type="password" name="password">
    <input type="checkbox" name="checkbox" value="manterLogado">
    <input type="radio" name="radio" value="M" checked>

    <!-- Botão -->
    <input type="submit">
    <!-- Usar a tag button em vez de input para enviar -->
    <button>Submit</button>
</form>>
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
<<form method="POST" action="/">
    <input type="color" name="cor">
    <input type="date" name="data" max="1995-01-24">
    <input type="datetime-local" name="data" max="1995-01-24">
    <input type="file" name="arquivo">
    <input type="number" name="numero" min="0" max="10">
    <input type="range" name="intervalo" min="0" max="10" value="6" step="1">
    <input type="tel" name="telefone">
    <input type="email" name="email">
</form>
```

<br>

- #### **Tags Semânticas**

```html
<>
```

<br>
<br>

## Markdown 

- [Cheatsheet](https://www.markdownguide.org/cheat-sheet/)
- [Basic Syntax](https://www.markdownguide.org/basic-syntax/)
- [Extended Syntax](https://www.markdownguide.org/extended-syntax/)