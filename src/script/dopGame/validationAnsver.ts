import { allAnswers } from './answers/allAnswers';
import { openAnswer } from './openAnswer';
export function validationAnsver(rank: string, numberQvestion: number) {
    const inputAnswer = <HTMLInputElement>document.querySelector('.input-answer');
    const btnAnswer = <HTMLElement>document.querySelector('.btn-answer');
    btnAnswer.addEventListener('click', () => {
        if (allAnswers[rank][numberQvestion] === inputAnswer.value) {
            console.log('allAnswers[rank][numberQvestion]', allAnswers[rank][numberQvestion]);
            console.log('typeof allAnswers[rank][numberQvestion]', typeof allAnswers[rank][numberQvestion]);
            console.log('inputAnswer.value', inputAnswer.value);
            console.log('typeof inputAnswer.value', typeof inputAnswer.value);
            //inputAnswer.value = '';
            openAnswer('вы ответили правильно!!!');
        } else {
            console.log('allAnswers[rank][numberQvestion]', allAnswers[rank][numberQvestion]);
            console.log('typeof allAnswers[rank][numberQvestion]', typeof allAnswers[rank][numberQvestion]);
            console.log('inputAnswer.value', inputAnswer.value);
            console.log('typeof inputAnswer.value', typeof inputAnswer.value);
            //inputAnswer.value = '';
            openAnswer('ну ты и лох, иди учись, твой ответ полное фуфло');
        }
    });
}
/*тут идет проверка ответ на правильность, так вот "rank"
это количество баллов за вопрос, которые нужно будет просумировать
с баллами которые на сервере, но у них тип string, я так понимаю 
надо будет отправить number*/
