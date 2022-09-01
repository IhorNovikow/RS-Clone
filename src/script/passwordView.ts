passwordView();
export function passwordView(): void {
    const passwordView: NodeListOf<Element> = document.querySelectorAll('.password-view');
    passwordView.forEach((el: Element) => {
        el.addEventListener('click', () => {
            const inputPassword = <HTMLInputElement>el.previousElementSibling;
            if (el.classList.contains('password-view-hide')) {
                el.classList.remove('password-view-hide');
                inputPassword.type = 'password';
            } else {
                el.classList.add('password-view-hide');
                const inputPassword = <HTMLInputElement>el.previousElementSibling;
                inputPassword.type = 'text';
            }
        });
    });
}
