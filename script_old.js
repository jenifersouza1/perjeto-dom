const html = document.querySelector('html');

// Botões
const focoBt = document.querySelector('.app__card-button--foco');
const curtoBt = document.querySelector('.app__card-button--curto');
const longoBt = document.querySelector('.app__card-button--longo');
const comecar = document.querySelector('.app__card-primary-button');

// Header
const banner = document.querySelector('.app__image');
const titulo = document.querySelector('.app__title');

// Timer
const displayTime = document.querySelector('#timer');

// Foco
focoBt.addEventListener('click', () => {
    html.setAttribute('data-contexto', 'foco');
    banner.setAttribute('src', '/imagens/foco.png');
});

// Descanso curto
curtoBt.addEventListener('click', () => {
    html.setAttribute('data-contexto', 'descanso-curto');
    banner.setAttribute('src', '/imagens/descanso-curto.png');
});

// Descanso longo
longoBt.addEventListener('click', () => {
    html.setAttribute('data-contexto', 'descanso-longo');
    banner.setAttribute('src', '/imagens/descanso-longo.png');
});