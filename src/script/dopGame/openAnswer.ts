export function openAnswer() {
    const alertButton = <HTMLElement>document.querySelector('.alert-button');
    const windowQestion = <HTMLElement>document.querySelector('.window-qestion');
    alertButton.addEventListener('click', () => {
        windowQestion.classList.add('displayNone');
    });
}
