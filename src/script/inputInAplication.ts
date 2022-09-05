import { loginUser } from './joinFrontBack/login';

const userLog = document.querySelectorAll('.but-log');
userLog.forEach((el) => {
    el.addEventListener('click', async (event) => {
        const registrationForm = <HTMLElement>el.parentNode;
        const userNameLog = <HTMLInputElement>registrationForm.querySelector('.entered-name');
        const userPassLog = <HTMLInputElement>registrationForm.querySelector('.entered-password');
        const target = event.target as Element;
        const userPassword = userNameLog.value;
        const userLogin = userPassLog.value;
        const data = {
            username: userPassword,
            password: userLogin,
        };

        if (target.classList.contains('but-log')) {
            console.log('отправили запрос', data);
            loginUser(data, registrationForm);
        }
    });
});
