import { verification } from './verification';
import { closeAlert } from './closeAlert';
export function useVerification() {
    const gameStr = <HTMLElement>document.querySelector('.start-wrapper');
    const btnAnswer: Element | null = gameStr.querySelector('.btn-answer');
    const alertMessage = <HTMLElement>document.querySelector('.alert');
    const alertMessageText = <HTMLElement>document.querySelector('.alert-message-text');
    if (btnAnswer) {
        btnAnswer.addEventListener('click', () => {
            const a = verification();
            if (a) {
                alertMessage.classList.add('alert-active');
                alertMessageText.innerHTML = 'Верно! Можно идти дальше.';
                closeAlert();
            } else {
                alertMessage.classList.add('alert-active');
                alertMessageText.innerHTML = 'К сожалению, ты ошибся. Попробуй еще раз.';
                closeAlert();
            }
        });
    }
}
