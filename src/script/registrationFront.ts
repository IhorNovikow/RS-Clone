import { createUser } from './joinFrontBack/registration';

const registration = document.querySelectorAll('.button-signin');

registration.forEach((el) => {
    el.addEventListener('click', async () => {
        const parentBlock = <HTMLElement>el.parentNode;
        /*
        const userLoginReg = <HTMLInputElement>parentBlock.childNodes[3];
        const userPassReg01 = <HTMLElement>parentBlock.childNodes[7];
        const userPassReg = <HTMLInputElement>userPassReg01.childNodes[1];
        */
        const userLoginReg = <HTMLInputElement>parentBlock.childNodes[1];
        const userPassReg01 = <HTMLElement>parentBlock.childNodes[3];
        const userPassReg02 = <HTMLElement>parentBlock.childNodes[2];
        const userPassReg = <HTMLInputElement>userPassReg01.childNodes[0];
        const userPassReg2 = <HTMLInputElement>userPassReg02.childNodes[0];
        console.log('userPassReg.value', userPassReg.value);
        console.log('userLoginReg', userLoginReg.value);
        const userLogin = userLoginReg.value;
        const userPassword = userPassReg.value;

        const data = {
            username: userLogin,
            password: userPassword,
        };
        if (userPassword === userPassReg2.value) {
            if (el.classList.contains('registration-button')) {
                createUser(data);
            }
        }
    });
});
