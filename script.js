const html = document.querySelector('html');

// BOTÕES

const focoBt = document.querySelector('.app__card-button--foco')
const curtoBt = document.querySelector('.app__card-button--curto')
const longoBt = document.querySelector('.app__card-button--longo')

const comecar = document.querySelector('.app__card-primary-button')
const botoes = document.querySelectorAll('.app__card-button')

const startPauseBt = document.querySelector('#start-pause')
const comecarPausarBt = document.querySelector('#start-pause span')
const comecarPausarBtIcone = document.querySelector('.app__card-primary-butto-icon')

// ÁUDIOS

const audioPlay = new Audio('/sons/playwa.wav')
const audioPause = new Audio('/sons/pause.mp3')
const audioTempoFinalizado = new Audio('/sons/beep.mp3')

// CONTADOR

let tempoDecorrido = 1500; // 25 minutos
let intervaloId = null;

const tempoNaTela = document.querySelector('#timer')
const musicaFocoInput = document.querySelector('#alternar-musica')
const musica = new Audio('/sons/luna-rise-part-one.mp3')

musicaFocoInput.addEventListener('change', () => {
    if (musica.paused) {
        musica.play()
    } else {
        musica.pause()
    }
});

// HEADER

const banner = document.querySelector('.app__image')
const titulo = document.querySelector('.app__title')

// CONTEXTO: FOCO

focoBt.addEventListener('click', () => {
    tempoDecorrido = 1500;
    alterarContexto('foco')
    focoBt.classList.add('active')
});

// CONTEXTO: DESCANSO CURTO

curtoBt.addEventListener('click', () => {
    tempoDecorrido = 300;
    alterarContexto('descanso-curto')
    curtoBt.classList.add('active')
});

// CONTEXTO: DESCANSO LONGO

longoBt.addEventListener('click', () => {
    tempoDecorrido = 900;
    alterarContexto('descanso-longo')
    longoBt.classList.add('active')
});

// ALTERAR CONTEXTO

function alterarContexto(contexto) {
    mostrarCronometro()
    botoes.forEach((botao) => {
        botao.classList.remove('active')
    })
    html.setAttribute('data-contexto', contexto)
    banner.setAttribute('src', `/imagens/${contexto}.png`)
    switch (contexto) {

        case 'foco':
            titulo.innerHTML = `
                Otimize sua produtividade,<br>
                <strong class="app__title-strong">
                    mergulhe no que importa.
                </strong>
            `;
            break;

        case 'descanso-curto':
            titulo.innerHTML = `
                Que tal dar uma respirada?<br>
                <strong class="app__title-strong">
                    Faça uma pausa curta.
                </strong>
            `;
            break;

        case 'descanso-longo':
            titulo.innerHTML = `
                Hora de recarregar as energias,<br>
                <strong class="app__title-strong">
                    Faça uma pausa longa.
                </strong>
            `;
            break;
    }
}

// CONTAGEM REGRESSIVA

const contagemRegressiva = () => {
    if (tempoDecorrido <= 0) {
        audioTempoFinalizado.play();
        zerar();
        return;
    }
    tempoDecorrido -= 1
    mostrarCronometro()
    console.log('Temporizador: ' + tempoDecorrido)
};

// INICIAR / PAUSAR

startPauseBt.addEventListener('click', iniciarOuPausar)
function iniciarOuPausar() {
    if (intervaloId) {
        audioPause.play()
        zerar()
        return
    }
    audioPlay.play();
    comecarPausarBt.textContent = 'Pausar'
    comecarPausarBtIcone.setAttribute(
        'src',
        '/imagens/pause.png'
    );
    intervaloId = setInterval(contagemRegressiva, 1000)
}

// ZERAR / PAUSAR

function zerar() {
    clearInterval(intervaloId)
    intervaloId = null
    comecarPausarBt.textContent = 'Começar'
    comecarPausarBtIcone.setAttribute(
        'src',
        '/imagens/play_arrow.png'
    );
}

// MOSTRAR CRONÔMETRO

function mostrarCronometro() {

    const tempo = new Date(tempoDecorrido * 1000)
    const tempoFormatado = tempo.toLocaleTimeString('pt-BR', {minute: '2-digit',second: '2-digit'
})
    tempoNaTela.innerHTML = tempoFormatado;
}
// MOSTRAR TEMPO AO CARREGAR
mostrarCronometro()
