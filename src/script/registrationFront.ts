import { createUser } from './joinFrontBack/registration';

const registration = document.querySelector('.registration-button') as HTMLElement;
const userLoginReg = document.querySelector('.input-login') as HTMLInputElement;
const userPassReg = document.querySelector('.input-password') as HTMLInputElement;

registration.addEventListener('click', async (event) => {
    const target = event.target as Element;
    const userLogin = userLoginReg.value;
    const userPassword = userPassReg.value;
    const data = {
        username: userLogin,
        password: userPassword,
    };

    if (target.classList.contains('registration-button')) {
        createUser(data);
    }
});
