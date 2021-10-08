# Sass

Uma das vantagens de utilizar o Sass, é que podemos dividir os nossos códigos de CSS e separá-los em arquivos e depois importar no arquivo principal.

A pasta **partials** dentro da pasta **css** quer dizer que lá estarão partes de arquivos **SCSS**.
É necessário colocar o **_** na frente do arquivo separado para que o compilador do **Sass** entenda que aquilo é um arquivo css que você deseja importar

**::before** - exibi um conteúdo antes da tag mencionada.
**::after** - exibi um conteúdo depois da tag mencionada.

# Tilt.js 

Biblioteca de animações
https://gijsroge.github.io/tilt.js/

# GreenSock

Biblioteca que está sendo usada para o carregamento da tela
**TweenMax** - é um documento da lib que usamos para fazer os eventos de carregamento na tela

Para utilizar o **TweenMax** é nescessário procurar a importação do **GreenSock** dele dentro do site da cdnjs.com e depois procurar pelo documento do **TweenMax**
https://cdnjs.com/libraries/gsap/2.1.3

## Scroll Trigger

**trigger** - elemento que ser detectado no evento do scroll

**start** - indica onde o trigger no elemento referenciado vai começar.
Ela recebe 2 propriedades: 
- A primeira é o lugar do elemento referenciado onde deve ativar o trigger
- A segunda é o lugar da tela onde deve ser ativado o trigger 
Para essas duas propriedades, podemos usar palavras-chave como:
top, center ou bottom
Mas também podemos usar valores como:
pixels, porcentagem ou (top relativo)

_Exemplo 1:_
start: "top center"

_Exemplo 2:_
start: "20px 80%"

**end** - indica onde o trigger no elemento referenciado vai acabar.
Assim como o start, ele também recebe duas propriedades e podem ser usadas da mesam forma.
O valor end recebe uma propriedade relativa que indica que o valor que vai ser passado esta sendo relativo ao **start**
_Exemplo_
end: "+=300"

**endTrigger** - pode ser usado para falar em qual elemento o trigger vai acabar.

**scrub** - é usado para fazer a animação enquanto o scroll está sendo usado. Então, se o scroll estiver rolando para baixo, a animação vai acompanhar, se ele parar, a animação para e se ele rolar para cima, a animação volta para o estado inicial de acordo com o movimento do scroll.
Ele pode receber o argumento **true** que é para ativá-lo, ou então **números**, para representar os segundos que ele vai fazer acompanhar o scroll.

**pin** - com o pin, nós podemos mover o elemento que está acontecendo o scroll para outras direções, ou até mesmo referenciar outro elemento para se mover junto com o elemento referenciado no trigger.

**snap** - possibilita scrolla a tela no eixo Y e a tela se mover no eixo X.

**markers:** marca na tela as posições do scroll e onde inicia o trigger de um elemento referenciado

**toggleActions** - são as ações que podem acontecer no evento de scroll.
    Ela recebe 4 posições, e para essas 4 posições, podemos usar qualquer uma dessas palavras-chave:
    - play
    - pause
    - resume
    - reverse
    - restart
    - reset
    - complete
    - none
**A primeira posição** é quando o scroll esta passando pela classe
**A segunda posição** é quando o scroll passa direto pela classe
**A terceira posição** é quando o scroll passa direto pela classe e depois ele volta
**A quarta posição** é quando termina a animação do elemento