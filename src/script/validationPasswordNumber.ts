const pass2: NodeListOf<HTMLInputElement> = document.querySelectorAll('.checked');
pass2.forEach((el) => {
    el.addEventListener('input', () => {
        const pass01 = <HTMLElement>el.parentNode;
        const pass02 = <HTMLElement>pass01.previousElementSibling;
        const pass1 = <HTMLInputElement>pass02.firstElementChild;
        const message = <HTMLElement>pass01.nextElementSibling;
        if (pass1.value !== el.value) {
            el.style.borderBottom = '2px solid #FF0000';
            message.innerHTML = 'Пароли не совпадают';
        } else {
            el.style.borderBottom = '2px solid #008800';
            message.innerHTML = '';
        }
    });
});
