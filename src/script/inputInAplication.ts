import { loginUser } from './joinFrontBack/login';

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
