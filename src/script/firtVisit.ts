import { changeBackground, getTime } from './changeBackground';
import { closeAlert } from './closeAlert';

export const dayTime: string = getTime();
function getRandomIntInclusive(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
const backgroundArray: string[] = ['forest', 'mountain', 'snow', 'desert'];
const randomBackGround: number = getRandomIntInclusive(0, 3);
export const nameBackground = backgroundArray[randomBackGround];

const localBackground: string | null = localStorage.getItem('nameBackground');
if (!localBackground) {
    const alertMessage = <HTMLElement>document.querySelector('.alert');
    const alertMessageText = <HTMLElement>document.querySelector('.alert-message-text');
    const userName = <string>localStorage.getItem('username');
    alertMessage.classList.add('alert-active');
    alertMessageText.innerHTML = `Привет, ${userName}! Наш Тимми вышел погулять и совсем заблудился. Помоги ему найти дорогу домой, решая вместе с ним сложные задачи, которые могут встретиться на вашем пути. Удачи!`;
    closeAlert();
}

localStorage.setItem('nameBackground', backgroundArray[randomBackGround]);
changeBackground(nameBackground, dayTime, 1);
