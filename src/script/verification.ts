import { answers } from './info/answers';
export function verification(): boolean {
    const gameStr = <HTMLElement>document.querySelector('.start-wrapper');
    const btnAnswer = <HTMLElement>gameStr.querySelector('.btn-answer');
    const info12 = <HTMLInputElement>gameStr.querySelector('.info12');
    const id = Number(btnAnswer.id);
    const value = info12.value;
    if (answers[String(id)] === value) {
        switch (id) {
            case 16:
                localStorage.setItem('result', '22');
                break;
            case 26:
                localStorage.setItem('result', '32');
                break;
            case 36:
                localStorage.setItem('result', '42');
                break;
            case 46:
                localStorage.setItem('result', '52');
                break;
            case 56:
                break;
            default:
                localStorage.setItem('result', String(id + 1));
        }
        return true;
    } else {
        return false;
    }
}
