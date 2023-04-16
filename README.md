# Boas-vindas ao repositório do projeto de adivinhação de Cor

<details>
  <summary><strong>👨‍💻 O que deverá ser desenvolvido</strong></summary><br />

- Será desenvolvida uma aplicação utilizando JavaScript, HTML5 e CSS3.

- Nesta aplicação deverá ser possível jogar um jogo de adivinhação de cores onde:
  - Dentro de uma possibilidade de cores o jogador deverá tentar adivinhar qual cor foi aleatoriamente selecionada como a cor certa;
  - A paleta de cores deve ser apresentada por círculos coloridos;
  - Deverá existir um botão para iniciar e reiniciar o jogo;
  - Ao selecionar uma cor um texto deverá informar se você acertou ou não a cor correta.

</details>

# Requisitos

>⚠️ Leia-os atentamente e siga à risca o que for pedido. Em particular, **atente-se para os nomes de _ids_ que alguns elementos de seu projeto devem possuir**. ⚠️

O não cumprimento de um requisito, total ou parcialmente, impactará em sua avaliação.

## 1 - Adicione no seu site um título com o nome do seu jogo

<details>
  <summary>Adicione à sua página um título com o nome do seu jogo utilizando a tag `h1` com o id `title`</summary><br />

**O que será testado:**

- Sua página deve possuir uma tag `h1` com ID `title`.
  
</details>

## 2 - Adicione um texto com o código RGB a ser adivinhado

<details>
  <summary>Sua página deverá conter uma tag `p` com o conteúdo da cor a ser adivinhada no formato rgb `(168, 34, 1)` e com o id `rgb-color`</summary><br />

**O que será testado:**

- Sua página deve possuir uma tag `p` com ID `rgb-color`;

- O conteúdo da tag `p` deve conter os três números das cores RGB a serem adivinhadas, no seguinte formato: `(168, 34, 1)`.

</details>

## 3 - Adicione à página opções de cores para serem adivinhadas

<details>
  <summary>Sua página deverá conter 6 círculos. A esses círculos deve ser adicionada a classe `ball` e todos devem ter o mesmo tamanho para largura e altura.</summary><br />

**O que será testado:**

- A página deve possuir  6 círculos;

- A largura e altura dos círculos devem ser do mesmo tamanho;

- Os 6 círculos devem receber a classe `ball`.

</details>

## 4 - Adicione cores aos círculos, que devem ser geradas dinamicamente

<details>
  <summary>As cores dos círculos são geradas via JavaScript como opção de cor de adivinhação</summary><br />

**O que será testado:**

- As cores de cada um dos 6 círculos coloridos devem ser geradas via JavaScript ao carregar a página.

</details>

## 5 - Ao clicar em um círculo colorido, deve ser mostrado um texto indicando se está correto

<details>
  <summary>Sua página deverá ter uma tag `p` com id `answer` que mudará conforme a situação do jogo</summary><br />

  Quando o jogo é iniciado, o conteúdo do texto da tag `p` exibido deve ser `"Escolha uma cor"`;

  - Se o círculo colorido for o **correto**, deve ser exibido o texto `"Acertou!"`;

  - Se o círculo colorido for o **incorreto**, deve ser exibido o texto `"Errou! Tente novamente!"`.


**O que será testado:**

- A página deve possuir uma tag `p` com ID `answer`;

- O texto exibido deve ser `"Escolha uma cor"` quando o jogo for iniciado;

- O texto `"Acertou!"` deve ser exibido na página, se o círculo colorido selecionado for o **correto**;

- O texto `"Errou! Tente novamente!"` deve ser exibido na página, se o círculo colorido selecionado for o **incorreto**.

</details>

## 6 - Crie um botão para iniciar/reiniciar o jogo

<details>
  <summary>Sua página deverá possuir um botão com id `reset-game` que possibilite reiniciar o jogo e jogar novamente</summary><br />

 - Lembrando de que quando o jogo é iniciado o elemento com id `answer` deve exibir o texto `"Escolha uma cor"`, as cores dos círculos devem ser geradas novamante e o elemento com id `rgb-color` deve ser atualizado.

**O que será testado:**

  - A página deve possuir um botão com id `reset-game`;

  - O botão ao ser clicado deve gerar novas cores via JavaScript e o elemento com ID `rgb-color` deve ser atualizado;

  - Ao clicar no botão, o elemento com ID `answer` deve voltar ao estado inicial, exibindo o texto `"Escolha uma cor"`.

  
</details>

# Bônus

## 7 - Crie um placar que incremente 3 pontos para cada acerto no jogo

<details>
  <summary>Sua página deverá conter um elemento que vai marcar o placar da pessoa jogadora com id `score`</summary><br />

  Situação do jogo:

  - O valor inicial do placar deve ser 0;

  - Para cada acerto incrementar 3 pontos ao placar;

  - Ao clicar no botão que reinicia o jogo, o placar **NÃO** deve ser redefinido.

**O que será testado:**

- A página deve possuir um elemento com ID `score`;

- O valor inicial do placar dele deve ser 0;

- O valor do placar a cada acerto, é incrementado em 3 pontos;

- O botão que reinicia o jogo ao ser clicado **NÃO** deve redefinir a pontuação do placar.

</details>
