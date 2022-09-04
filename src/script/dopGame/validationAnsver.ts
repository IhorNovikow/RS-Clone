import { allAnswers } from './answers/allAnswers';
import { openAnswer } from './openAnswer';
import { getScoreAndName } from './getScoreUser';
import { upScore } from './putNewScore';
export function validationAnsver(rank: string, numberQvestion: number) {
    const inputAnswer = <HTMLInputElement>document.querySelector('.input-answer');
    const btnAnswer = <HTMLElement>document.querySelector('.btn-answer');

    const userNameHTML = <HTMLElement>document.querySelector('.user-name');
    const userScoreHTML = <HTMLElement>document.querySelector('.user-score');
    const userName = <string>localStorage.getItem('username');
    btnAnswer.addEventListener('click', () => {
        if (allAnswers[rank][numberQvestion] === inputAnswer.value) {
            openAnswer('вы ответили правильно!!!');
            upScore(userName, Number(rank));
            getScoreAndName(userName, userNameHTML, userScoreHTML);
        } else {
            openAnswer('ну ты и лох, иди учись, твой ответ полное фуфло');
        }
    });
}
/*тут идет проверка ответ на правильность, так вот "rank"
это количество баллов за вопрос, которые нужно будет просумировать
с баллами которые на сервере, но у них тип string, я так понимаю 
надо будет отправить number*/
