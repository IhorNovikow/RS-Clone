import './style/normalize.css';
import './style/style.css';
import './script/passwordView';

const base = 'http://localhost:3000';

const reg = `${base}/auth/registration`;
const login = `${base}/auth/login`;
/* const users = `${base}/auth/users`; */

const registration = document.querySelector('.registration-button') as HTMLElement;
const userLoginReg = document.querySelector('.input-login') as HTMLInputElement;
const userPassReg = document.querySelector('.input-password') as HTMLInputElement;

const createUser = async (data: { username: string; password: string }) =>
    await fetch(reg, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then((response) => response.json())
        .then((data) => {
            const arr = JSON.stringify(Object.values(data));
            const message = document.querySelector('.regmessage') as HTMLElement;
            const v = arr.split(',');
            if (v.length === 1) {
                localStorage.setItem('username', userLoginReg.value);
                message.innerHTML = JSON.stringify(Object.values(data).toString());
                (<HTMLElement>document.getElementById('regmessage')).style.color = '#008800';
                setTimeout(function () {
                    const pageFront = document.querySelector('.front') as HTMLElement;
                    const page1 = document.querySelector('.page1') as HTMLElement;
                    const page2 = document.querySelector('.page2') as HTMLElement;
                    const page3 = document.querySelector('.page3') as HTMLElement;
                    const page4 = document.querySelector('.page4') as HTMLElement;
                    const page5 = document.querySelector('.page5') as HTMLElement;
                    const page6 = document.querySelector('.page6') as HTMLElement;
                    const pageBack = document.querySelector('.back') as HTMLElement;

                    pageFront.classList.remove('front-close');
                    page1.classList.remove('page1-close');
                    page2.classList.remove('page2-close');
                    page3.classList.remove('page3-close');
                    page4.classList.remove('page4-close');
                    page5.classList.remove('page5-close');
                    page6.classList.remove('page6-close');
                    pageBack.classList.remove('back-close');

                    pageFront.classList.add('front-close');
                    page1.classList.add('page1-close');
                    page2.classList.add('page2-close');
                    page3.classList.add('page3-close');
                    page4.classList.add('page4-close');
                    page5.classList.add('page5-close');
                    page6.classList.add('page6-close');
                    pageBack.classList.add('back-close');
                }, 1000);

                setTimeout(function () {
                    location.href = '../authorization.html';
                }, 2 * 1000);
            } else if (v.length === 2) {
                message.innerHTML = JSON.stringify(Object.values(data).toString());
                (<HTMLElement>document.getElementById('regmessage')).style.color = '#FF0000';
            } else {
                interface DataI {
                    items: { key: string };
                }
                const b: Array<DataI> = Object.values(data);

                const er = Object.values(b[1]);

                const a = er.flat();
                const result = a.map((x) => x.msg);

                message.innerHTML = `"${b[0]}. ${result}"`;
                (<HTMLElement>document.getElementById('regmessage')).style.color = '#FF0000';
            }
            console.log('Success:', data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });

registration.addEventListener('click', async (event) => {
    const target = event.target as Element;
    const a = userLoginReg.value;
    const b = userPassReg.value;
    const data = {
        username: a,
        password: b,
    };

    if (target.classList.contains('registration-button')) {
        createUser(data);
    }
});

const userLog = document.querySelector('.but-log') as HTMLElement;
const userNameLog = document.querySelector('.username') as HTMLInputElement;
const userPassLog = document.querySelector('.userpass') as HTMLInputElement;

const loginUser = async (data: { username: string; password: string }) =>
    await fetch(login, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then((response) => response.json())
        .then((data) => {
            localStorage.setItem('username', userNameLog.value);
            const messageLog = <HTMLElement>document.querySelector('.loginmessage');
            const good = Object.keys(data);
            console.log(good[0].toString());
            if (good[0].toString() == 'token') {
                messageLog.innerHTML = `Вход выполнен успешно`;
                (<HTMLElement>document.getElementById('loginmessage')).style.color = '#008800';
                setTimeout(function () {
                    const pageFront = document.querySelector('.front') as HTMLElement;
                    const page1 = document.querySelector('.page1') as HTMLElement;
                    const page2 = document.querySelector('.page2') as HTMLElement;
                    const page3 = document.querySelector('.page3') as HTMLElement;
                    const page4 = document.querySelector('.page4') as HTMLElement;
                    const page5 = document.querySelector('.page5') as HTMLElement;
                    const page6 = document.querySelector('.page6') as HTMLElement;
                    const pageBack = document.querySelector('.back') as HTMLElement;

                    pageFront.classList.remove('front-close');
                    page1.classList.remove('page1-close');
                    page2.classList.remove('page2-close');
                    page3.classList.remove('page3-close');
                    page4.classList.remove('page4-close');
                    page5.classList.remove('page5-close');
                    page6.classList.remove('page6-close');
                    pageBack.classList.remove('back-close');

                    pageFront.classList.add('front-close');
                    page1.classList.add('page1-close');
                    page2.classList.add('page2-close');
                    page3.classList.add('page3-close');
                    page4.classList.add('page4-close');
                    page5.classList.add('page5-close');
                    page6.classList.add('page6-close');
                    pageBack.classList.add('back-close');
                }, 1000);
                setTimeout(function () {
                    location.href = '../authorization.html';
                }, 2 * 1000);
            } else {
                Object(messageLog).innerHTML = JSON.stringify(Object.values(data).toString()) as string;
                (<HTMLElement>document.getElementById('loginmessage')).style.color = '#FF0000';
            }
            console.log('Success:', data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });

userLog.addEventListener('click', async (event) => {
    const target = event.target as Element;
    const a = userNameLog.value;
    const b = userPassLog.value;
    const data = {
        username: a,
        password: b,
    };

    if (target.classList.contains('but-log')) {
        loginUser(data);
    }
});