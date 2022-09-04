import { info } from './info/all-info';
import { useVerification } from './useVerification';
import { getTime } from './changeBackground';
import { runBoy, stopBoyAfterAnimation } from './runBoy';
//import { transitionToTopik } from './transitionToTopik';
import { toggleDisplayNone } from './openCloseBook';
import { closeAlert } from './closeAlert';
import { resetProgress } from './resetProgress';

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
    const alertMessage = <HTMLElement>document.querySelector('.alert');
    const alertMessageText = <HTMLElement>document.querySelector('.alert-message-text');
    const resetButton = <HTMLElement>document.querySelector('.alert-button-end');
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
                alertMessage.classList.add('alert-active');
                alertMessageText.innerHTML = 'Сперва необходимо завершить этот этап.';
                closeAlert();
            }
        } else if (inf === 56) {
            alertMessage.classList.add('alert-active');
            resetButton.style.display = 'block';
            alertMessageText.innerHTML = `
            Ура! Ты подтянул математику и помог Тимми найти свой дом.<br>
            Знай, ты всегда сможешь вернуться в те красивые места, в которых ты побывал. А Тимми обязательно составит тебе компанию.
            `;
            closeAlert();
            resetProgress();
        } else {
            const newStr = inf + 1;
            const localResult = +(<string>localStorage.getItem('result'));
            if (newStr <= localResult) {
                inf = newStr;
                test.innerHTML = info[String(inf)];
                useVerification();
            } else {
                alertMessage.classList.add('alert-active');
                alertMessageText.innerHTML = 'Сперва необходимо завершить этот этап.';
                closeAlert();
            }
        }
    });
}
forwardStrGame();

function backStrGame() {
    const btnBack = <HTMLElement>gameStr.querySelector('.btn-back');
    const test = <HTMLElement>gameStr.querySelector('.text');
    const alertMessage = <HTMLElement>document.querySelector('.alert');
    const alertMessageText = <HTMLElement>document.querySelector('.alert-message-text');
    btnBack.addEventListener('click', () => {
        if (inf === 21 || inf === 31 || inf === 41 || inf === 51) {
            inf = inf - 5;
        } else if (inf === 11) {
            alertMessage.classList.add('alert-active');
            alertMessageText.innerHTML = 'Ты в самом начале пути. Поэтому только вперед, мой юный друг!';
            closeAlert();
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
    const alertMessage = <HTMLElement>document.querySelector('.alert');
    const alertMessageText = <HTMLElement>document.querySelector('.alert-message-text');
    subtitleUlInfo.addEventListener('click', (event) => {
        const target = <HTMLElement>event.target;
        if (target === subtitleUlInfo.childNodes[1]) {
            if (target.classList.contains('subtitle-li-info-background2')) {
                toggleDisplayNone();
                const numberGame: string = info[String(11)];
                inf = 11;
                openGame(numberGame);
            } else {
                alertMessage.classList.add('alert-active');
                alertMessageText.innerHTML = 'Для перехода на этот уровень необходимо пройти предыдущие.';
                closeAlert();
            }
        } else if (target === subtitleUlInfo.childNodes[3]) {
            if (target.classList.contains('subtitle-li-info-background2')) {
                toggleDisplayNone();
                const numberGame: string = info[String(21)];
                inf = 21;
                openGame(numberGame);
            } else {
                alertMessage.classList.add('alert-active');
                alertMessageText.innerHTML = 'Для перехода на этот уровень необходимо пройти предыдущие.';
                closeAlert();
            }
        } else if (target === subtitleUlInfo.childNodes[5]) {
            if (target.classList.contains('subtitle-li-info-background2')) {
                toggleDisplayNone();
                const numberGame: string = info[String(31)];
                inf = 31;
                openGame(numberGame);
            } else {
                alertMessage.classList.add('alert-active');
                alertMessageText.innerHTML = 'Для перехода на этот уровень необходимо пройти предыдущие.';
                closeAlert();
            }
        } else if (target === subtitleUlInfo.childNodes[7]) {
            if (target.classList.contains('subtitle-li-info-background2')) {
                toggleDisplayNone();
                const numberGame: string = info[String(41)];
                inf = 41;
                openGame(numberGame);
            } else {
                alertMessage.classList.add('alert-active');
                alertMessageText.innerHTML = 'Для перехода на этот уровень необходимо пройти предыдущие.';
                closeAlert();
            }
        } else if (target === subtitleUlInfo.childNodes[9]) {
            if (target.classList.contains('subtitle-li-info-background2')) {
                toggleDisplayNone();
                const numberGame: string = info[String(51)];
                inf = 51;
                openGame(numberGame);
            } else {
                alertMessage.classList.add('alert-active');
                alertMessageText.innerHTML = 'Для перехода на этот уровень необходимо пройти предыдущие.';
                closeAlert();
            }
        }
    });
}
transitionToTopik();
