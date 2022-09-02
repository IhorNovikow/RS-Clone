import { allInfo } from './info/allInfo';
import { validationAnsver } from './validationAnsver';
import { getRandomIntInclusive } from './randomFunction';
const windowQestion = <HTMLElement>document.querySelector('.window-qestion');
const wrapperPrice = <HTMLElement>document.querySelector('.wrapper-price');
const boxQuestion = <HTMLElement>document.querySelector('.box-question');
const inputAnswer = <HTMLInputElement>document.querySelector('.input-answer');

wrapperPrice.addEventListener('click', (event) => {
    const target = <HTMLElement>event.target;
    if (target.classList.contains('box-price')) {
        inputAnswer.value = '';
        const numberQestion: number = getRandomIntInclusive(0, 19);
        windowQestion.classList.remove('displayNone');
        const content = target.innerHTML;
        boxQuestion.innerHTML = allInfo[content][numberQestion];
        validationAnsver(content, numberQestion);
    }
});
