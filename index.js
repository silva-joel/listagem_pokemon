/*
O que precisamos fazer? - Quando clicarmos no botão de troca de tema temos que alterar a cor do tema da pagina para as cores do tema claro ou do tema escuro

- Objetivo 1 - Quando clicar no botão de troca de tema, adicionar a classe modo-escuro no body para que os estilos do modo escuro sejam aplicados e mudar a imagem para a lua
   - passo 1 - pegar no JS o elemento HTML correspodente ao botão de troca de tema
   - passo 2 - dar um jeito de pegar no JS o elemento HTML correspondente ao body
   - passo 3 - dar um jeito de identificar o clique do usuário no botão de troca de tema
   - passo 4 - adicionar a classe modo-escuro no body
   passo 5 - trocar a imagem do botão de alterar tema para lua

- Objetivo 2 - quando clicar no botão de troca de tema, caso o body já tenha a classe modo-escuro, remover a classe para mudar para o modo claro e mudar a imagem para o sol
   - passo 6 - verificar se o body já tem o modo escuro
   - passo 7 - remover a classe modo escuro do body
   - passo 8 - trocar a imagem do botão de alterar tema para sol

*/

//Objetivo 1 - Quando clicar no botão de troca de tema, adicionar a classe modo-escuro no body para que os estilos do modo escuro sejam aplicados e mudar a imagem para a lua//


const botaoAlterarTema = document.getElementById("botao-alterar-tema");

const body = document.querySelector("body");

const imagemBotaoTrocaDeTema = document.querySelector(".imagem-botao")

botaoAlterarTema.addEventListener("click", () => {

    const modoEscuroEstaAtivo = body.classList.contains("modo-escuro")

    body.classList.toggle("modo-escuro")

    if (modoEscuroEstaAtivo) {

        imagemBotaoTrocaDeTema.setAttribute("src", "./imagens/sun.png");
    } else {

        imagemBotaoTrocaDeTema.setAttribute("src", "./imagens/moon.png");
    }
});