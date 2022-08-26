import { info11, info12 } from './info1';
const gameStr = <HTMLElement>document.querySelector('.start-wrapper');
const buttonStarGame = <HTMLButtonElement>document.querySelector('.button-star-game');

buttonStarGame.addEventListener('click', () => {
    gameStr.classList.remove('displayNone');
    const cross = <HTMLElement>gameStr.querySelector('.cross-wrapper');
    const test = <HTMLElement>gameStr.querySelector('.text');
    test.innerHTML = info11;
    cross.addEventListener('click', () => {
        gameStr.classList.add('displayNone');
    });
});

function forwardStrGame() {
    const btnForward = <HTMLElement>gameStr.querySelector('.btn-forward');
    const test = <HTMLElement>gameStr.querySelector('.text');
    btnForward.addEventListener('click', () => {
        test.innerHTML = info12;
    });
}
forwardStrGame();

function backStrGame() {
    const btnForward = <HTMLElement>gameStr.querySelector('.btn-back');
    const test = <HTMLElement>gameStr.querySelector('.text');
    btnForward.addEventListener('click', () => {
        test.innerHTML = info11;
    });
}
backStrGame();
