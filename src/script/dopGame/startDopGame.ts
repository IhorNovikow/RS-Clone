import { getScoreAndName } from './getScoreUser';
const game1 = <HTMLElement>document.querySelector('.game1');
const windowGame = <HTMLElement>document.querySelector('.windowGame');
const closeGame = <HTMLElement>document.querySelector('.close-Game');

const userNameHTML = <HTMLElement>document.querySelector('.user-name');
const userScoreHTML = <HTMLElement>document.querySelector('.user-score');
const userName = <string>localStorage.getItem('username');
game1.addEventListener('click', () => {
    windowGame.classList.remove('displayNone');
    getScoreAndName(userName, userNameHTML, userScoreHTML);
    closeGame.addEventListener('click', () => {
        windowGame.classList.add('displayNone');
    });
});
