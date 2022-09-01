import { createUser } from './joinFrontBack/registration';

const registration = document.querySelectorAll('.button-signin');

registration.forEach((el) => {
    el.addEventListener('click', async () => {
        const parentBlock = <HTMLElement>el.parentNode;
        const userLoginReg = <HTMLInputElement>parentBlock.childNodes[3];
        const userPassReg01 = <HTMLElement>parentBlock.childNodes[7];
        const userPassReg = <HTMLInputElement>userPassReg01.childNodes[1];

        console.log('userPassReg.value', userPassReg.value);
        console.log('userLoginReg', userLoginReg.value);
        const userLogin = userLoginReg.value;
        const userPassword = userPassReg.value;
        const data = {
            username: userLogin,
            password: userPassword,
        };

        if (el.classList.contains('registration-button')) {
            createUser(data);
        }
    });
});

/*
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
*/
