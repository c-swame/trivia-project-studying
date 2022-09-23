# Projeto TRIVIA;
Projeto desenvolvido em grupo no módulo de frontend da [Trybe](https://www.betrybe.com/).
O objetivo do projeto era colocar em prática conhecimentos sobre o uso do ciclo de vida de componentes react, estados globais, comunicação com API e lógica de programação, além de praticas de metodologias ágeis e trabalho em equipe.

### Descrição da aplicação;
A aplicação é uma replica do jogo trívia, que trás:
<ul>
  <li>
    Uma simulação de sistema de login que leva a um jogo de Trivia em inglês. Esse sistema de login usa o localStorage para armazenar os dados do jogador e indicar que uma sessão está ativa utilizando um token que deve expirar a cada 6hrs no máximo.
   </li>
  <li>Uma pagina de configuração, onde pode-se configurar o tempo máximo de resposta, quantidae de preguntas, dificuldade e tema das perguntas</li>
  <li>
    O jogo em sí, onde podem aparecer perguntas de verdadeiro ou falso ou multipla escolha e a pontuação é marcada de acordo com quão rapido a pessoa responde uma pergunta corretamente e a dificuldade de pergunta.
  </li>
  <li>
    Pagina de ranqueamento, onde o jogador pode ver sua posição em comparação dos demais jogadore. Essa página ainda apresenta um filtro onde pode-se separar as partidas de acordo com as configurações de tempo e quantidade de perguntas.
  </li>
</ul>

<img alt="demonstração do app" height="450px" src="https://raw.githubusercontent.com/c-swame/trivia-project-studying/main/public/trivia.gif">

### Rodando a aplicação:
Para rodar a aplicação basta, no seu editor de código (como o VSCode):
1. Clonar o repositório;
2. Rodar o comando `npm install`;
3. E em seguida o comando `npm start`;
Em seguida uma nova aba deve se abrir no seu navegador padrão com a aplicação rodando.
Em alguns dias farei o deploy da aplicação e iniciar o desenvolvimento de banco de dados próprio (nota adicionada 23/09/2022).

## Tenologias Utilizadas:
### Principais tecnologias:
<div>
  <img alt="React" height="55" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg">
  <img alt="Material UI" height="55" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg">
  <img alt="Redux" height="55" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg">
  <img alt="EsLint" height="55" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/eslint/eslint-original.svg">
  <img alt="Trello" height="55" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trello/trello-plain.svg">
  <img alt="Slack" height="55" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/slack/slack-original.svg">
  <img alt="" height="55" src="">
</div>

### outras tecnologias e ferramentas:
* react-router-dom
* crypto-js
* redux-thunk
* sanitize-html

## Futuras implementações:
* Criação de banco de dados próprio para apresentar um ranking geral.
* Possibilidar a criação de partidas perguntas e jogos personalizados;
* Possibilidar a votação nessas perguntas e jogos personalizados e report de bugs relacionados a essas perguntas;
