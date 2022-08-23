const gameStr = <HTMLElement>document.querySelector('.start-wrapper');
const buttonStarGame = <HTMLButtonElement>document.querySelector('.button-star-game');

buttonStarGame.addEventListener('click', () => {
    gameStr.classList.remove('displayNone');
    const cross = <HTMLElement>gameStr.querySelector('.cross-wrapper');
    cross.addEventListener('click', () => {
        gameStr.classList.add('displayNone');
    });
});
