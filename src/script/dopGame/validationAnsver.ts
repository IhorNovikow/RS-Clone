import { closeAlert } from '../closeAlert';
import { allAnswers } from './answers/allAnswers';
import { openAnswer } from './openAnswer';
import { getScoreAndName } from './getScoreUser';
import { upScore } from './putNewScore';

export function validationAnsver(rank: string, numberQvestion: number) {
    const inputAnswer = <HTMLInputElement>document.querySelector('.input-answer');
    const btnAnswer = <HTMLElement>document.querySelector('.btn-answer2');

    const userNameHTML = <HTMLElement>document.querySelector('.user-name');
    const userScoreHTML = <HTMLElement>document.querySelector('.user-score');
    const userName = <string>localStorage.getItem('username');

    const alertMessage = <HTMLElement>document.querySelector('.alert');
    const alertMessageText = <HTMLElement>document.querySelector('.alert-message-text');

    btnAnswer.addEventListener('click', () => {
        if (allAnswers[rank][numberQvestion] === inputAnswer.value) {
            alertMessage.classList.add('alert-active');
            alertMessageText.innerHTML = 'Это правильный ответ!';
            closeAlert();
            openAnswer();
            upScore(userName, Number(rank));
            getScoreAndName(userName, userNameHTML, userScoreHTML);
        } else {
            alertMessage.classList.add('alert-active');
            alertMessageText.innerHTML = 'К сожалению, ты ответил неверно.<br>Попробуй выбрать более простой уровень.';
            openAnswer();
        }
    });
}
