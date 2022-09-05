import { bookAnimation } from '../bookAnimation';
const base = 'http://localhost:3000';
const login = `${base}/auth/login`;

//const userNameLog = document.querySelector('.username') as HTMLInputElement;

export const loginUser = async (data2: { username: string; password: string }, registrationForm: HTMLElement) =>
    await fetch(login, {
        method: 'POST',
        body: JSON.stringify(data2),
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then((response) => response.json())
        .then((data) => {
            localStorage.setItem('username', data2.username);
            const messageLog = <HTMLElement>registrationForm.querySelector('.loginmessage');
            const good = Object.keys(data);
            console.log(good[0].toString());
            if (good[0].toString() == 'token') {
                messageLog.innerHTML = `Вход выполнен успешно`;
                (<HTMLElement>registrationForm.querySelector('.loginmessage')).style.color = '#008800';
                setTimeout(function () {
                    bookAnimation();
                }, 1000);
                setTimeout(function () {
                    location.href = '../authorization.html';
                }, 2 * 1000);
            } else {
                Object(messageLog).innerHTML = JSON.stringify(Object.values(data).toString()) as string;
                (<HTMLElement>registrationForm.querySelector('.loginmessage')).style.color = '#FF0000';
            }
            console.log('Success:', data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
