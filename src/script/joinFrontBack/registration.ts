import { bookAnimation } from '../bookAnimation';

const base = 'http://localhost:3000';
const reg = `${base}/auth/registration`;
const userLoginReg = document.querySelector('.input-login') as HTMLInputElement;

export const createUser = async (data: { username: string; password: string }) => {
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
                    bookAnimation();
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
                const values: Array<DataI> = Object.values(data);
                const pseudoArr = Object.values(values[1]);
                const valuesArr = pseudoArr.flat();
                const result = valuesArr.map((x) => x.msg);
                message.innerHTML = `"${values[0]}. ${result}"`;
                (<HTMLElement>document.getElementById('regmessage')).style.color = '#FF0000';
            }
            console.log('Success:', data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
};
