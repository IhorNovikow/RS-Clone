import { getUsers } from './topWiners';
const titleWrapper = <HTMLElement>document.querySelector('.title-wrapper');
titleWrapper.addEventListener('click', () => {
    const winnersWrapper = <HTMLElement>document.querySelector('.list-winers');
    winnersWrapper.classList.toggle('displayNone');
    getUsers();
});
