import { verification } from './verification';
export function useVerification() {
    const gameStr = <HTMLElement>document.querySelector('.start-wrapper');
    const btnAnswer: Element | null = gameStr.querySelector('.btn-answer');
    if (btnAnswer) {
        btnAnswer.addEventListener('click', () => {
            const a = verification();
            alert(a);
        });
    }
}
