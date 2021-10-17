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


### Módulo 4: CSS Intermediário

- #### **`display`**

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

- #### **`overflow`**

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

***IMPORTANTE***: A **ordem** dos *media queries* **IMPORTA**, deve ser do **MAIOR** para o **MENOR** se usando `max-width` */

***IMPORTANTE***: Os *media queries* devem ser colocados no **FINAL** do arquivo de CSS */

<br>
<br>

## Markdown 

- [Cheatsheet](https://www.markdownguide.org/cheat-sheet/)
- [Basic Syntax](https://www.markdownguide.org/basic-syntax/)
- [Extended Syntax](https://www.markdownguide.org/extended-syntax/)