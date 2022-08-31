import './style/normalize.css';
import './style/style.css';
import './script/passwordView';
import { loginUser } from './script/login';
import { createUser } from './script/registration';

/* const users = `${base}/auth/users`; */

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

const userLog = document.querySelector('.but-log') as HTMLElement;
const userNameLog = document.querySelector('.username') as HTMLInputElement;
const userPassLog = document.querySelector('.userpass') as HTMLInputElement;

userLog.addEventListener('click', async (event) => {
    const target = event.target as Element;
    const userPassword = userNameLog.value;
    const userLogin = userPassLog.value;
    const data = {
        username: userPassword,
        password: userLogin,
    };

    if (target.classList.contains('but-log')) {
        loginUser(data);
    }
});
