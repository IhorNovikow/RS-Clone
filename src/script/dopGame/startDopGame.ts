const game1 = <HTMLElement>document.querySelector('.game1');
const windowGame = <HTMLElement>document.querySelector('.windowGame');
const closeGame = <HTMLElement>document.querySelector('.close-Game');

game1.addEventListener('click', () => {
    windowGame.classList.remove('displayNone');
    closeGame.addEventListener('click', () => {
        windowGame.classList.add('displayNone');
    });
});
