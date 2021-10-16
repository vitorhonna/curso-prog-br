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

- #### `display`

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

[ ! ] Nunca colocar um elemento com `display: block` dentro de um parágrafo `<p>`, pois irá quebrar o fluxo do parágrafo (ex: `background-color`).

<br>
<br>

- #### `overflow`

Controla como um conteúdo se comporta em relação ao seu container.

```css
tag {
    overflow: visible;
    /* Mostra todo o conteúdo, independente do elemento pai */
    overflow: hidden;
    /* Cropa o conteúdo usando o elemento pai */
    overflow: scroll;
    /* Cria uma barra de rolagem no elemento pai (vertical e horizontal) */
    overflow: auto;
    /* Cria uma barra de rolagem automaticamente quando necessário */


    overflow-x: scroll;
    /* Overflow HORIZONTAL, nesse caso adiciona somente barra de rolagem horizontal*/
    overflow-y: scroll;
    /* Overflow VERTICAL, nesse caso adiciona somente barra de rolagem vertical*/
}
```


- #### Alinhamento horizontal
- #### Position - Static e Relative
- #### Position - Absolute
- #### Position - Fixed
- #### Position - Sticky
- #### Float
- #### Alinhamento Vertical
- #### Viewport
- #### Responsividade
- #### Media Queries


## Markdown 

- [Cheatsheet](https://www.markdownguide.org/cheat-sheet/)
- [Basic Syntax](https://www.markdownguide.org/basic-syntax/)
- [Extended Syntax](https://www.markdownguide.org/extended-syntax/)