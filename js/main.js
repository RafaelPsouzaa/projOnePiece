const botoes = document.querySelectorAll('.botao');
const personagens = document.querySelectorAll('.personagem');
botoes.forEach((botao, indice) => {
    botao.addEventListener("click", () => {
        desselecionar();
        desselecionarPersonagem();
        botao.classList.add("selecionado");
        personagens[indice].classList.add("selecionado");
    });

});


function desselecionarPersonagem() {
    const personagemSelecionado = document.querySelector(".personagem.selecionado");
    personagemSelecionado.classList.remove("selecionado");
}

function desselecionar() {
    const botaoSelecionado = document.querySelector(".botao.selecionado");
    botaoSelecionado.classList.remove("selecionado");
}
//https://www.youtube.com/watch?v=hzw1m15CGAo&t=3221s&ab_channel=DevemDobro 1:11:16
