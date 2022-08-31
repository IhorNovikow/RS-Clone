function passwordView(): void {
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

passwordView();

/*function passwordView() {
    const passwordView = document.querySelectorAll('.password-view');
    passwordView.forEach((el) => {
        el.addEventListener('click', () => {
            const inputPassword = el.previousElementSibling;
            if (el.classList.contains('password-view-hide')) {
                el.classList.remove('password-view-hide');
                inputPassword.type = 'password';
            } else {
                el.classList.add('password-view-hide');
                const inputPassword = el.previousElementSibling;
                inputPassword.type = 'text';
            }
        });
    });
}

passwordView();*/
