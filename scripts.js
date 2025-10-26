// Seleciona o elemento círculo de fundo
let circulo = document.querySelector(".circulo")

// Seleciona o elemento da imagem principal do copo
let imagemCopo = document.querySelector(".imagem-copo")

// Lista de opções de copos disponíveis (cor do círculo, caminho da imagem, elemento thumb)
const opcoesDeCopo = [
    { cor: '#017143', imagem: 'img/img1.png', thumb: document.querySelector('.caixa-menu img:nth-child(1)') }, 
    { cor: '#eb7495', imagem: 'img/img2.png', thumb: document.querySelector('.caixa-menu img:nth-child(2)') }, 
    { cor: '#d752b1', imagem: 'img/img3.png', thumb: document.querySelector('.caixa-menu img:nth-child(3)') },
    // Adicionando a thumb para a imagem padrão caso queira usar thumb4:
    { cor: '#d4c6b6', imagem: 'img/img4.png', thumb: null } // Não há thumb para a img4, mas mantida para lógica aleatória
];

/**
 * Função unificada para mudar a cor do círculo e a imagem do copo,
 * e destacar o botão clicado.
 * @param {string} novaCor - A cor em formato hexadecimal para o círculo.
 * @param {string} novoCopo - O caminho (path) para a nova imagem do copo principal.
 * @param {HTMLElement | null} botaoClicado - O elemento do botão (thumb) que foi clicado.
 */
function mudarCor(novaCor, novoCopo, botaoClicado = null) {
    circulo.style.backgroundColor = novaCor;
    imagemCopo.src = novoCopo;

    // 1. Remove a classe 'ativo' de todos os botões (thumbs)
    const botoes = document.querySelectorAll('.botao-menu');
    botoes.forEach(botao => {
        botao.classList.remove('ativo');
    });

    // 2. Adiciona a classe 'ativo' apenas ao botão clicado (se houver)
    if (botaoClicado) {
        botaoClicado.classList.add('ativo');
    }
}

/**
 * Função para escolher e aplicar um copo aleatório na entrada.
 */
function escolherCopoAleatorio() {
    // 1. Gera um índice aleatório (apenas para os 3 primeiros copos que têm thumbs)
    const indiceAleatorio = Math.floor(Math.random() * 3); // Garante 0, 1 ou 2
    
    // 2. Seleciona e aplica a opção
    const opcaoEscolhida = opcoesDeCopo[indiceAleatorio];
    
    // Chama a função com a cor, a imagem e o elemento da thumb para aplicar o destaque
    mudarCor(opcaoEscolhida.cor, opcaoEscolhida.imagem, opcaoEscolhida.thumb);
}


// EXECUTA AO CARREGAR: Garante que o site abra com um copo aleatório
escolherCopoAleatorio();