import { info } from './info/all-info';
import { useVerification } from './useVerification';
import { getTime } from './changeBackground';
import { runBoy, stopBoyAfterAnimation } from './runBoy';
//import { transitionToTopik } from './transitionToTopik';
import { toggleDisplayNone } from './openCloseBook';

const gameStr = <HTMLElement>document.querySelector('.start-wrapper');
const buttonStarGame = <HTMLButtonElement>document.querySelector('.button-star-game');

export let inf = 11;
const localInf = localStorage.getItem('result');
if (localInf) {
    inf = Number(localInf);
} else {
    localStorage.setItem('result', '12');
}
export function openGame(numberGame: string) {
    gameStr.classList.remove('displayNone');
    const cross = <HTMLElement>document.getElementById('cross-wrapper');
    cross.addEventListener('click', () => {
        gameStr.classList.add('displayNone');
    });
    const test = <HTMLElement>gameStr.querySelector('.text');
    test.innerHTML = numberGame;
    useVerification();
}
const numberGame: string = info[String(inf)];
buttonStarGame.addEventListener('click', openGame.bind(null, numberGame));

function forwardStrGame() {
    const btnForward = <HTMLElement>gameStr.querySelector('.btn-forward');
    const test = <HTMLElement>gameStr.querySelector('.text');
    btnForward.addEventListener('click', () => {
        if (inf === 16 || inf === 26 || inf === 36 || inf === 46) {
            const newStr = inf + 5;
            const localResult = +(<string>localStorage.getItem('result'));
            if (newStr <= localResult) {
                inf = newStr;
                test.innerHTML = info[String(inf)];
                useVerification();
                const nameBackground = <string>localStorage.getItem('nameBackground');
                const dayTime: string = getTime();
                runBoy();
                stopBoyAfterAnimation(nameBackground, dayTime, inf);
            } else {
                alert('увы но вы еще не прошли этот этап');
            }
        } else if (inf === 56) {
            alert('вы выйграли и прошли игру) теперь вы знаете математику');
        } else {
            const newStr = inf + 1;
            const localResult = +(<string>localStorage.getItem('result'));
            if (newStr <= localResult) {
                inf = newStr;
                test.innerHTML = info[String(inf)];
                useVerification();
            } else {
                alert('увы но вы еще не прошли этот этап');
            }
        }
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

function transitionToTopik() {
    const subtitleUlInfo = <HTMLUListElement>document.querySelector('.subtitle-ul-info');
    subtitleUlInfo.addEventListener('click', (event) => {
        const target = <HTMLElement>event.target;
        if (target === subtitleUlInfo.childNodes[1]) {
            if (target.classList.contains('subtitle-li-info-background2')) {
                toggleDisplayNone();
                const numberGame: string = info[String(11)];
                inf = 11;
                openGame(numberGame);
            } else {
                alert(' увы вам этот уровень еще недоступен');
            }
        } else if (target === subtitleUlInfo.childNodes[3]) {
            if (target.classList.contains('subtitle-li-info-background2')) {
                toggleDisplayNone();
                const numberGame: string = info[String(21)];
                inf = 21;
                openGame(numberGame);
            } else {
                alert(' увы вам этот уровень еще недоступен');
            }
        } else if (target === subtitleUlInfo.childNodes[5]) {
            if (target.classList.contains('subtitle-li-info-background2')) {
                toggleDisplayNone();
                const numberGame: string = info[String(31)];
                inf = 31;
                openGame(numberGame);
            } else {
                alert(' увы вам этот уровень еще недоступен');
            }
        } else if (target === subtitleUlInfo.childNodes[7]) {
            if (target.classList.contains('subtitle-li-info-background2')) {
                toggleDisplayNone();
                const numberGame: string = info[String(41)];
                inf = 41;
                openGame(numberGame);
            } else {
                alert(' увы вам этот уровень еще недоступен');
            }
        } else if (target === subtitleUlInfo.childNodes[9]) {
            if (target.classList.contains('subtitle-li-info-background2')) {
                toggleDisplayNone();
                const numberGame: string = info[String(51)];
                inf = 51;
                openGame(numberGame);
            } else {
                alert(' увы вам этот уровень еще недоступен');
            }
        }
    });
}
transitionToTopik();
