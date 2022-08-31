const pass1 = document.getElementById('userpass') as HTMLInputElement;
const pass2 = document.getElementById('checked') as HTMLInputElement;

pass2.addEventListener('input', function () {
    const message = document.querySelector('.regmessage') as HTMLElement;
    if (pass1.value !== pass2.value) {
        pass2.style.borderBottom = '2px solid #FF0000';
        message.innerHTML = 'Пароли не совпадают';
    } else {
        pass2.style.borderBottom = '2px solid #008800';
        message.innerHTML = '';
    }
});
