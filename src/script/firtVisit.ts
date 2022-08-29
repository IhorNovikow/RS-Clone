import { changeBackground, getTime } from './changeBackground';

export const dayTime: string = getTime();
function getRandomIntInclusive(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
const backgroundArray: string[] = ['forest', 'mountain', 'snow', 'desert'];
const randomBackGround: number = getRandomIntInclusive(0, 3);
export const nameBackground = backgroundArray[randomBackGround];
localStorage.setItem('nameBackground', backgroundArray[randomBackGround]);
changeBackground(nameBackground, dayTime, 1);
