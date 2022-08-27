import { info } from './all-info';
import { useVerification } from './useVerification';

const gameStr = <HTMLElement>document.querySelector('.start-wrapper');
const buttonStarGame = <HTMLButtonElement>document.querySelector('.button-star-game');

export let inf = 11;
localStorage.setItem('result', '12');
buttonStarGame.addEventListener('click', () => {
    gameStr.classList.remove('displayNone');
    const cross = <HTMLElement>document.getElementById('cross-wrapper');
    cross.addEventListener('click', () => {
        gameStr.classList.add('displayNone');
    });

    const test = <HTMLElement>gameStr.querySelector('.text');
    test.innerHTML = info[String(inf)];
    useVerification();
});

function forwardStrGame() {
    const btnForward = <HTMLElement>gameStr.querySelector('.btn-forward');
    const test = <HTMLElement>gameStr.querySelector('.text');
    btnForward.addEventListener('click', () => {
        if (inf === 16 || inf === 26 || inf === 36 || inf === 46) {
            const newStr = inf + 5;
            const localResult = +(<string>localStorage.getItem('result'));
            if (newStr <= localResult) {
                inf = newStr;
            } else {
                alert('увф но вы еще не прошли этот этап');
            }
        } else if (inf === 56) {
            alert('вы выйграли и прошли игру) теперь вы знаете математику');
        } else {
            const newStr = inf + 1;
            const localResult = +(<string>localStorage.getItem('result'));
            if (newStr <= localResult) {
                inf = newStr;
            } else {
                alert('увы но вы еще не прошли этот этап');
            }
        }
        test.innerHTML = info[String(inf)];
        useVerification();
    });
}
forwardStrGame();

function backStrGame() {
    const btnForward = <HTMLElement>gameStr.querySelector('.btn-back');
    const test = <HTMLElement>gameStr.querySelector('.text');
    btnForward.addEventListener('click', () => {
        if (inf === 21 || inf === 31 || inf === 41 || inf === 51) {
            inf = inf - 5;
        } else if (inf === 11) {
            alert(' вы и так в самом начале пути, так что только вперед, не останавливайся)');
        } else {
            inf = inf - 1;
        }
        test.innerHTML = info[String(inf)];
        useVerification();
    });
}
backStrGame();
