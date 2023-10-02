const botoes = document.querySelectorAll('.botao');

botoes.forEach(botao => {
    botao.addEventListener("click",() => {
        const botaoSelecionado = document.querySelector(".botao.selecionado");
        console.log(botaoSelecionado);
        botaoSelecionado.classList.remove("selecionado");
        
        botao.classList.add("selecionado");
    });

});

//https://www.youtube.com/watch?v=hzw1m15CGAo&t=3221s&ab_channel=DevemDobro 1:11:16
