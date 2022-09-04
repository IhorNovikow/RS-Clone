export function closeAlert() {
    const alertMessage = <HTMLElement>document.querySelector('.alert');
    const alertButton = <HTMLElement>document.querySelector('.alert-button');
    alertButton.addEventListener('click', () => {
        alertMessage.classList.remove('alert-active');
    });
}
