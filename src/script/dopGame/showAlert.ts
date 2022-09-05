import { closeAlert } from '../closeAlert';

function showAlert() {
    const game2 = <HTMLElement>document.querySelector('.game2');
    const alertMessage = <HTMLElement>document.querySelector('.alert');
    const alertMessageText = <HTMLElement>document.querySelector('.alert-message-text');
    game2.addEventListener('click', () => {
        alertMessage.classList.add('alert-active');
        alertMessageText.innerHTML = 'Упс... Игра находится на стадии разработки :)';
        closeAlert();
    });
}
showAlert();
